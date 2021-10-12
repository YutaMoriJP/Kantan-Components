import * as React from "react";
interface MessageProps {
    children: string | React.ReactNode;
    onClose: () => void;
    ms: number;
    below?: boolean;
    color?: string;
    bottom?: boolean;
}
/**
 *
 * @param {String} children rendered message
 * @param {Function} onClose unmounts Message component
 * @param {Number} ms time value that closes the Message component
 * @param {Boolean} below optional value that renders the Message component right below the parent
 * @param {Boolean} bottom optional value that renders the Message component at the bottom of the viewport
 * @param {String} color sets the background color for the bottom/fixed options
 * @returns
 */
declare const Message: ({ children, onClose, ms, below, bottom, color, }: MessageProps) => JSX.Element;
export default Message;
