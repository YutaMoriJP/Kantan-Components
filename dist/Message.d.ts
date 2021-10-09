import * as React from "react";
interface MessageProps {
    children: string | React.ReactNode;
    onClose: () => void;
    ms: number;
    bottom?: boolean;
    color?: string;
    fixed?: boolean;
}
/**
 *
 * @param {string} children rendered message
 * @param {Function} onClose closes message
 * @param {number} ms time value that closes the message
 * @returns
 */
declare const Message: ({ children, onClose, ms, bottom, fixed, color, }: MessageProps) => JSX.Element;
export default Message;
