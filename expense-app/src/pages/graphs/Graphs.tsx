import React from "react";
import GraphTab from "../../components/Tabs/GraphTab";
import { useAppSelector } from "../../state/store/hooks";
import { selectCategories } from "../../state/store/selectors/categories.selector";
import { selectTransactions } from "../../state/store/selectors/transaction.selector";

const Graphs = () => {
  return (
    <div className="page-wrapper">
      <div className="wrapper">
        <GraphTab
          transactions={useAppSelector(selectTransactions)}
          categories={useAppSelector(selectCategories)}
        />
      </div>
    </div>
  );
};

export default Graphs;
