import styled, { css } from "styled-components";
import * as React from "react";

type StyledProps = { [prop: string]: any };

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

type PointerProps = {
  as: "a" | "span" | "div";
  disabled: boolean;
};

const Pointer = ({ as = "a", disabled }: PointerProps) => {
  return (
    <>
      <PointerEvent>
        <Link disabled={disabled} as={as}></Link>
      </PointerEvent>
    </>
  );
};

export default Pointer;
