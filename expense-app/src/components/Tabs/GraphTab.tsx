import React, {  useState } from "react";
import {  PieChartData } from "../../helpers/computeForPieChart";
import { Category } from "../../interfaces/category.interface";
import { Transaction } from "../../interfaces/transaction.interface";
import DougnutChart from "../charts/Dougnut";
import PieChart from "../charts/PieChart";

import "./tab.scss";
type GraphInput = {
  transactions: Transaction[];
  categories: Category[];
};

export const GraphTab: React.FC<GraphInput> = ({
  transactions,
  categories,
}) => {
  const [toggleState, setToggleState] = useState(1);
  const date: any = [];
  transactions.filter((tx) => date.push(tx.date));



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
          Income vs. Expenses
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Income per category
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Expenses per category
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="header-button">
            <h2>Income vs. Expenses</h2>
          </div>
          <div className="chart-container">
            <PieChart data={PieChartData(transactions)} />
          </div>
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="header-button">
            <h2>Income per category</h2>{" "}
          </div>
          <div className="dougnut-container">
            <DougnutChart />
          </div>
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="header-button">
            <h2>Expenses per category</h2>
          </div>
          <div className="dougnut-container">
            <DougnutChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphTab;
