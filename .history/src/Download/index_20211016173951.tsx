import { useEffect, useReducer, useState } from "react";
import styled, { css } from "styled-components";
import * as React from "react";

type StyledProps = { disabled: "string"; [prop: string]: any };

const PointerEvent = styled.span<StyledProps>`
  text-decoration: none;
  ${props =>
    props.disabled &&
    css`
      cursor: wait;
    `};
`;

const Link = styled.a<StyledProps>`
  text-decoration: none;
  color: inherit;
  ${props =>
    props.disabled &&
    css`
      pointer-events: none;
    `};

  ${props =>
    !props.disabled &&
    css`
      pointer-events: auto;
    `};
`;

const initialState = {
  status: "idle",
  href: "",
  error: null,
};
type State =
  | typeof initialState
  | { status: "pending"; href: string; error: null }
  | { status: "resolved"; href: string; error: null }
  | { status: "rejected"; href: string; error: Error };

type Action =
  | { type: "pending" }
  | { type: "resolved"; href: string }
  | { type: "rejected"; error: Error };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "pending":
      return { status: action.type, href: "", error: null };
    case "resolved":
      return { status: action.type, href: action.href, error: null };
    case "rejected":
      return { status: action.type, href: "", error: action.error };
    default:
      return state;
  }
};

type Headers = { "Content-Type": string; Authorization: string };

type Option = {
  method: "GET";
  headers: Headers;
  [key: string]: string | Headers;
};

type DownLoadProps = {
  url: string | Blob;
  fileName: string;
  now?: boolean;
  onOpen?: () => void;
  setMessageText?: React.Dispatch<React.SetStateAction<object>>;
  pending?: string;
  idle?: string;
  options?: Option;
};

/**
 *
 * @param {string | object} url - it can either be a blob object that can be converted to an object URL with URL.createObjectURL, or the URL of the resource that needs to be downloaded
 * @param {string} download - the desired file name. If nothing is passed, then the default value 'file' will be used
 * @param {function} onOpen - state setter function that updates the open state to true, which opens up a notification message like 'Ready to download'
 * onOpen is called after object URL is created in useEffect
 * @returns {element} download UI is rendered by <Download/>
 */

const Download = ({
  url,
  fileName,
  onOpen,
  setMessageText,
  pending,
  now = false,
  idle,
  options,
}: DownLoadProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { status, error, href } = state;
  const [startNow, setStartNow] = useState(now);
  const handleClick = () => {
    setStartNow(true);
  };
  useEffect(() => {
    let didCancel = false;
    //no need to fetch since an URL is not passed
    if (!url) return;
    if (!startNow) return;

    let controller = new AbortController();
    const signal = controller.signal;
    const downloadAsync = async () => {
      try {
        if (typeof url === "object") {
          dispatch({ type: "pending" });
          const href = URL.createObjectURL(url);
          if (!didCancel) {
            //delete later
            await new Promise(res => setTimeout(() => res(1), 4000));
            dispatch({ type: "resolved", href });
          }
        } else {
          dispatch({ type: "pending" });
          //delete later
          await new Promise(res => setTimeout(() => res(1), 4000));

          const res = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type":
                "application/json, image/*, text/*, charset=utf-8",
            },
          });
          if (!res.ok && !didCancel) {
            dispatch({
              type: "rejected",
              error: new Error(
                `An error occured. Status code is ${res.status}`
              ),
            });
            return;
          }
          //convert stream of data to a blob
          const blob = await res.blob();
          //convert that blob data to an URL object
          const href = URL.createObjectURL(blob);
          //this is necessary to check that the component was NOT unmounted
          if (!didCancel) {
            //udate state
            dispatch({ type: "resolved", href });
          }
        }
        //check if onOpen is a function
        //could be a function that renders a message component like 'SUCCESS'
        if (typeof onOpen === "function") onOpen();
        //should be the message state rendered by the message component
        if (typeof setMessageText === "function")
          setMessageText({
            messageText: "Content is ready to be downloaded!",
            color: "seagreen",
          });
      } catch (error) {
        if (didCancel || signal.aborted) {
          return;
        }
        if (!didCancel) {
          dispatch({ type: "rejected", error });
          if (typeof setMessageText === "function")
            setMessageText({
              messageText: `Error ${error.message}`,
              color: "red",
            });
        }
      }
    };
    downloadAsync();
    return () => {
      URL.revokeObjectURL(href); //revoking the url object here allows for multiple downloads or else a network error will happen
      didCancel = true;
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, onOpen, startNow]);

  //while pending, content cannot be downloaded
  const disabled =
    status === "idle" ? false : status === "pending" ? true : false;
  return (
    <>
      <PointerEvent disabled={disabled}>
        <Link
          disabled={disabled}
          href={
            status === "idle" || status === "pending" || status === "rejected"
              ? false
              : href
          }
          download={
            status === "idle" || status === "pending" ? "" : fileName || "file"
          }
          onClick={handleClick}
        >
          {status === "resolved"
            ? `Download: ${fileName || "file"}`
            : status === "pending"
            ? pending
            : idle || status}
        </Link>
      </PointerEvent>
      {status === "rejected" && (
        <p role="alert">{error!.message || "Something went wrong"}</p>
      )}
    </>
  );
};

export default Download;
