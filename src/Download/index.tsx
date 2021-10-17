import { useEffect, useMemo, useReducer, useState } from "react";
import * as React from "react";
import { PointerEvent, Link } from "./styled";

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

/**
 *
 * @param {String | Object} url - The `url` can be the endpoint of an API or a `Blob` object instance. See the examples to make sense of it.
 * @param {String} fileName -Controls the file name, like `file.txt`. Note that the `extension` controls what kind of file it is. If the download content is an image, then using the `txt` extension will not work.
 * @param {Boolean} wait - The `wait` prop controls whether you want the download link to be generated right after the component is mounted or not. Note that if it's not a `Blob` object, and the content is served across the network, then a HTTP request is sent. So it's up to you to wait for the request to be sent, which happens after a click event. If `wait` is true, then the download link is generated after a click event is fired. Default value is `true`.
 * @param {String} pending -  The `pending` state controls what will be displayed while the network is happening. The default is `Loading...
 * @param {String } children - The `children` prop controls what will be displayed after the download link is ready. The default is `Download ${fileName}
 * @param {String} idle - If you pass the boolean value `true` to the `wait` prop, then the `idle` prop can be used to pass a default text value while status is `idle`. Something like `Generate download link` would make sense. The default is `Generate ${fileName} download link`.
 * @param {Object} options - If the request can only be send by authroized users, like with the `Authorization` header or `app-id` header, then you can pass an option object, which will be passed as the second argument to the `fetch` API, like `fetch(url, option)`. So, your `options` object should look like `{method: "GET", headers: { Authorization: "Bearer ${API_KEY}" }}`.
 **/

type Headers = { "Content-Type": string; [key: string]: any };

type Option = {
  method: "GET";
  headers: Headers;
  [key: string]: string | Headers;
};

type DownLoadProps = {
  url: string | Blob;
  fileName: string;
  setTextContent: React.Dispatch<React.SetStateAction<string>>;
  children?: string | React.ReactNode;
  wait?: boolean;
  pending?: string;
  resolved?: string;
  options?: Option;
  onOpen?: () => void;
  setMessageText?: React.Dispatch<React.SetStateAction<object>>;
};

const Download = ({
  url,
  fileName = "file",
  setTextContent,
  children,
  wait = true,
  pending = "Loading...",
  resolved = `Download: ${fileName || "file"}`,
  options,
  onOpen,
  setMessageText,
}: DownLoadProps) => {
  //manages status, error, download link as href
  const [state, dispatch] = useReducer(reducer, initialState);
  const { status, error, href } = state;
  //if true, download process is started AFTER click event, if false, starts after mounting
  const [shouldWait, setshouldWait] = useState(wait);
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
  //sets wait to false and starts downloading
  const handleClick = () => {
    setshouldWait(false);
  };
  useEffect(() => {
    let didCancel = false;
    //no need to fetch since an URL is not passed
    if (!url) return;
    //if shouldWait is true, then fetch request happens after click event
    if (shouldWait) return;
    let controller = new AbortController();
    const signal = controller.signal;
    const downloadAsync = async () => {
      try {
        //this block executes if url is a blob object
        if (Blob.prototype.isPrototypeOf(url)) {
          dispatch({ type: "pending" });
          //updates text content of DOM node, like HTMLButtonElement
          setTextContent(pending);
          const href = URL.createObjectURL(url as Blob);
          if (!didCancel) {
            dispatch({ type: "resolved", href });
            setTextContent(resolved);
          }
        } else {
          dispatch({ type: "pending" });
          //updates text content of DOM node, like HTMLButtonElement
          setTextContent(pending);
          await new Promise(res => setTimeout(() => res(1), 5000));

          const res = await fetch(url as string, option);
          if (!res.ok && !didCancel) {
            //updates text content of DOM node, like HTMLButtonElement
            setTextContent(`An error occured. Status code is ${res.status}`);
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
            //updates text content of DOM node, like HTMLButtonElement
            setTextContent(resolved);
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
          //updates text content of DOM node, like HTMLButtonElement
          setTextContent(
            error.message || "An error occured. Try refreshing the page."
          );
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
  }, [url, onOpen, shouldWait]);

  //while pending, content cannot be downloaded, sets CSS declaration - pointer:event: none
  const disabled =
    status === "idle" ? false : status === "pending" ? true : false;

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
          {children}
        </Link>
      </PointerEvent>
      {status === "rejected" ? (
        <p role="alert">
          {error!.message || "Error. Try refreshing the page."}
        </p>
      ) : null}
    </>
  );
};
export default Download;
