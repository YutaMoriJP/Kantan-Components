import * as React from "react";
interface MessageProps {
    children: string | React.ReactNode;
    onClose: () => void;
    ms: number;
    position?: "top" | "right" | "bottom" | "left";
    below?: boolean;
    bgColor?: string;
    color?: string;
    bottom?: boolean;
    center?: boolean;
}
/**
 *
 * @param {String} children rendered message
 * @param {Function} onClose unmounts Message component
 * @param {Number} ms time value that closes the Message component
 * @param {Boolean} position optional value that renders the Message component on the given positional value
 * @param {Boolean} bottom optional value that renders the Message component at the bottom of the viewport
 * @param {Boolean} center optional value that renders the Message component at the center of the viewport
 * @param {String} color sets the text color for the bottom/position options
 * @param {String} bgColor sets the background color for the bottom/position options
 * @returns
 */
declare const Message: ({ children, onClose, ms, bottom, color, bgColor, position, center, ...rest }: MessageProps) => JSX.Element;
export default Message;
