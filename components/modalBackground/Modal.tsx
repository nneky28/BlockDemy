"use client"
///Modal component

///Libraries -->
import styles from "./modal.module.scss"
import { useModalStore } from "@/config/store";
import { MouseEvent } from "react";

///Commencing the code 

/**
 * @title Modal Component
 * @returns The Modal component
 */
const Modal = ({ children }: { children: React.ReactNode }) => {
    const setModal = useModalStore(state => state.setModal);
    const modal = useModalStore(state => state.modal);

    ///This function is triggered when the background of the modal is clicked
    const closeModal = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        e.preventDefault()

        setModal(false)
    }

  return (
    <div className={styles.main} style={{ display: modal ? "flex" : "none"}} onClick={(e) => closeModal(e)}>
        {children}
    </div>
  );
};

export default Modal;