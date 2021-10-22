import styled, { css } from "styled-components";
import * as React from "react";

type StyledProps = {
  [prop: string]: any;
  cursor: "help" | "wait" | "crosshair" | "not-allowed" | "zoom-in" | "grab";
};

const Cursor = styled.span<StyledProps>`
  text-decoration: none;
  cursor: ${props => (props.disabled ? props.cursor || "not-allowed" : "auto")};
`;

const PointerEvent = styled.span<StyledProps>`
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
  disabled: boolean;
  children: React.ReactNode;
  cursor: "help" | "wait" | "crosshair" | "not-allowed" | "zoom-in" | "grab";
} & React.ComponentProps<"span">;

const Pointer = ({
  disabled,
  children,
  cursor = "not-allowed",
  ...rest
}: PointerProps): JSX.Element => {
  return (
    <Cursor aria-disabled={disabled} disabled={disabled} cursor={cursor}>
      <PointerEvent disabled={disabled} {...rest}>
        {children}
      </PointerEvent>
    </Cursor>
  );
};

export default Pointer;
