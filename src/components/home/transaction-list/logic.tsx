import React from 'react';
import { ColumnsType } from 'antd/es/table';

const useLogics = () => {
  interface User {
    label: string;
    category: string;
    amount: number;
  }

  const columns: ColumnsType<User> = [
    {
      title: 'Label',
      dataIndex: 'label',
      key: 'label',
      width: '250px',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      width: '250px',
      render: (data) =>
        parseFloat(data).toLocaleString('en', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      width: '250px',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      width: '200px',
    },
  ];

  return columns;
};

export default useLogics;
