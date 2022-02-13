import React, { useState } from "react";
import styles from "./Graph.module.scss";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useSelector } from "react-redux";
import randomColor from "../../helpers/randomColor";

const Graph = () => {
  const { expenses, total } = useSelector((state) => state.expenses);

  const combinedExpenses = expenses
    .map((item, i, array) => {
      const defaultValue = {
        id: item.id,
        label: item.label,
        category: item.category,
        date: item.date,
        amount: 0,
      };
      const finalValue = array
        .filter((other) => other.category === item.category)
        .reduce((accum, currentVal) => {
          accum.amount += +currentVal.amount;
          return accum;
        }, defaultValue);

      return finalValue;
    })
    .filter((item, thisIndex, array) => {
      const index = array.findIndex(
        (otherItem, otherIndex) =>
          otherItem.category === item.category &&
          otherIndex !== thisIndex &&
          otherIndex > thisIndex
      );

      return index === -1;
    });

  const sortedExpenses = combinedExpenses.sort(
    (a, b) => parseFloat(a.amount) - parseFloat(b.amount)
  );

  const [data, setData] = useState({
    labels: sortedExpenses.map((expense) => expense.category),
    datasets: [
      {
        label: "User Spent",
        data: sortedExpenses.map((expense) => expense.amount),
        backgroundColor: sortedExpenses.map((expense) => randomColor()),
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  var options = {
    plugins: {
      tooltip: {
        callbacks: {
          footer: function (items) {
            return "Total: " + total;
          },
        },
      },
    },
  };

  return (
    <div className={styles.container}>
      <h1>Graphs</h1>
      {expenses.length > 0 ? (
        <>
          <div className={styles.bar}>
            <h2>Bar chart</h2>
            <Bar data={data} options={options} />
          </div>
          <div className={styles.pie}>
            <h2>Pie chart</h2>
            <Pie data={data} options={options} />
          </div>
          <div className={styles.doughnut}>
            <h2>Doughnut chart</h2>
            <Doughnut data={data} options={options} />
          </div>
        </>
      ) : (
        <p>
          You don't have any graphs, Because, you don't have any transactions
          yet.
        </p>
      )}
    </div>
  );
};

export default Graph;
