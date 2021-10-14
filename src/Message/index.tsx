import * as React from "react";
import styled, { css } from "styled-components";
type StyledProps = { [key: string]: any };

const Position = styled.span<StyledProps>`
  width: fit-content;
  color: ${props => props.color || "white"};
  background: ${props => props.bgColor || "#212529"};
  opacity: 0.9;
  text-align: center;
  border-radius: 5px;
  padding: 6px;
  position: absolute;

  /* BOTTOM */
  ${props =>
    props.position === "bottom" &&
    css`
      z-index: 1;
      top: 100%;
      left: 50%;
      margin-left: -50px;
    `}
  /* TOP */
  ${props =>
    props.position === "top" &&
    css`
      z-index: 1;
      bottom: 100%;
      left: 50%;
      margin-left: -50px;
    `}
    /* LEFT */
    ${props =>
    props.position === "left" &&
    css`
      position: absolute;
      z-index: 1;
      top: -5px;
      right: 105%;
    `}
      /* RIGHT */
      ${props =>
    props.position === "right" &&
    css`
      z-index: 1;
      top: -5px;
      left: 105%;
    `}
`;

const Fixed = styled.span<StyledProps>`
  position: fixed;
  bottom: 0;
  left: 50%;
  border-radius: 5px;
  transform: translate(-50%);
  padding: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
  width: max-content;

  color: ${props => props.color || "white"};
  background: ${props => props.bgColor || "#212529"};
`;

interface MessageProps {
  children: string | React.ReactNode;
  onClose: () => void;
  ms: number;
  position?: "top" | "right" | "bottom" | "left";
  below?: boolean;
  bgColor?: string;
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

const Message = ({
  children,
  onClose,
  ms = 2000,
  bottom,
  color,
  bgColor,
  position,
  ...rest
}: MessageProps): JSX.Element => {
  const timerRef = React.useRef<NodeJS.Timeout>(null!);
  React.useEffect(() => {
    timerRef.current = setTimeout(onClose, ms);
    return (): void => {
      clearTimeout(timerRef.current);
    };
  }, [ms, onClose]);
  //position can only be "top" | "right" | "bottom" | "left";
  if (position)
    return (
      <Position bgColor={bgColor} color={color} position={position} {...rest}>
        {children}
      </Position>
    );
  //if fixed is true, the text is placed at the bottom of the page
  if (bottom)
    return (
      <Fixed bgColor={bgColor} color={color} {...rest}>
        {children}
      </Fixed>
    );
  return <>{children}</>;
};

export default Message;
