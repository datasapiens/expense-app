import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { RootState, store } from './store'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { Input, Form, Button } from 'antd';
import { addCategory } from './categoryslice';


const App: React.FC = () => {

  // const [state, setState] = useLocalStorage('test', 1000);

  const categories = useSelector((state: RootState) => state.category.category);

  const dispatch = useDispatch()

  const onFinish = (values: any) => {
    dispatch(addCategory(values.label))
    console.log(values.label);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="App">
      <header className="App-header">
        {categories.map((item, index) =>

          <p key={index}>
            {item.label}
          </p>
        )}
      </header>
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
    </div>
  );
}

export default App;
