import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Card from "../card/Card";
import { IChartInfo, IPieChartData } from "../../helpers/graph.helpers";
import styles from "./PieChart.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

interface IProps {
  chartData?: IChartInfo;
  title: string;
}

const BarChart: React.FC<IProps> = ({ chartData, title }) => {
  const data: IPieChartData = {
    labels: chartData?.labels,
    datasets: [
      {
        label: title,
        data: chartData?.data!,
        backgroundColor: chartData?.colors,
        borderColor: chartData?.colors,
        borderWidth: 1,
      },
    ],
  };
  return (
    <Card>
      <h1 className={styles.chartHeader}>{title}</h1>
      <Pie data={data} />
    </Card>
  );
};

export default BarChart;
