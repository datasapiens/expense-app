import React from 'react'

function Modal() {
  return (
    <div className="modal-background">
        <div className="modal-container">
            <button>X</button>
            <div className="title">Add Transaction</div>
            <div className="body">
                <p>This is where the forms will go</p>
            </div>
            <div className="footer">
            <button className="cancel">cancel</button>
            <button className="submit">save</button>
            </div>
        </div>
    </div>
  )
}

export default Modal