import React, { FC } from "react";
import Header from "../../components/header/Header";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Transaction } from "../../store/types";
import { getTransactions } from "../../store/selectors";

interface GraphArr {
  amount: Array<number>;
  date: Array<string>;
  total: number;
  label: string;
  id: string;
  color: string;
}

const GraphPage: FC = () => {
  const transactions = useSelector(getTransactions);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
      },
    },
  };

  const transformToGraphArr = () => {
    let graphArray: Array<GraphArr> = [];
    transactions.forEach((item: Transaction) => {
      const index = graphArray.findIndex(
        (el: GraphArr) => el.id === item.category.id
      );
      if (index !== -1) {
        graphArray[index] = {
          ...graphArray[index],
          amount: [...graphArray[index].amount, item.amount],
          date: [...graphArray[index].date, `${item.label}: ${item.date}`],
          total: graphArray[index].total + item.amount,
        };
      } else {
        graphArray.push({
          ...item.category,
          amount: [item.amount],
          date: [`${item.label}: ${item.date}`],
          total: item.amount,
        });
      }
    });
    return graphArray;
  };

  return (
    <>
      <Header />
      {!!transactions.length ? (
        transformToGraphArr().map((elem: GraphArr) => (
          <div className="col-md-6 center m-3" key={elem.id}>
            <Bar
              options={options}
              data={{
                labels: elem.date,
                datasets: [
                  {
                    label: `${elem.label} Total: ${elem.total}`,
                    data: elem.amount,
                    backgroundColor: elem.color,
                  },
                ],
              }}
            />
          </div>
        ))
      ) : (
        <h5 className="heading-5 m-3">No transactions yet</h5>
      )}
    </>
  );
};

export default GraphPage;
