import React, { useEffect, useRef } from "react";
import styles from "./Modal.module.scss";

const Modal = ({ modalStyle, children, show, onClose, backdropStyle }) => {
  const bRef = useRef(null);
  const modalRef = useRef(null);
  useEffect(() => {
    if (show) {
      modalRef.current.classList.add(styles.visible);
    } else {
      modalRef.current.classList.remove(styles.visible);
    }
  }, [show]);

  const handleOutsideClick = (e) => {
    if (!bRef.current.contains(e.target)) onClose();
  };
  return (
    <React.Fragment>
      <div
        ref={modalRef}
        style={backdropStyle}
        className={styles.modal__wrap}
        onClick={handleOutsideClick}
      >
        <div style={modalStyle} ref={bRef} className={styles.modal}>
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
