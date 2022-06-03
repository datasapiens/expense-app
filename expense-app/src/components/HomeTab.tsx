import React from "react";
import "./tab.scss";
const HomeTab = () => {
  return (
    <div className="tab">
      <button className="tablink" id="defaultOpen">
        Transactions
      </button>
      <button className="tablink">Categories</button>
    </div>
  );
};

export default HomeTab;
