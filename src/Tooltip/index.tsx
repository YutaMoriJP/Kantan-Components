import styled from "styled-components";
import * as React from "react";

type ArticleProps = {
  width: string;
  [rest: string]: any;
};

const Article = styled.article<ArticleProps>`
  text-decoration: 0;
  position: relative;
  margin: 0;
  width: ${props => props.width || "fit-content"};
  .tooltiptext {
    visibility: hidden;
    background-color: #212529;
    opacity: 0.9;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    font-size: 0.5rem;
    width: 100%;
    top: 100%;
    left: 50%;
    font-size: 0.9rem;
    transform: translateX(-50%);
  }
  :hover .tooltiptext {
    visibility: visible;
  }
`;

type ToolTipProps = {
  children: React.ReactNode;
  text: string;
  toolTipProps?: {};
  width?: string;
} & React.ComponentProps<"article">;

const ToolTip = ({
  children,
  text,
  width = "fit-content",
  toolTipProps = {},
  ...rest
}: ToolTipProps): JSX.Element => {
  const [hidden, setHidden] = React.useState(true);
  const handleMouseOver = () => setHidden(false);
  const handleMouseOut = () => setHidden(true);
  return (
    <Article
      width={width}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      {...rest}
    >
      {children}
      <span
        className="tooltiptext"
        aria-hidden={hidden}
        aria-label={text}
        {...toolTipProps}
      >
        {text}
      </span>
    </Article>
  );
};

export default ToolTip;
