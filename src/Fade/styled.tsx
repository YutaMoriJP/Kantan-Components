import styled, { css } from "styled-components";

type FadeProps = { [key: string]: any } & React.ComponentProps<"div">;

const Fade = styled.div<FadeProps>`
  opacity: 0;
  transition: opacity 2s ease-in-out;
  ${props =>
    props.on &&
    css`
      && {
        opacity: 1;
      }
    `}
`;

export default Fade;
