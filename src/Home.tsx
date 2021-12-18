import { RootState } from './store'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Form, Button, DatePicker, Select, Row, Col } from 'antd';
import TransactionsTable from './components/transactions/table';
import { addCategory } from './slices/categoryslice';
import { addTransaction } from './slices/transactionslice';
import CategoryCard from './components/categories/card';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import NewTransaction from './components/transactions/createTransaction';
import NewCategory from './components/categories/createCategory';


const Home: React.FC = () => {

  const categories = useSelector((state: RootState) => state.category.category);
  const transactions = useSelector((state: RootState) => state.transactions.transaction);

  return (
    <div className="App">
      <header className="App-header">
        <Row gutter={16}>
          {categories.map((item: any, index: number) =>
            <Col span={8}>
              <CategoryCard category={item} />
              <br />
            </Col>
          )}
        </Row>
      </header>
      <div className='legend'>
        <h3 className='title'>
          Transaction Data
        </h3>
        <Link to='/visualize'>
          <Button type="primary" htmlType="submit">
            View in Graph
          </Button>
        </Link>

      </div>
      <div>
        <TransactionsTable transactions={transactions} />
      </div>

      <div className='data-entry'>
        <div className='category'>
          <h2 className='title'>
            Add Category
          </h2>
          <NewCategory />
        </div>

        <div className='transaction'>
          <h2 className='title'>
            Add Transaction
          </h2>

          <NewTransaction />
        </div>
      </div>

    </div>

  )
}

export default Home