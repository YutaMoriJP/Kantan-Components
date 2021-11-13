import * as React from "react";
declare type Children = {
    children: React.ReactNode;
};
declare type Props = {
    checkedColor?: string;
    uncheckedColor?: string;
    checked: boolean;
    onCheckedChange: () => void;
    id?: string;
} & Children;
declare const _default: ({ checkedColor, uncheckedColor, children, checked, onCheckedChange, ...rest }: Props) => JSX.Element;
export default _default;
