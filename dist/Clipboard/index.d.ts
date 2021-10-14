import * as React from "react";
/**
 * @param {React.ReactNode | String} children - content that should allos user to fire an even handler, like a click event with a button
 * @param {String} toBeCopied - content that will be copied to the user's Clipboard
 * @param {String} message - optional value that represents the content of the message after users have copied to their clipboard. Default is `Copied`.
 */
declare type ClipboardProps = {
    children: React.ReactNode | string;
    toBeCopied: string;
    message?: string;
} & React.ComponentProps<"span">;
declare const Clipboard: ({ children, toBeCopied, message, ...rest }: ClipboardProps) => JSX.Element;
export default Clipboard;
