import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  TransactionColumns,
} from "../../data/data";
import { useAppSelector } from "../../state/store/hooks";
import { selectTransactions } from "../../state/store/selectors/transaction.selector";
import CategoryForm from "../forms/Category/CategoryForm";
import TransactionForm from "../forms/Transactions/TransactionForm";
import Modal from "../modal/Modal";
import CategoryTable from "../Table/CategoryTable";

import Table from "../Table/Table";
import "./tab.scss";

const HomeTab = ({categories}: any) => {
  const [toggleState, setToggleState] = useState(1);
  const [openTransactionModal, setOpenTransactionModal] = useState(false);
  const [openCategoryModal, setOpenCategoryModal] = useState(false);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <div className="tab-wrapper">
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
          <div className="header-button">
            <h2>Transactions</h2>
            <button
              className="button-add"
              onClick={() => setOpenTransactionModal(true)}
            >
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </button>
          </div>
          <Table
            tableData={useAppSelector(selectTransactions)}
            columns={TransactionColumns}
            categories={categories}
          />
          {openTransactionModal && (
            <Modal
              modal={"Add Transaction"}
              updateModal={setOpenTransactionModal}
            >
          
              <TransactionForm categories={categories} closeModal={setOpenTransactionModal}
             />
            </Modal>
          )}
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="header-button">
            <h2>Categories</h2>
            <button
              className="button-add"
              onClick={() => setOpenCategoryModal(true)}
            >
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </button>
          </div>
          <CategoryTable categories={categories}  />
          {openCategoryModal && (
            <Modal modal={"Add Category"} updateModal={setOpenCategoryModal} >
              <CategoryForm closeModal={setOpenCategoryModal} />
            </Modal>
          )}
        </div>
      </div>
    </div>
    
  );
};

export default HomeTab;
