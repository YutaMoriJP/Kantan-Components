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

/**
 *
 * @param {String | object} url - The `url` can be the endpoint of an API or a `Blob` object instance. See the examples to make sense of it.
 * @param {String} fileName -Controls the file name, like `file.txt`. Note that the `extension` controls what kind of file it is. If the download content is an image, then using the `txt` extension will not work.
 * @param {Boolean} wait - The `wait` prop controls whether you want the download link to be generated right after the component is mounted or not. Note that if it's not a `Blob` object, and the content is served across the network, then a HTTP request is sent. So it's up to you to wait for the request to be sent, which happens after a click event. If `wait` is true, then the download link is generated after a click event is fired. Default value is `true`.
 * @param {String} pending -  The `pending` state controls what will be displayed while the network is happening. The default is `Loading...
 * @param {String } children - The `children` prop controls what will be displayed after the download link is ready. The default is `Download ${fileName}
 * @param {String} idle - If you pass the boolean value `true` to the `wait` prop, then the `idle` prop can be used to pass a default text value while status is `idle`. Something like `Generate download link` would make sense. The default is `Generate ${fileName} download link`.
 * @param {Object }options
 **/
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
  console.log("url", url);
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
    setStartwait(false);
  };
  useEffect(() => {
    let didCancel = false;
    //no need to fetch since an URL is not passed
    if (!url) return;
    if (startwait) return;

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
  const hrefProp =
    status === "idle" || status === "pending" || status === "rejected"
      ? {}
      : { href };
  const downloadProp =
    status === "idle" || status === "pending"
      ? {}
      : { download: fileName || "file" };

  return (
    <>
      <PointerEvent disabled={disabled}>
        <Link
          disabled={disabled}
          onClick={handleClick}
          {...downloadProp}
          {...hrefProp}
        >
          {linkText}
        </Link>
      </PointerEvent>
    </>
  );
};
export default Download;
