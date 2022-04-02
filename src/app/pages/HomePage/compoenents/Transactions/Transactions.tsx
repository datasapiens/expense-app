import React from 'react';
import { Table, Tag, Button, Row, Col } from 'antd';
import styled from 'styled-components/macro';

const StyledRow = styled(Row)`
  margin-bottom: 10px;
`;

const Transactions = () => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <div>{text}</div>,
    },
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
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  const data = [];
  return (
    <React.Fragment>
      <StyledRow gutter={[16, 16]}>
        <Col span={4}>
          <h3>Transactions</h3>
        </Col>
        <Col span={20}>
          <Button type="primary">Add Transaction</Button>
        </Col>
      </StyledRow>
      <Table columns={columns} dataSource={data} />
    </React.Fragment>
  );
};

export default Transactions;
