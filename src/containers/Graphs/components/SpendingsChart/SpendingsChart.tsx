import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useAppSelector } from "app/hooks";
import { selectTransactions } from "features/transactions/transactionsSlice";
import { selectCategories } from "features/categories/categoriesSlice";
import autocolors from "chartjs-plugin-autocolors";

ChartJS.register(ArcElement, Tooltip, Legend, autocolors);

const options = {
  responsive: true,
  plugins: {
    autocolors: {
      mode: "data",
    },
    legend: {
      position: "top" as const,
    },
  },
};

export const SpendingsChart = () => {
  const { transactions } = useAppSelector(selectTransactions);
  const { categories } = useAppSelector(selectCategories);

  const labels = categories.map(({ label }) => label);
  const datasets = [
    {
      label: "Category",
      data: categories.map(({ id }) =>
        transactions
          .filter(({ category, amount }) => category === id && amount < 0)
          .reduce((acc, category) => acc + category.amount, 0),
      ),
      borderColor: new Array(categories.length).fill("black"),
      borderWidth: 1,
    },
  ];

  const data = {
    labels,
    datasets,
  };

  return <Pie options={options} data={data} />;
};
