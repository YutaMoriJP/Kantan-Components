import { useToggle } from "kantan-hooks";
import { useEffect, useRef } from "react";
import Wrapper from "./styled";
import * as React from "react";

type FadeProps = { ms: number } & React.ComponentProps<"div">;

/**
 * @param {Number} ms - time value in ms that controls when the content is rendered
 * @param {React.ReactNode} children - content that will be rendered with a fade in animation
 */

const Fade = ({ ms, children }: FadeProps) => {
  const { open, onOpen } = useToggle();
  //used to clean up timer
  const timerID = useRef<NodeJS.Timeout>(null!);
  useEffect(() => {
    timerID.current = setTimeout(onOpen, ms);
    //cleans up timer if component is unmounted
    return () => clearTimeout(timerID.current);
  }, [onOpen, ms]);
  return <Wrapper on={open}>{children}</Wrapper>;
};

export default Fade;
