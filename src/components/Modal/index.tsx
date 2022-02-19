import React, {ReactNode} from 'react';

import './style.scss';
import Button from '../Button';

interface Props {
    children: ReactNode
    title?: string
    onConfirm?: () => void,
    onCancel: () => void,
    confirmDisabled?: boolean,
}

const Modal = ({
                   children,
                   title,
                   onConfirm,
                   onCancel,
                   confirmDisabled
               }: Props) => {
    const handleClose = (e: any) => {
        if (e.target.classList.contains('modal-back')) {
            onCancel();
        }
    };

    return (
        <div className="modal-back" onClick={handleClose}>
            <div className="modal-content">
                <p className="modal-title">{title}</p>
                {children}
                <div className="action-wrapper">
                    <Button disabled={confirmDisabled} onClick={onConfirm}>Ok</Button>
                    <Button color="normal" onClick={onCancel}>Cancel</Button>
                </div>
            </div>
        </div>
    )
};

export default Modal;
