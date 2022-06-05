import React from "react";
import "./modal.scss";

function Modal({ modal, updateModal, children }: any) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              updateModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">{modal}</div>
        <div className="body">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
