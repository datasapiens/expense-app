import React, { useEffect } from 'react';
import { Table, Tag, Button, Row, Col, Input } from 'antd';
import styled from 'styled-components/macro';
import Modal from 'app/components/Modal';
import AddTransaction from '../AddTransaction';
import AddCategory from '../AddCategory';
import selectState from '../../selectors';
import { ITransaction, EAddTypes } from '../../types';
import { useDispatch } from 'react-redux';
import { actions } from 'app/pages/HomePage/slice';
import styles from './transactions.module.scss';
import cx from 'classnames';
import i18next from 'i18next';

const StyledRow = styled(Row)`
  margin-bottom: 10px;
`;

const StyledTable = styled(Table)`
  @media (max-width: 768px) {
    width: 100%;
    overflow-x: scroll;
  }
`;

const { Search } = Input;

const Transactions = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState<boolean>(false);
  const [currentTransactions, setCurrentTransactions] = React.useState<
    ITransaction[]
  >([]);
  const [search, setSearch] = React.useState<string>('');
  const {
    categories,
    transactions,
    isAddCategoryModalOpen,
    isAddTransactionModalOpen,
  } = selectState();

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: id => <div>{id}</div>,
    },
    {
      title: i18next.t('LABEL'),
      dataIndex: 'label',
      key: 'label',
    },
    {
      title: i18next.t('DATE'),
      dataIndex: 'date',
      key: 'date',
      render: date => <div>{date}</div>,
    },
    {
      title: i18next.t('AMOUNT'),
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: i18next.t('CATEGORY'),
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

  const handleAdd = (type: string) => {
    dispatch(actions.resetModalContent());
    if (type === EAddTypes.ADD_TRANSACTION_MODAL) {
      dispatch(actions.addTransactionModal());
      setVisible(true);
    } else {
      dispatch(actions.addCategoryModal());
      setVisible(true);
    }
  };

  return (
    <React.Fragment>
      <StyledRow gutter={[16, 16]}>
        <Col xs={24} sm={24} md={4}>
          <h3>{i18next.t('TRANSACTIONS')}</h3>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <div className={cx(styles['button-list'])}>
            <Button
              type="primary"
              onClick={() => handleAdd(EAddTypes.ADD_TRANSACTION_MODAL)}
            >
              {i18next.t('ADD_TRANSACTIONS')}
            </Button>
            <Button
              type="primary"
              onClick={() => handleAdd(EAddTypes.ADD_CATEGORY_MODAL)}
            >
              {i18next.t('ADD_CATEGORY')}
            </Button>
          </div>
        </Col>
        <Col xs={24} sm={24} md={10}>
          <Search
            placeholder={i18next.t('SEARCH')}
            onChange={e => setSearch(e.target.value)}
          />
        </Col>
      </StyledRow>
      <StyledTable columns={columns} dataSource={currentTransactions} />
      <Modal
        title={i18next.t('ADD_TRANSACTIONS')}
        visible={visible}
        onCancel={() => setVisible(false)}
      >
        {isAddTransactionModalOpen && (
          <AddTransaction
            categories={categories}
            onCancel={() => setVisible(false)}
            transactions={transactions}
          />
        )}

        {isAddCategoryModalOpen && (
          <AddCategory
            catergories={categories}
            onSubmit={() => setVisible(false)}
          />
        )}
      </Modal>
    </React.Fragment>
  );
};

export default Transactions;
