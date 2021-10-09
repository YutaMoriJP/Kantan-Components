import * as React from "react";
interface BackdropProps {
    children: React.ReactNode;
    onClick: () => void;
    zIndex?: string;
}
declare const Backdrop: ({ children, onClick, zIndex, }: BackdropProps) => JSX.Element;
export default Backdrop;
