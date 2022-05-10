import { ResponsivePie } from "@nivo/pie";
import { useLayoutEffect, useState } from "react";
import { Category, Transaction } from "../../models";
import styles from "./PieChart.module.scss";

export const PieChart = (props: {
  transactions: Transaction[];
  categories: Category[];
  type: string;
}) => {
  const initialArray: Array<any> = [];
  const [data, setData] = useState(initialArray);

  useLayoutEffect(() => {
    if (props.transactions.length) {
      const map: any = {};
      const computedData: any = [];
      props.transactions.forEach((transaction) => {
        if (
          isNaN(+transaction.amount) ||
          (props.type === "incomes" && +transaction.amount < 0) ||
          (props.type === "expenses" && +transaction.amount > 0)
        ) {
          return;
        }
        if (map[transaction.category]) {
          map[transaction.category].value =
            +map[transaction.category].value + +transaction.amount;
        } else {
          const label = props.categories.find(
            (category) => category.id === transaction.category
          )?.label;
          map[transaction.category] = {
            id: label,
            label: label,
            value: transaction.amount,
          };
        }
      });
      Object.keys(map).forEach((key) => {
        map[key].value = Math.abs(map[key].value);
        computedData.push(map[key]);
      });
      setData(computedData);
    }
  }, [props]);

  return data.length ? (
    <div className={styles.chartContainer}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        colors={{ scheme: "accent" }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
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

export default PieChart;
