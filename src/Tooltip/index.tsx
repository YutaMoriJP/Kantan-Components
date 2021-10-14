import styled, { css } from "styled-components";
import * as React from "react";

type SpanProps = {
  width: string;
  [rest: string]: any;
};

const Wrapper = styled.span`
  position: relative;
  display: inline-block;
  :hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;

const Span = styled.span<SpanProps>`
  visibility: hidden;
  width: 100px;
  background-color: #212529;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 5px 0;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
  /* BOTTOM */
  ${props =>
    props.bottom &&
    css`
      position: absolute;
      z-index: 1;
      top: 100%;
      left: 50%;
      margin-left: -50px;
    `}
  /* TOP */
  ${props =>
    props.top &&
    css`
      position: absolute;
      z-index: 1;
      bottom: 100%;
      left: 50%;
      margin-left: -50px;
    `}
    /* LEFT */
    ${props =>
    props.left &&
    css`
      position: absolute;
      z-index: 1;
      top: -5px;
      right: 105%;
    `}
      /* RIGHT */
      ${props =>
    props.right &&
    css`
      position: absolute;
      z-index: 1;
      top: -5px;
      left: 105%;
    `}
`;

type ToolTipProps = {
  children: React.ReactNode;
  text: string;
  bottom?: boolean;
  top?: boolean;
  right?: boolean;
  left?: boolean;
  toolTipProps?: {};
} & React.ComponentProps<"article">;

const Tooltip = ({
  children,
  text,
  toolTipProps = {},
  ...rest
}: ToolTipProps): JSX.Element => {
  const [hidden, setHidden] = React.useState(true);
  const handleMouseOver = () => setHidden(false);
  const handleMouseOut = () => setHidden(true);

  //apply default position, if all top/bottom/left/right are false, bottom is true
  const { top, bottom, left, right } = rest;
  const defaultPosition = !top && !bottom && !left && !right ? true : false;

  return (
    <Wrapper onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {children}
      <Span
        className="tooltiptext"
        aria-hidden={hidden}
        aria-label={text}
        bottom={defaultPosition}
        {...rest}
      >
        {text}
      </Span>
    </Wrapper>
  );
};

export default Tooltip;
