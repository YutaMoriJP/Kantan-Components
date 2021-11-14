import styled from "styled-components";
import * as React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const Container = styled.span`
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
    transition: opacity 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;

type Props = {
  children: React.ReactNode;
  text: string;
  [key: string]: any;
};

const Text = ({ children, text }: Props): JSX.Element => {
  return (
    <SwitchTransition>
      <CSSTransition
        classNames="fade"
        addEndListener={(node: HTMLElement, done: any) => {
          node.addEventListener("transitionend", done, false);
        }}
        key={text}
      >
        {children}
      </CSSTransition>
    </SwitchTransition>
  );
};

export default { Container, Text };
