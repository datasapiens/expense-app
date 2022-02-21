import React from 'react';
import { Row, Col, Empty } from 'antd';
import BalanceCol from './balanceCol';
import BalanceLine from './balanceLine';

import { getTransactions } from '../../../reducers-actions';

const Incoming = () => {
  const transactions = getTransactions();

  return (
    <>
      {transactions === undefined && (
        <div>
          <p style={{ margin: 30 }}>Please add data to view charts</p>
          <Empty style={{ margin: 60 }} />
        </div>
      )}
      {transactions && (
        <div>
          <Row>
            <h3 style={{ marginBottom: 30 }}>Transaction Charts</h3>
          </Row>
          <Row gutter={20}>
            <Col span={12}>
              <BalanceCol transactions={transactions} />
            </Col>
            <Col span={12}>
              <BalanceLine transactions={transactions} />
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default Incoming;
