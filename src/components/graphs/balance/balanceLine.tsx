import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';

const BalanceLine = ({ transactions }: any) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const formattedData: any = transactions?.map((item: any) => ({
      ...item,
      amount: parseFloat(item.amount),
    }));
    var reduced = formattedData?.reduce((allDates: any, date: any) => {
      if (
        allDates.some((item: any) => {
          return item.date === date.date;
        })
      ) {
        allDates.filter((item: any) => {
          return item.date === date.date;
        })[0].amount += +date.amount;
      } else {
        allDates.push({
          date: date.date,
          amount: +date.amount,
        });
      }
      return allDates;
    }, []);
    setData(reduced);
  }, []);

  console.log(data);

  const config: any = {
    data: data || [],
    padding: 'auto',
    xField: 'date',
    yField: 'amount',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
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
        Balance Timeplot
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
        <Line {...config} style={{ margin: '40px 10px 20px 20px' }} />
      </div>
    </>
  );
};

export default BalanceLine;
