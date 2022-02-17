import { ResponsiveBar } from "@nivo/bar";
import { useLayoutEffect, useState } from "react";
import { Category, Transaction } from "../../models";
import styles from "./BarChart.module.scss";

export const BarChart = (props: {
  transactions: Transaction[];
  categories: Category[];
  type: string;
}) => {
  const initialArray: Array<any> = [];
  const [data, setData] = useState(initialArray);

  useLayoutEffect(() => {
    if (props.transactions.length) {
      let incomes: any = 0;
      let expenses: any = 0;
      props.transactions.forEach((transaction) => {
        if (isNaN(+transaction.amount)) {
          return;
        }
        if (+transaction.amount < 0) {
          expenses += +transaction.amount;
        } else {
          incomes += +transaction.amount;
        }
      });
      expenses = Math.abs(expenses);
      setData([
        { id: 1, quarter: "expenses", earnings: expenses },
        { id: 2, quarter: "income", earnings: incomes },
      ]);
    }
  }, [props]);

  const chartColors = ["rgb(118, 187, 118)", "rgb(56, 108, 176)"];

  return data.length ? (
    <div className={styles.chartContainer}>
      <ResponsiveBar
        data={data}
        layout="horizontal"
        keys={["earnings"]}
        indexBy="quarter"
        labelTextColor="#fff"
        colors={({ data }) => chartColors[data.id % chartColors.length]}
        margin={{ top: 12, right: 130, bottom: 50, left: 80 }}
        legends={[
          {
            dataFrom: "indexes",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  ) : (
    <div className={styles.noDataContainer}>
      <p className={styles.noDataTitle}>No data to visualize</p>
    </div>
  );
};

export default BarChart;
