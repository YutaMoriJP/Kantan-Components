import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import styled, { css } from "styled-components";

type StyledProps = { [key: string]: any };

const colorTokens = {
  dark: "#5f3dc4",
  medium: "rgb(87, 70, 175)",
  light: "#f3f0ff",
};

const BaseStyle = css`
  all: unset;
  font-size: 13px;
  line-height: 1;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 5px;
  position: relative;
  padding-left: 25px;
  color: ${colorTokens.medium};
  :focus {
    background: ${colorTokens.dark};
    color: ${colorTokens.light};
  }
  &[data-disabled] {
    color: grey !important;
    opacity: 0.5;
  }
`;

const StyledContent = styled(DropdownMenuPrimitive.Content)<StyledProps>`
  min-width: 220px;
  background: white;
  border-radius: 6px;
  box-shadow: 5px 5px 14px #495057;
  padding: 5px;
  /* this overrides the default css above */
  ${props => props.$contentStyle}
`;

const StyledItem = styled(DropdownMenuPrimitive.Item)<StyledProps>`
  ${BaseStyle}
  /* this overrides the default css */
  ${props => props.$baseStyle}
`;

const StyledSeperator = styled(DropdownMenuPrimitive.Separator)`
  height: 1px;
  margin: 5px;
  background-color: ${colorTokens.medium};
`;

const StyledTriggerItem = styled(
  DropdownMenuPrimitive.TriggerItem
)<StyledProps>`
  ${BaseStyle}
  /* this overrides the default css */
  ${props => props.$baseStyle}
`;

const StyledCheckboxItem = styled(
  DropdownMenuPrimitive.CheckboxItem
)<StyledProps>`
  ${BaseStyle}
  /* this overrides the default css */
  ${props => props.$baseStyle}
`;

const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem)<StyledProps>`
  ${BaseStyle}
  /* this overrides the default css */
  ${props => props.$baseStyle}
`;
const StyledRadioLabel = styled(DropdownMenuPrimitive.Label)`
  font-size: 12px;
  line-height: 25px;
  color: grey;
  opacity: 0.5;
  padding-left: 25px;
`;
//should be wrapped in item like <MenuItem>More <RightSlot>+</RightSlot></MenuItem>
//should wrap SVG ICON
export const RightSlot = styled.div`
  margin-left: auto;
  padding-left: 20px;
`;
//Container for MAIN Menu but also NESTED MENU
export const DropdownMenu = DropdownMenuPrimitive.Root;
//Main Trigger opening main Menu
export const TriggerMain = DropdownMenuPrimitive.Trigger;
//Nested Trigger opening nested menu
export const TriggerItem = StyledTriggerItem;
//Displays Menu Content - renders menu item - used for BOTH Main/Nested
export const MenuContent = StyledContent;
//Menu Item
export const MenuItem = StyledItem;
//Seperator
export const Seperator = StyledSeperator;
//Checkbox item - toggles checked state
type CheckboxItemProps = {
  checked: boolean;
  setChecked: () => void;
  children: React.ReactNode;
};

export const CheckboxItem = ({
  checked,
  setChecked,
  children,
  ...rest
}: CheckboxItemProps): JSX.Element => (
  <StyledCheckboxItem checked={checked} onCheckedChange={setChecked} {...rest}>
    {children}
  </StyledCheckboxItem>
);
//if checked state is true, item is rendered, wrapped by CheckboxItem/RadioItem
export const ItemIndicator = StyledItemIndicator;
//Radio Group Container
type RadioGroupProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
};
export const RadioGroup = ({
  value,
  setValue,
  children,
  ...rest
}: RadioGroupProps) => (
  <DropdownMenuPrimitive.RadioGroup
    value={value}
    onValueChange={setValue}
    {...rest}
  >
    {children}
  </DropdownMenuPrimitive.RadioGroup>
);
//Radio Item
export const RadioItem = StyledRadioItem;
//label for radio item
export const RadioLabel = StyledRadioLabel;

type DropdownProps = {
  children: React.ReactNode;
  [key: string]: any;
};

const Dropdown = ({ children }: DropdownProps) => {
  return (
    <DropdownMenu>
      {/* main menu content COMPOSED with primitives */}
      {children}
    </DropdownMenu>
  );
};

export default {
  Dropdown,
  DropdownMenu,
  TriggerMain,
  TriggerItem,
  MenuContent,
  Seperator,
  RightSlot,
  CheckboxItem,
  ItemIndicator,
  RadioGroup,
  RadioItem,
  RadioLabel,
};
