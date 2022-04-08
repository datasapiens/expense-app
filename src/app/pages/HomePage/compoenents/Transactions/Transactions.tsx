import React, { useEffect } from 'react';
import { Table, Tag, Button, Row, Col, Input } from 'antd';
import styled from 'styled-components/macro';
import Modal from 'app/components/Modal';
import AddTransaction from '../AddTransaction';
import selectState from '../../selectors';
import { ITransaction } from '../../types';
import moment from 'moment';

const StyledRow = styled(Row)`
  margin-bottom: 10px;
`;

const { Search } = Input;

const Transactions = () => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const [currentTransactions, setCurrentTransactions] = React.useState<
    ITransaction[]
  >([]);
  const [search, setSearch] = React.useState<string>('');
  const { categories, transactions } = selectState();

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: id => <div>{id}</div>,
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
      render: date => <div>{moment(date).format('l')}</div>,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Category',
      key: 'category',
      dataIndex: 'category',
      render: category => <Tag>{category}</Tag>,
    },
  ];

  useEffect(() => {
    setCurrentTransactions(transactions);
  }, [transactions]);

  useEffect(() => {
    if (search.length > 3) {
      const filteredTransactions = transactions.filter(transaction => {
        return transaction.label.toLowerCase().includes(search.toLowerCase());
      });
      setCurrentTransactions(filteredTransactions);
    } else {
      setCurrentTransactions(transactions);
    }
    console.log(transactions);
  }, [search, transactions]);

  return (
    <React.Fragment>
      <StyledRow gutter={[16, 16]}>
        <Col span={4}>
          <h3>Transactions</h3>
        </Col>
        <Col span={8}>
          <Button type="primary" onClick={() => setVisible(!visible)}>
            Add Transaction
          </Button>
        </Col>
        <Col span={10}>
          <Search
            placeholder="Search"
            onChange={e => setSearch(e.target.value)}
          />
        </Col>
      </StyledRow>
      <Table columns={columns} dataSource={currentTransactions} />
      <Modal
        title="Add Transaction"
        visible={visible}
        onCancel={() => setVisible(false)}
      >
        <AddTransaction
          categories={categories}
          onCancel={() => setVisible(false)}
          transactions={transactions}
        />
      </Modal>
    </React.Fragment>
  );
};

export default Transactions;
