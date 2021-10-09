import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const BackDropMotion = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  margin: 0;
  top: 0;
  left: 0;
  background: #000000e1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${(props: { zIndex?: string }) => props.zIndex || 10000};
`;

interface BackdropProps {
  children: React.ReactNode;
  onClick: () => void;
  zIndex?: string;
}

const Backdrop = ({
  children,
  onClick,
  zIndex,
}: BackdropProps): JSX.Element => {
  return (
    <BackDropMotion
      onClick={onClick}
      initial={{ opacity: 0 }} //initial state has opacity:0
      animate={{ opacity: 1 }} //animation state has opacity:1
      exit={{ opacity: 0 }} //exit state has opacity: 0
      zIndex={zIndex}
    >
      {children}
    </BackDropMotion>
  );
};
export default Backdrop;
