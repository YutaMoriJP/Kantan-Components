/// <reference types="react" />
declare type PointerProps = {
    as: "a" | "span" | "div";
    disabled: boolean;
};
declare const Pointer: ({ as, disabled }: PointerProps) => JSX.Element;
export default Pointer;
