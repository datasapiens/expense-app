import React from 'react'
import { IModal } from '../../interfaces/modal.interface'
import './modal.scss'

function Modal({modal, updateModal}: IModal) {
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
            <div className="body">
                <p>This is where the forms will go</p>
            </div>
            <div className="footer">
            <button className="cancel" onClick={() => updateModal(false)}>cancel</button>
            <button className="submit">save</button>
            </div>
        </div>
    </div>
  )
}

export default Modal