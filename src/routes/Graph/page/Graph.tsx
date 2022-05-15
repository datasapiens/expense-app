import React, { useState, useEffect } from 'react';
import { PageHeader, Statistic, Card, Row, Col, Divider } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

import Category from '../../../types/category';
import Transaction from '../../../types/transaction';
import calculateTransactionsByType from '../../../utils/calculateTransactionsByType';
import sortTransactionsByCategory from '../../../utils/sortTransactionsByCategory';

import './Graph.scss';
import COLORS from '../../../constants/color';
import generateRandomColor from '../../../utils/generateRandomColor';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  title: 'Company Performance',
  curveType: 'function',
  legend: { position: 'top' },
};

type GraphProps = {
  categories: Category[];
  transactions: Transaction[];
};

const Graph: React.FC<GraphProps> = ({ categories, transactions }) => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [chartData, setChartData] =
    useState<ChartData<'pie', number[], unknown>>();

  useEffect(() => {
    const { income, expenses } = calculateTransactionsByType(transactions);
    setIncome(income);
    setExpenses(expenses);
    getChartData(transactions, categories);
  }, [transactions, categories]);

  const getChartData = (
    transactions: Transaction[],
    categories: Category[]
  ) => {
    const sortedTransactions = sortTransactionsByCategory(
      transactions,
      categories
    );

    let data: any = {};

    data.labels = sortedTransactions.map((item) => item.category);

    data.datasets = [
      {
        label: 'Transactions',
        data: sortedTransactions.map((item) => item.amount),
        borderWidth: 1,
        backgroundColor: [
          ...new Array(sortedTransactions.length)
            .fill(0)
            .map(() => generateRandomColor()),
        ],
      },
    ];

    setChartData(data);
  };

  return (
    <div className="container">
      <PageHeader className="site-page-header" title="Transactions Graph" />

      <Divider />

      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Income"
              value={income}
              precision={2}
              valueStyle={{ color: COLORS.SUCCESS }}
              prefix={<ArrowUpOutlined />}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Expenses"
              value={expenses}
              precision={2}
              valueStyle={{ color: COLORS.DANGER }}
              prefix={<ArrowDownOutlined />}
            />
          </Card>
        </Col>
      </Row>

      {chartData && (
        <Row justify="center" className="chart-container">
          <Pie data={chartData} />
        </Row>
      )}
    </div>
  );
};

Graph.displayName = 'routes/Graph/Page/Graph';

export default Graph;
