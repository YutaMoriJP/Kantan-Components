import { useEffect, useMemo, useReducer, useState } from "react";
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

type Headers = { "Content-Type": string; [key: string]: any };

type Option = {
  method: "GET";
  headers: Headers;
  [key: string]: string | Headers;
};

type DownLoadProps = {
  url: string | Blob;
  fileName: string;
  wait?: boolean;
  children?: string;
  pending?: string;
  idle?: string;
  options?: Option;
  onOpen?: () => void;
  setMessageText?: React.Dispatch<React.SetStateAction<object>>;
};

const Download = ({
  url,
  fileName,
  wait = true,
  pending = "Loading...",
  idle = `Generate ${fileName} download link`,
  children = `Download: ${fileName || "file"}`,
  options,
  onOpen,
  setMessageText,
}: DownLoadProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { status, error, href } = state;
  const [startwait, setStartwait] = useState(wait);
  //if options object is passed then use the passed object
  const option = useMemo(
    (): Option =>
      options
        ? options
        : {
            method: "GET",
            headers: {
              "Content-Type":
                "application/json, image/*, text/*, charset=utf-8",
            },
          },
    []
  );
  const handleClick = () => {
    setStartwait(true);
  };
  useEffect(() => {
    let didCancel = false;
    //no need to fetch since an URL is not passed
    if (!url) return;
    if (!startwait) return;

    let controller = new AbortController();
    const signal = controller.signal;
    const downloadAsync = async () => {
      try {
        if (typeof url === "object") {
          dispatch({ type: "pending" });
          const href = URL.createObjectURL(url);
          if (!didCancel) {
            dispatch({ type: "resolved", href });
          }
        } else {
          dispatch({ type: "pending" });
          const res = await fetch(url, option);
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
        //request is canceled - don't update state
        if (didCancel || signal.aborted) {
          return;
        }
        if (!didCancel) {
          dispatch({ type: "rejected", error });
          //message state can be updated
          if (typeof setMessageText === "function")
            setMessageText({
              messageText: `Error ${error.message}`,
              color: "red",
            });
        }
      }
    };
    downloadAsync();
    return (): void => {
      URL.revokeObjectURL(href); //revoking the url object here allows for multiple downloads or else a network error will happen
      didCancel = true;
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, onOpen, startwait]);

  //while pending, content cannot be downloaded
  const disabled =
    status === "idle" ? false : status === "pending" ? true : false;

  const linkText =
    status === "resolved" ? (
      children
    ) : status === "pending" ? (
      pending
    ) : status === "idle" ? (
      idle
    ) : status === "rejected" ? (
      <span role="alert">{error!.message || "Something went wrong"}</span>
    ) : null;

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
          {linkText}
        </Link>
      </PointerEvent>
    </>
  );
};

export default Download;
