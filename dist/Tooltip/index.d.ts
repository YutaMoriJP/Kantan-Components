import * as React from "react";
declare type ToolTipProps = {
    children: React.ReactNode;
    text: string;
    bottom?: boolean;
    describedBy: string;
    top?: boolean;
    right?: boolean;
    left?: boolean;
    toolTipProps?: {};
} & React.ComponentProps<"article">;
declare const Tooltip: ({ children, text, toolTipProps, describedBy, ...rest }: ToolTipProps) => JSX.Element;
export default Tooltip;
