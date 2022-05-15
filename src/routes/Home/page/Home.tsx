import React, { useState } from 'react';
import { Button, Tabs, Divider, PageHeader } from 'antd';

import AddCategory from '../../../features/Categories/AddCategory';
import CategoriesList from '../../../features/Categories/CategoriesList';
import AddTransaction from '../../../features/Transactions/AddTransaction';

import './Home.scss';
import Category from '../../../types/category';
import Transaction from '../../../types/transaction';
import TransactionsList from '../../../features/Transactions/TransactionsList';

const { TabPane } = Tabs;

type HomeProps = {
  categories: Category[];
  addNewCategory: (category: Category) => void;
  removeCategory: (category: Category) => void;
  transactions: Transaction[];
  addNewTransaction: (transaction: Transaction) => void;
};

const Home: React.FC<HomeProps> = ({
  addNewCategory,
  categories,
  removeCategory,
  addNewTransaction,
  transactions,
}) => {
  const [isAddCategoryModalVisible, setIsAddCategoryModalVisible] =
    useState(false);
  const [isAddTransactionModalVisible, setIsAddTransactionModalVisible] =
    useState(false);

  return (
    <div className="container">
      <PageHeader className="site-page-header" title="Home" />
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="Transactions" key="1" style={{ minHeight: '500px' }}>
          <Button
            type="primary"
            onClick={() => setIsAddTransactionModalVisible(true)}
          >
            Add New Transaction
          </Button>

          <Divider />

          <TransactionsList transactions={transactions} categories={categories} />

          {isAddTransactionModalVisible && (
            <AddTransaction
              isVisible={isAddTransactionModalVisible}
              closeTransactionModal={() =>
                setIsAddTransactionModalVisible(false)
              }
              addNewTransaction={addNewTransaction}
              categories={categories}
            />
          )}
        </TabPane>

        <TabPane tab="Categories" key="2" style={{ minHeight: '500px' }}>
          <Button
            type="primary"
            onClick={() => setIsAddCategoryModalVisible(true)}
          >
            Add Category
          </Button>

          <Divider />

          <CategoriesList
            categories={categories}
            removeCategory={removeCategory}
          />

          {isAddCategoryModalVisible && (
            <AddCategory
              isVisible={isAddCategoryModalVisible}
              closeCategoryModal={() => setIsAddCategoryModalVisible(false)}
              addNewCategory={addNewCategory}
            />
          )}
        </TabPane>
      </Tabs>
    </div>
  );
};

Home.displayName = 'routes/Home/Page/Home';

export default Home;
