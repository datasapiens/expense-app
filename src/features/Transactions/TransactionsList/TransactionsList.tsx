import React, { useEffect, useState } from 'react';
import { Table, Empty, Typography } from 'antd';

import Transaction from '../../../types/transaction';
import Category from '../../../types/category';
import getCategoryById from '../../../utils/getCategoryById';
const { Text } = Typography;

type TransactionsListProps = {
  transactions: Transaction[];
  categories: Category[];
};

type FormattedTransaction = {
  label: string;
  date: Date;
  amount: number;
  category: string;
  key: string;
};

const columns = [
  {
    title: 'Label',
    dataIndex: 'label',
    key: 'label',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (amount: number) => (
      <Text type={amount < 0 ? 'danger' : 'success'}> {amount} </Text>
    ),
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
];

const TransactionsList: React.FC<TransactionsListProps> = ({
  transactions,
  categories,
}) => {
  const [formattedTransactions, setFormattedTransactions] = useState<
    FormattedTransaction[]
  >([]);

  useEffect(() => {
    let formattedTx: FormattedTransaction[] = [];
    transactions.forEach((tx) => {
      formattedTx.push({
        key: tx.id,
        label: tx.label,
        date: tx.date,
        amount: tx.amount,
        category: getCategoryById(tx.categoryId, categories)?.label || '',
      });
    });

    setFormattedTransactions(formattedTx);
  }, [transactions, categories]);

  return (
    <div>
      {formattedTransactions.length === 0 && <Empty />}

      {formattedTransactions.length > 0 && (
        <Table dataSource={formattedTransactions} columns={columns} />
      )}
    </div>
  );
};

TransactionsList.displayName =
  'features/Transactions/TransactionsList/TransactionsList';

export default TransactionsList;
