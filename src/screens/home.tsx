import React, { useState } from 'react';
import { InputBar, TransactionList, Summary } from '../components/home';
import { Row, Col, Divider } from 'antd';

const HomePage = () => {
  const [update, setUpdate] = useState<boolean>(false);
  return (
    <>
      <Row gutter={20}>
        <Col span={16}>
          <InputBar setUpdate={setUpdate} update={update} />
          <Divider />
          <TransactionList update={update} />
        </Col>
        <Col span={8}>
          <Summary />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
