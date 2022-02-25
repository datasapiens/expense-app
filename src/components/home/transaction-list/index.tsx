import React, { useEffect } from 'react';
import { Table } from 'antd';
import useLogic from './logic';
import { getTransactions } from '../../../reducers-actions';

const TransactionList = ({ update }: any) => {
  const logic: any = useLogic();
  const transactions: any = getTransactions();

  useEffect(() => {
    getTransactions();
  }, [update]);

  return (
    <>
      <h3 style={{ textAlign: 'left' }}>Transactions</h3>

      <Table
        columns={logic}
        dataSource={transactions}
        rowKey='id'
        pagination={{ pageSize: 5 }}
      />
    </>
  );
};

export default TransactionList;
