import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";
import styled from "styled-components";

type StyledProps = { [key: string]: any };
const StyledCheckbox = styled(CheckboxPrimitive.Root)<StyledProps>`
  all: unset;
  background-color: ${props => props.$bgColor};
  width: 25px;
  height: 25px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px grey;
  transition: background-color 300ms ease-in-out;
`;

const Checkbox = StyledCheckbox;

type Children = { children: React.ReactNode };

const CheckboxIndicator = ({ children }: Children) => (
  <CheckboxPrimitive.Indicator>{children}</CheckboxPrimitive.Indicator>
);

type Props = {
  checkedColor?: string;
  uncheckedColor?: string;
  checked: boolean;
  onCheckedChange: () => void;
  id?: string;
} & Children;

export default ({
  checkedColor = "#2b8a3e",
  uncheckedColor = "#f8f9fa",
  children,
  checked,
  onCheckedChange,
  ...rest
}: Props): JSX.Element => {
  return (
    <Checkbox
      $bgColor={checked ? checkedColor : uncheckedColor}
      checked={checked}
      onCheckedChange={onCheckedChange}
      {...rest}
    >
      <CheckboxIndicator>{children}</CheckboxIndicator>
    </Checkbox>
  );
};
