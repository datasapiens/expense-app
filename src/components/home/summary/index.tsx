import React from 'react';
import { Statistic, Row, Col, Card } from 'antd';
import { getTransactions } from '../../../reducers-actions';

import './summary.scss';

const Summary = () => {
  const transactions = getTransactions();
  const total: number = transactions?.reduce(
    (sum: number, item: { amount: number }) => +sum + +item.amount,
    0
  );
  const negatives = (tot: number, item: any) =>
    item.amount < 0 ? +tot + +item.amount : tot;
  const positives = (tot: number, item: any) =>
    item.amount > 0 ? +tot + +item.amount : tot;
  const incoming: number = transactions?.reduce(positives, 0);
  const outgoing: number = transactions?.reduce(negatives, 0);
  return (
    <>
      <div
        style={{
          background: '#fafafa ',
          padding: '10px 10px',
          borderRadius: 5,
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}
      >
        <h3 style={{ textAlign: 'left' }}>Summary</h3>

        <Row gutter={10}>
          <Col span={12}>
            <Statistic
              title='Total Balance'
              prefix='€'
              value={total}
              precision={2}
              valueStyle={{ fontSize: '1.2em' }}
            />
          </Col>
          <Col span={12}>
            <Statistic
              title='Number of Transactions'
              value={transactions?.length}
              valueStyle={{ fontSize: '1.2em' }}
            />
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={12}>
            <Card style={{ border: 0, background: '#fafafa' }}>
              <Statistic
                title='Incoming'
                value={incoming}
                prefix='€'
                precision={2}
                valueStyle={{ color: '#3f8600', fontSize: '1.2em' }}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card style={{ border: 0, background: '#fafafa' }}>
              <Statistic
                title='Outgoing'
                value={outgoing}
                prefix='€'
                precision={2}
                valueStyle={{ color: '#cf1322', fontSize: '1.2em' }}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Summary;
