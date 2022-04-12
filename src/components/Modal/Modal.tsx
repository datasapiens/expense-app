import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

interface ModalProps {
  isOpen: boolean;
  header?: string;
  close: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, header, close, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return isOpen
    ? ReactDOM.createPortal(
        <div className="modal" onClick={close}>
          <div className="modal__window" onClick={handleClick}>
            <div className="modal__header">
              <h4>{header}</h4>
              <div className="modal__close" onClick={close}>
                &#x2715;
              </div>
            </div>
            {children}
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
