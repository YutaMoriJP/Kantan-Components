import styled, { css } from "styled-components";

const baseStyle = css`
  padding-left: 10px;
`;

type StyledType = { [key: string]: any };

const PopOverContainer = styled.div`
  position: relative;
`;

const PopOverMenu = styled.div<StyledType>`
  width: 300px;
  height: 200px;
  background-color: #f8f9fa;
  position: absolute;
  left: 50%;
  border-radius: 4px;
  transform: translate(-50%);
  opacity: 0;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
  ${props =>
    props.$hover &&
    css`
      opacity: 1;
    `}
  ${props =>
    props.$top &&
    css`
      top: -400%;
    `}
  ${props => props.$baseStyle}
`;

const PopOverCloseWrapper = styled.div<StyledType>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${props => props.$baseStyle}
`;

const PopOverContent = styled.div`
  ${baseStyle}
`;

//correct usage https://codesandbox.io/s/popover-tsx-yrnxr?file=/src/App.tsx:2717-2728

export default {
  Root: PopOverContainer,
  MainMenu: PopOverMenu,
  CloseWrapper: PopOverCloseWrapper,
  Content: PopOverContent,
};
