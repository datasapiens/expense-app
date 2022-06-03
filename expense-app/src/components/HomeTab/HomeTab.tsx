import React from "react";
import Table from "../Table/Table";
import "./tab.scss";
const HomeTab = () => {
  return (
    <div className="tab">
      {/* Tab Header */}
      <button
        className="tablink"
        id="defaultOpen"
        onClick={(e) => console.log(e.target)}
      >
        Transactions
      </button>
      <button className="tablink" onClick={(e) => console.log(e.target)}>
        Categories
      </button>
      
      {/* Tab content */}
      <div id="Transactions" className="tabcontent">
        <h3>Transactions</h3>
        <Table />
      </div>

      <div id="Categories" className="tabcontent">
        <h3>Categories</h3>
        <Table />
      </div>
    </div>
  );
};

export default HomeTab;
