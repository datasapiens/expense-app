import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Modal from "../modal/Modal";

import Table from "../Table/Table";
import "./tab.scss";

const HomeTab = () => {
  const [toggleState, setToggleState] = useState(1);
  const [openTransactionModal, setOpenTransactionModal] = useState(false);
  // const [openCategoryModal, setOpenCategoryModal] = useState(false);
  

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
         Transactions
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
         Categories
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="header-button"><h2>Transactions</h2>
          <button className="button-add" onClick={() => setOpenTransactionModal(true)}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
           </div>
          <Table />
          {openTransactionModal && <Modal updateModal={setOpenTransactionModal} />}
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="header-button">
            <h2>Categories</h2> 
            <button className="button-add"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
            </div>
          <Table />
          {/* <Modal /> */}
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
