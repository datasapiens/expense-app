import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

import { useAppSelector } from "../../hooks";
import { Items } from "./itemsSlice";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function IncomeExpenseBar() {
  const items = useAppSelector(Items);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  const monthData = {
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
  };
  const monthLabels = Object.keys(monthData);

  var expensesByMonth = items.reduce((dataByMonth: any, item: any) => {
    var date = new Date(item.date);
    var value = Math.abs(parseInt(item.amount));
    var month = monthLabels[date.getMonth()];
    var group = month;
    if (item.amount.includes("-")) {
      dataByMonth[group] = (dataByMonth[group] || 0) + value;
    }
    return dataByMonth;
  }, {});

  var incomeByMonth = items.reduce((dataByMonth: any, item: any) => {
    var date = new Date(item.date);
    var value = Math.abs(parseInt(item.amount));
    var month = monthLabels[date.getMonth()];
    var group = month;
    if (!item.amount.includes("-")) {
      dataByMonth[group] = (dataByMonth[group] || 0) + value;
    }
    return dataByMonth;
  }, {});

  const combinedExpenses = { ...monthData, ...expensesByMonth };
  const combinedIncome = { ...monthData, ...incomeByMonth };
  const data = {
    labels: monthLabels,
    datasets: [
      {
        label: "Expenses",
        data: Object.values(combinedExpenses),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Income",
        data: Object.values(combinedIncome),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}

export function ItemCategoryPie() {
  const items = useAppSelector(Items);

  const itemsByCategory = items.reduce((acc: any, value: any) => {
    if (value.amount.includes("-")) {
      if (value.category) {
        if (!acc[value.category.label]) {
          acc[value.category.label] = [];
        }
        acc[value.category.label].push(value);
        
      } else {
        if (!acc['Uncategorised']) {
            acc['Uncategorised'] = [];
          }
          acc['Uncategorised'].push(value);
      }
    }
    return acc;
  }, {});

  const costByCategory = Object.keys(itemsByCategory).map((key, index) => {
    const category = itemsByCategory[key];
    const sum = category.reduce(
      (a: any, b: any) => a + Math.abs(parseInt(b.amount)),
      0
    );
    return sum;
  });
  const data = {
    labels: Object.keys(itemsByCategory),
    datasets: [
      {
        label: "Expense by Category",
        data: costByCategory,
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
  return <Pie data={data} />;
}
