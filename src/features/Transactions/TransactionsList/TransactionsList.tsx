import React, { useCallback, useEffect, useState } from 'react';
import { Table, Empty, Tag } from 'antd';

import Transaction from '../../../types/transaction';
import Category from '../../../types/category';

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
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    render: (category: any) => <Tag color="blue"> {category} </Tag>,
  },
];

const TransactionsList: React.FC<TransactionsListProps> = ({
  transactions,
  categories,
}) => {
  const [formattedTransactions, setFormattedTransactions] = useState<
    FormattedTransaction[]
  >([]);

  const getCategoryById = useCallback(
    (id: string) => {
      return categories.find((category) => category.id === id);
    },
    [categories]
  );

  useEffect(() => {
    let formattedTx: FormattedTransaction[] = [];
    transactions.forEach((tx) => {
      formattedTx.push({
        key: tx.id,
        label: tx.label,
        date: tx.date,
        amount: tx.amount,
        category: getCategoryById(tx.categoryId)?.label || '',
      });
    });

    setFormattedTransactions(formattedTx);
  }, [transactions, categories, getCategoryById]);

  console.log(transactions, '---', formattedTransactions);
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
