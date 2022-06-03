import React, { useState } from "react";
import Add from "../buttons/Add";

import Table from "../Table/Table";
import "./tab.scss";

const HomeTab = () => {
  const [toggleState, setToggleState] = useState(1);

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
          <div className="header-button"><h2>Transactions</h2> <Add/></div>
          <Table />
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="header-button">
            <h2>Categories</h2> 
            <Add/>
            </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
