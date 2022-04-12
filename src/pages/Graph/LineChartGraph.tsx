import React, { FC } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { IBudgetGraphData } from './Graph';

interface LineChartGraphProps {
  data: IBudgetGraphData[];
  budgetLabel: string;
}

const LineChartGraph: FC<LineChartGraphProps> = ({ data, budgetLabel }) => {
  return (
    <div>
      <h4 className="graph-header">{budgetLabel}</h4>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#0cf"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="date" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartGraph;
