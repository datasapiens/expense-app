import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';
import { getTransactions } from '../../../reducers-actions';

const BalanceCol = ({ transactions }: any) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const formattedData: any = transactions?.map((item: any) => ({
      ...item,
      amount: parseFloat(item.amount),
    }));
    setData(formattedData);
  }, []);

  const config: any = {
    data: data || [],
    isStack: true,
    xField: 'date',
    yField: 'amount',
    seriesField: 'category',
    label: {
      position: 'middle', // 'top', 'bottom', 'middle'
    },
    interactions: [
      {
        type: 'active-region',
        enable: false,
      },
    ],
    columnBackground: {
      style: {
        fill: 'rgba(0,0,0,0.1)',
      },
    },
    theme: {
      colors10: [
        '#619ED6',
        '#6BA547',
        '#F7D027',
        '#E48F1B',
        '#B77EA3',
        '#E64345',
        '#60CEED',
        '#9CF168',
        '#F7EA4A',
        '#FBC543',
      ],
    },
  };

  return (
    <>
      <h4
        style={{
          fontStyle: 'italic',
          textAlign: 'left',
          color: 'gray',
          marginBottom: 10,
        }}
      >
        Category Type by Amount vs Date
      </h4>
      <div
        style={{
          background: '#fafafa ',
          padding: '10px 10px',
          borderRadius: 5,
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}
      >
        <Column {...config} style={{ margin: '40px 10px 20px 20px' }} />
      </div>
    </>
  );
};

export default BalanceCol;
