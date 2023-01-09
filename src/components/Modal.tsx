import { useState } from "react";
import { GrAdd } from "react-icons/gr";
import Modal from "react-modal";
import "./Modal.css";

export const ModalComponent: React.FC = () => {
  const [modelIsOpen, setModelIsOpen] = useState(false);

  return (
    <div className="modal">
      <h2>Transactions</h2>
      <button onClick={() => setModelIsOpen(true)}>
        <GrAdd className="icon" />
      </button>
      <Modal isOpen={modelIsOpen} onRequestClose={() => setModelIsOpen(false)}>
        <div>
          <input type="text" placeholder="label" />
          <input type="text" placeholder="amount" />
          <input type="text" placeholder="category" />
        </div>
        <button onClick={() => setModelIsOpen(false)}>Cancel</button>
      </Modal>
    </div>
  );
};
