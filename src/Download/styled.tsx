import styled, { css } from "styled-components";

type StyledProps = { disabled: "string"; [prop: string]: any };

export const PointerEvent = styled.span<StyledProps>`
  text-decoration: none;
  ${props =>
    props.disabled &&
    css`
      cursor: wait;
    `};
`;

export const Link = styled.a<StyledProps>`
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
