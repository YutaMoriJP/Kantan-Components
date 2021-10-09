import * as React from "react";
declare type ToolTipProps = {
    children: React.ReactNode;
    text: string;
    toolTipProps?: {};
    width?: string;
} & React.ComponentProps<"article">;
declare const ToolTip: ({ children, text, width, toolTipProps, ...rest }: ToolTipProps) => JSX.Element;
export default ToolTip;
