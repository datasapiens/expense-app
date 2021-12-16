import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { RootState, store } from './store'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { Input, Form, Button, DatePicker, Select } from 'antd';
import { addCategory } from './categoryslice';
import { addTransaction } from './transactionslice';
const { Option } = Select;
const dateFormat = 'YYYY/MM/DD';

const App: React.FC = () => {

  const [dat, setDat] = useState('');
  // const [state, setState] = useLocalStorage('test', 1000);

  const categories = useSelector((state: RootState) => state.category.category);

  const dispatch = useDispatch()

  const onFinish = (values: any) => {
    dispatch(addCategory(values.label))
  };
  const onFinishTransaction = (values: any) => {
    values['date'] = dat;
    console.log(values)
    // dispatch(addTransaction(values))
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

  return (
    <div className="App">
      <header className="App-header">
        {categories.map((item, index) =>

          <p key={index}>
            {item.label}
          </p>
        )}
      </header>

      <div>
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
            <DatePicker onChange={(date, datestring)=> setFieldValue(datestring)} />
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
              {categories.map((item) => {
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
      </div>
    </div>
  );
}

export default App;
