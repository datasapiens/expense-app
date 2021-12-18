import { RootState } from './store'
import { useDispatch, useSelector } from 'react-redux'
import { Input, Form, Button, DatePicker, Select, Row, Col } from 'antd';
import TransactionsTable from './table';
import { addCategory } from './categoryslice';
import { addTransaction } from './transactionslice';
import CategoryCard from './card';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  NavLink
} from "react-router-dom";
import Visualize from './visualize';
import { useState } from 'react';
const { Option } = Select;

const [dat, setDat] = useState('');
// const [state, setState] = useLocalStorage('test', 1000);

const categories = useSelector((state: RootState) => state.category.category);

const transactions = useSelector((state: RootState) => state.transactions.transaction);

const dispatch = useDispatch()

const onFinish = (values: any) => {
  dispatch(addCategory(values.label))
};
const onFinishTransaction = (values: any) => {
  values['date'] = dat;
  //console.log(values)
  dispatch(addTransaction(values))
};
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const onFinishTransactionFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

function setFieldValue(dateString: string): void {
  setDat(dateString);
}


const Home: React.FC=()=> {
  return(
    <div className="App">
      <header className="App-header">
        <Row gutter={4}>
          {categories.map((item: any, index: number) =>
            <Col className="gutter-row" span={6}>
              <CategoryCard category={item} />
              <br />
            </Col>
          )}
        </Row>
      </header>
      <div>
        <NavLink
          end
          to='/visualize'
        >
          <Button type="primary" htmlType="submit">
            Visualize
          </Button>
        </NavLink>
        <TransactionsTable transactions={transactions} />
      </div>

      <Row gutter={2}>
        <Col className="gutter-row" span={12}>
          {/* Category Form */}
          <Form
            name='categories'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8, offset: 6 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Form.Item
              name='label'
              rules={[{ required: true, message: 'Please input a Category!' }]}
            >

              <Input placeholder='Add category' />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 4 }}>
              <Button type="primary" htmlType="submit">
                Add Category
              </Button>
            </Form.Item>
          </Form>

        </Col>
        <Col className="gutter-row" span={12}>
          {/* Transaction Form */}
          <Form
            name='transaction'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8, offset: 6 }}
            onFinish={onFinishTransaction}
            onFinishFailed={onFinishTransactionFailed}
            autoComplete='off'
          >
            <Form.Item
              name='label'
              rules={[{ required: true, message: 'Please input a Transaction!' }]}
            >
              <Input placeholder='Add Transaction' />
            </Form.Item>
            <Form.Item
              name='date'
              rules={[{ required: true, message: 'Please input a date!' }]}
            >
              <DatePicker onChange={(date, datestring) => setFieldValue(datestring)} />
            </Form.Item>
            <Form.Item
              name='amount'
              rules={[{ required: true, message: 'Please input an amount!' }]}
            >
              <Input placeholder='Enter amount' />
            </Form.Item>
            <Form.Item
              name='category'
              rules={[{ required: true, message: 'Please input a category!' }]}
            >
              <Select
                placeholder="Please select The Category"
              >
                {categories.map((item: any) => {
                  return <Option key={item.id} value={item.id}>
                    {item.label}
                  </Option>
                })}
              </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 4 }}>
              <Button type="primary" htmlType="submit">
                Add Transaction
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>

  )
}

export default Home