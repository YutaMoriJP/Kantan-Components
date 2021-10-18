import * as React from "react";
declare type PointerProps = {
    disabled: boolean;
    children: React.ReactNode;
    cursor: "help" | "wait" | "crosshair" | "not-allowed" | "zoom-in" | "grab";
} & React.ComponentProps<"span">;
declare const Pointer: ({ disabled, children, cursor, ...rest }: PointerProps) => JSX.Element;
export default Pointer;
