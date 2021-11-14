import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
declare type StyledProps = {
    [key: string]: any;
};
declare type CheckboxItemProps = {
    checked: boolean;
    setChecked: () => void;
    children: React.ReactNode;
};
declare type RadioGroupProps = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    children: React.ReactNode;
};
declare type DropdownProps = {
    children: React.ReactNode;
    [key: string]: any;
};
declare const _default: {
    Dropdown: ({ children }: DropdownProps) => JSX.Element;
    DropdownMenu: React.FC<DropdownMenuPrimitive.DropdownMenuProps>;
    TriggerMain: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>;
    TriggerItem: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerItemProps & React.RefAttributes<HTMLDivElement>>, any, StyledProps, never>;
    MenuContent: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuContentProps & React.RefAttributes<HTMLDivElement>>, any, StyledProps, never>;
    MenuItem: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>>, any, StyledProps, never>;
    Seperator: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React.RefAttributes<HTMLDivElement>>, any, {}, never>;
    RightSlot: import("styled-components").StyledComponent<"div", any, {}, never>;
    CheckboxItem: ({ checked, setChecked, children, ...rest }: CheckboxItemProps) => JSX.Element;
    ItemIndicator: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuItemIndicatorProps & React.RefAttributes<HTMLSpanElement>>, any, {}, never>;
    RadioGroup: ({ value, setValue, children, ...rest }: RadioGroupProps) => JSX.Element;
    RadioItem: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React.RefAttributes<HTMLDivElement>>, any, StyledProps, never>;
    RadioLabel: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuLabelProps & React.RefAttributes<HTMLDivElement>>, any, {}, never>;
};
export default _default;
