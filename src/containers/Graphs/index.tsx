import React from "react";
import { useSelector } from "react-redux";
import { PieChart } from "../../components/PieChart";
import "./styles.scss";

const Graphs = () => {
  const transactions = useSelector(
    (state: any) => state.transactions.transactions
  );
  const allCategories = useSelector(
    (state: any) => state.categories.categories
  );

  return (
    <>
      <p>Graphs</p>
      <div className="graphsContainer">
        <div className="graphContainer">
          <p>Incomes</p>
          <PieChart
            transactions={transactions}
            categories={allCategories}
            type="incomes"
          />
        </div>
        <div className="graphContainer">
          <p>Expenses</p>
          <PieChart
            transactions={transactions}
            categories={allCategories}
            type="expenses"
          />
        </div>
      </div>
    </>
  );
};

export default Graphs;
