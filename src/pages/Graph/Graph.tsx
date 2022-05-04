import React from 'react';
import LineChartGraph from './LineChartGraph';
import useTypedSelector from '../../hooks/useTypedSelector';
import { ITransaction } from '../../types/transaction';
import './index.scss';

export interface IBudgetGraphData {
  label: string;
  date: string;
  amount: number;
}

// helper function
const generateData = (budgetId: string, transactions: ITransaction[]) => {
  const data: IBudgetGraphData[] = [];

  const currentBudgetTransactions = transactions.filter(
    (trc) => trc.category === budgetId
  );

  currentBudgetTransactions.forEach((tsc) => {
    const { label, date, amount } = tsc;
    data.push({ label, date, amount });
  });
  return data;
};

// Container behavior (can make seperate component, but I didnt do it cuz lack of time)
const Graph = () => {
  const { budgets } = useTypedSelector((store) => store.budgets);
  const { transactions } = useTypedSelector((store) => store.transactions);

  return (
    <div className="graph-container">
      {budgets.map((budget) => (
        <LineChartGraph
          key={budget.id}
          budgetLabel={budget.label}
          data={generateData(budget.id, transactions)}
        />
      ))}
    </div>
  );
};

export default Graph;
