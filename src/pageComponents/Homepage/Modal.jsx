import React from "react";
import styles from "./Modal.module.scss";

export default function Modal({ children, onClose }) {
    return (
        <div className={styles.modal} onClick={() => onClose(false)} >
            <div className={styles.imageDiv}>
                {children}
            </div>
        </div>
    );
}