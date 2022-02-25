import React, { useState, useEffect } from 'react';

import { Pie } from '@ant-design/plots';
import { Empty } from 'antd';

const IncomingPie = ({ transactions }: any) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = transactions?.filter(
      (item: any) => parseFloat(item.amount) > 0
    );
    const formattedData = data?.map((item: any) => ({
      ...item,
      amount: parseFloat(item.amount),
    }));
    setData(formattedData);
  }, []);

  const config: any = {
    appendPadding: 10,
    data: data || [],
    angleField: 'amount',
    colorField: 'category',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }: any) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
    theme: {
      colors10: [
        '#FFCA3E',
        '#FF6F50',
        '#D03454',
        '#9C2162',
        '#772F67',
        '#619ED6',
        '#6BA547',
        '#F7D027',
        '#E48F1B',
        '#B77EA3',
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
        Percentage of Categories
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
        {data.length === 0 && (
          <div style={{ height: 400 }}>
            <p style={{ margin: 30 }}>No incoming funds available</p>
            <Empty style={{ margin: 60 }} />
          </div>
        )}
        {data.length > 0 && (
          <Pie {...config} style={{ margin: '20px 10px 20px 20px' }} />
        )}
      </div>
    </>
  );
};

export default IncomingPie;
