import React, { useEffect, useMemo } from 'react';
import DeafultLayout from 'app/layouts/DefaultLayout';
import selectState from 'app/pages/HomePage/selectors';
import { Row, Col } from 'antd';
import i18next from 'i18next';
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export function Graphs() {
  const { transactions } = selectState();

  const graphData = useMemo(() => {
    return transactions.map(transaction => ({
      ...transaction,
      expense:
        transaction.amount.toString().includes('-') && transaction.amount,
      income:
        !transaction.amount.toString().includes('-') && transaction.amount,
    }));
  }, [transactions]);

  useEffect(() => {
    console.log('graphData', graphData);
  }, [graphData]);

  return (
    <DeafultLayout>
      <Row>
        <Col span={24}>
          <h1>{i18next.t('NAV_GRAPHS')}</h1>
        </Col>
        <Col span={24}>
          <ResponsiveContainer width="100%" height={500}>
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
        </Col>
      </Row>
    </DeafultLayout>
  );
}
