import React from 'react';
import { Form, Input, Button, DatePicker, Select } from 'antd';

import './AddTransactionForm.scss';
import Category from '../../../types/category';

type AddTransactionFormProps = {
  onTransactionSuccess: (values: any) => void;
  categories: Category[];
};

const { Option } = Select;

const AddTransactionForm: React.FC<AddTransactionFormProps> = ({
  onTransactionSuccess,
  categories,
}) => {
  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      initialValues={{ remember: true }}
      onFinish={onTransactionSuccess}
      autoComplete="off"
    >
      <Form.Item
        label="Label"
        name="label"
        rules={[
          { required: true, message: 'Please input a transaction label!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Date"
        name="date"
        rules={[
          { required: true, message: 'Please input a transaction date!' },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Amount"
        name="amount"
        rules={[
          { required: true, message: 'Please input a transaction amount!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Category"
        name="categoryId"
        rules={[
          { required: true, message: 'Please select a transaction category!' },
        ]}
      >
        <Select>
          {categories.map((category) => (
            <Option key={category.id} value={category.id}>{category.label}</Option>
          ))}
        </Select>
      </Form.Item>

      <div className="form-action">
        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Create new transaction
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

AddTransactionForm.displayName =
  'features/Transactions/AddTransaction/AddTransactionForm';

export default AddTransactionForm;
