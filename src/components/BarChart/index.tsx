/* eslint-disable eqeqeq */
import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { shallowEqual, useSelector } from "react-redux";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Number of transactions per category",
    },
  },
};

const Index: React.FC = () => {
  const categories: readonly Category[] = useSelector((state: DataState) => state.categories, shallowEqual);
  const transactions: readonly Transaction[] = useSelector((state: DataState) => state.transactions, shallowEqual);

  const labels = categories.map((category) => category.label);

  const dataInfo = categories.map((cat) => transactions.filter((transaction) => transaction.category == cat.id).length);

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset",
        data: dataInfo,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default Index;
