/* eslint-disable eqeqeq */
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { shallowEqual, useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Total spends per category",
    },
  },
};

const Index: React.FC = () => {
  const categories: readonly Category[] = useSelector((state: DataState) => state.categories, shallowEqual);
  const transactions: readonly Transaction[] = useSelector((state: DataState) => state.transactions, shallowEqual);

  const labels = categories.map((category) => category.label);

  const dataInfo = categories.map((cat) => {
    let categoryTransaction = transactions.filter((transaction) => transaction.category == cat.id);
    let total = categoryTransaction.reduce((n, { amount }) => n + amount, 0);
    return total;
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Total Spends",
        data: dataInfo,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie options={options} data={data} />;
};

export default Index;
