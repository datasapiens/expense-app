import React, { useMemo } from "react";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useAppSelector } from "store";

const GraphPage: React.FC = () => {
  const { transactions } = useAppSelector((state) => state.transactions);

  const graphData = useMemo(() => {
    return transactions.map((transaction) => ({
      ...transaction,
      expense:
        transaction.amount.toString().includes("-") && transaction.amount,
      income:
        !transaction.amount.toString().includes("-") && transaction.amount,
    }));
  }, [transactions]);
  return (
    <div className="container">
      <h1>Graphs</h1>
      <div
        style={{ width: "1100px", height: "600px", backgroundColor: "black" }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={graphData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="expense" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GraphPage;
