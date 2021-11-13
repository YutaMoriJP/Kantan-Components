import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
declare type StyledProps = {
    [key: string]: any;
};
export declare const RightSlot: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const DropdownMenu: React.FC<DropdownMenuPrimitive.DropdownMenuProps>;
export declare const TriggerMain: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export declare const TriggerItem: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerItemProps & React.RefAttributes<HTMLDivElement>>, any, StyledProps, never>;
export declare const MenuContent: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuContentProps & React.RefAttributes<HTMLDivElement>>, any, StyledProps, never>;
export declare const MenuItem: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>>, any, StyledProps, never>;
export declare const Seperator: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React.RefAttributes<HTMLDivElement>>, any, {}, never>;
declare type CheckboxItemProps = {
    checked: boolean;
    setChecked: () => void;
    children: React.ReactNode;
};
export declare const CheckboxItem: ({ checked, setChecked, children, ...rest }: CheckboxItemProps) => JSX.Element;
export declare const ItemIndicator: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuItemIndicatorProps & React.RefAttributes<HTMLSpanElement>>, any, {}, never>;
declare type RadioGroupProps = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    children: React.ReactNode;
};
export declare const RadioGroup: ({ value, setValue, children, ...rest }: RadioGroupProps) => JSX.Element;
export declare const RadioItem: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React.RefAttributes<HTMLDivElement>>, any, StyledProps, never>;
export declare const MenuLabel: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuLabelProps & React.RefAttributes<HTMLDivElement>>, any, {}, never>;
declare type DropdownProps = {
    children: React.ReactNode;
    [key: string]: any;
};
declare const Dropdown: ({ children }: DropdownProps) => JSX.Element;
export default Dropdown;
