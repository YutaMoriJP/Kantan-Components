import * as React from "react";
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
declare const Modal: ({ handleClose, children, color, ...rest }: ModalProps) => JSX.Element;
export default Modal;
