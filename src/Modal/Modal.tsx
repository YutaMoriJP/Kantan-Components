import * as React from "react";
import Backdrop from "./Backdrop";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion"; //used for modal animation

const ModalMotion = styled(motion.div)`
  background: ${(props: { color?: string }) => props.color};
`;

//for animation
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

/**
 *
 * @param {Function} handleClose - closes the modal
 * @param {React.ReactNode | String} - UI rendered by the modal
 * @param {string} color - backgorund color of the Modal
 * @returns
 */

interface ModalProps {
  handleClose: () => void;
  children: React.ReactNode | string;
  color?: string;
}

const Modal = ({ handleClose, children, color }: ModalProps): JSX.Element => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); //event will NOT bubble up to parent element
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <Backdrop onClick={handleClose}>
        <ModalMotion
          onClick={handleClick}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          color={color}
        >
          {children}
        </ModalMotion>
      </Backdrop>
    </AnimatePresence>
  );
};

export default Modal;
