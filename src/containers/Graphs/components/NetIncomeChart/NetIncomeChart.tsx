import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import autocolors from "chartjs-plugin-autocolors";
import { useAppSelector } from "app/hooks";
import { selectTransactions } from "features/transactions/transactionsSlice";
import { getQuarter, getYear } from "./utils";

export interface NetIncomeChartProps {
  year?: number;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  autocolors,
);

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

const QUARTERS = ["Q1", "Q2", "Q3", "Q4"];

export const NetIncomeChart = ({ year }: NetIncomeChartProps) => {
  const { items: transactions } = useAppSelector(selectTransactions);

  const datasets = [
    {
      label: "Net Income (€)",
      data: QUARTERS.map((quarter) =>
        transactions
          .filter(({ date }) => getYear(date) === year && getQuarter(date) === quarter)
          .reduce((acc, { amount }) => acc + amount, 0),
      ),
      borderColor: new Array(QUARTERS.length).fill("black"),
      borderWidth: 1,
    },
  ];

  const data = {
    labels: QUARTERS,
    datasets,
  };

  return <Line options={options} data={data} />;
};
