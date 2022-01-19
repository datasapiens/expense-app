import React from "react";
import BarChart from "../../components/chart/PieChart";
import Container from "../../components/container/Container";
import styles from "./Graph.module.scss";
import { getCategories } from "../../store/reducers/categories/category.reducer";
import { getTransactions } from "../../store/reducers/transactions/transaction.reducer";
import { useSelector } from "react-redux";
import { ICategory, ITransaction } from "../../interfaces";
import {
  getCategoryChartData,
  getExpenseTypeChartData,
  getTransactionChartData,
  IChartInfo,
} from "../../helpers/graph.helpers";

const Graph: React.FC = () => {
  const categories: Array<ICategory> = useSelector(getCategories);
  const transactions: Array<ITransaction> = useSelector(getTransactions);

  const categoryChartData: IChartInfo = getCategoryChartData(categories, transactions);
  const transactionChartData: IChartInfo = getTransactionChartData(transactions);
  const expenseTypeChartData: IChartInfo = getExpenseTypeChartData(transactions);

  return (
    <Container>
      <h1 className={styles.graphsHeader}>Graphs</h1>
      <div className={styles.graphList}>
        <div className={styles.graphItem}>
          <BarChart title="Transaction Categories" chartData={categoryChartData} />
        </div>

        <div className={styles.graphItem}>
          <BarChart title="Transactions" chartData={transactionChartData} />
        </div>

        <div className={styles.graphItem}>
          <BarChart title="Expense  Transaction Types" chartData={expenseTypeChartData} />
        </div>
      </div>
    </Container>
  );
};

export default Graph;
