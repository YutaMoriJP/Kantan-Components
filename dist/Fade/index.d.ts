import * as React from "react";
declare type FadeProps = {
    ms: number;
} & React.ComponentProps<"div">;
/**
 * @param {Number} ms - time value in ms that controls when the content is rendered
 * @param {React.ReactNode} children - content that will be rendered with a fade in animation
 */
declare const Fade: ({ ms, children }: FadeProps) => JSX.Element;
export default Fade;
