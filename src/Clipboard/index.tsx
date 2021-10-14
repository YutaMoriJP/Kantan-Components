import * as React from "react";
import { calculatePlacement } from "./util";
import { useToggle, useClipboard, useHeight, useWidth } from "kantan-hooks";
import Message from "../Message";

/**
 * @param {React.ReactNode | String} children - content that should allos user to fire an even handler, like a click event with a button
 * @param {String} toBeCopied - content that will be copied to the user's Clipboard
 * @param {String} message - optional value that represents the content of the message after users have copied to their clipboard. Default is `Copied`.
 */

type ClipboardProps = {
  children: React.ReactNode | string;
  toBeCopied: string;
  message?: string;
} & React.ComponentProps<"span">;

const Clipboard = ({
  children,
  toBeCopied,
  message = "COPIED",
  ...rest
}: ClipboardProps) => {
  //used to manage message state
  const { open, onOpen, onClose } = useToggle(false);
  //used to manage clipboard state
  const { open: copied, toggle } = useToggle();
  //manages the copying operation
  const { resolved, rejected, error } = useClipboard(
    toBeCopied,
    copied,
    onOpen
  );
  //has reference on span element
  const spanRef = React.useRef<HTMLSpanElement>(null);
  //points at viewport height
  const windowHeight = useHeight({ current: window });
  //points at viewport width
  const windowWidth = useWidth({ current: window });
  //points at HTMLElement or null in initial render
  const element = spanRef.current;
  //points at DOMRect or null in initial render
  const rect = element ? element.getBoundingClientRect() : element;
  //points at placement i.e. what side has the most available space, like 'left'
  const position = element
    ? calculatePlacement(rect!, windowWidth!, windowHeight!)
    : null;
  //controls the button text content
  //the string "Copied" should logically never be evaluated, but still used as a safeguard.
  const buttonText =
    open && resolved
      ? message
      : open && rejected
      ? error!.message || "Not copied"
      : "Copied";
  //if operation has rejected then error message might be longer
  //so keep Message mounted for 4 seconds
  const ms = resolved ? 1000 : rejected ? 4000 : 2000;

  const handleClick = () => {
    toggle();
    onOpen();
  };

  return (
    <>
      <span
        onClick={handleClick}
        style={{
          position: "relative",
        }}
        ref={spanRef}
        {...rest}
      >
        {children}
        {open ? (
          <Message
            onClose={onClose}
            ms={ms}
            position={position as "top" | "right" | "bottom" | "left"}
            color="white"
          >
            {buttonText}
          </Message>
        ) : null}
      </span>
    </>
  );
};

export default Clipboard;
