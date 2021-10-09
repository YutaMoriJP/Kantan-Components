import * as React from "react";
import styled from "styled-components";

const Text = styled.span`
  position: absolute;
  padding: 6px;
  border-radius: 5px;
  top: 115%;
  left: 45%;
  font-size: 0.6rem;
  transform: translate(-50%);
  background: ${(props: { color?: string }) => props.color || "#212529"};
  color: #f8f9fa;
  font-weight: 500;
  width: max-content;
  z-index: 10000;
`;

const Fixed = styled.aside`
  position: fixed;
  bottom: 0;
  left: 50%;
  border-radius: 5px;
  transform: translate(-50%);
  padding: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
  color: white;
  width: max-content;
  background: ${(props: { color?: string }) => props.color || "#212529"};
`;

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
 * @param {String} children rendered message
 * @param {Function} onClose unmounts Message component
 * @param {Number} ms time value that closes the Message component
 * @param {Boolean} bottom optional value that renders the Message component right below the parent
 * @param {Boolean} fixed optional value that renders the Message component at the bottom of the viewport
 * @param {String} color sets the background color for the bottom/fixed options
 * @returns
 */

const Message = ({
  children,
  onClose,
  ms = 2000,
  bottom,
  fixed,
  color,
}: MessageProps): JSX.Element => {
  const timerRef = React.useRef<NodeJS.Timeout>(null!);
  React.useEffect(() => {
    timerRef.current = setTimeout(onClose, ms);
    return (): void => {
      clearTimeout(timerRef.current);
    };
  }, [ms, onClose]);
  //if bottom is true, text is placed right below the containing element, like a button (must have position:relaitve CSS RULE)
  if (bottom) return <Text color={color}>{children}</Text>;
  //if fixed is true, the text is placed at the bottom of the page
  if (fixed) return <Fixed color={color}>{children}</Fixed>;
  return <>{children}</>;
};
export default Message;
