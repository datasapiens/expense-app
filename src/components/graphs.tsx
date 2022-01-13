import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
import storageService from "../service/storageService";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function Graphs(): any {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = JSON.parse(
    storageService.getItem("transactions") as string
  )?.map((transc: any) => `${transc?.label} - ${transc?.category.label}`);

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",

        data: JSON.parse(storageService.getItem("transactions") as string)?.map(
          (transc: any) => transc.amount
        ),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const pieData = {
    labels,
    datasets: [
      {
        label: "Dataset 1",

        data: JSON.parse(storageService.getItem("transactions") as string)?.map(
          (transc: any) => transc.amount
        ),
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
  return (
    <div className="row my-5">
      <div className="col-6">
        <Pie data={pieData} />
      </div>
      <div className="col-6">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
