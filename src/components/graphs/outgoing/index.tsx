import React from 'react';
import { Row, Col, Empty } from 'antd';
import OutgoingPie from './outgoingPie';
import OutgoingCol from './outgoingCol';

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
              <OutgoingCol transactions={transactions} />
            </Col>
            <Col span={12}>
              <OutgoingPie transactions={transactions} />
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default Incoming;
