import React from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';
import { actions } from 'app/pages/HomePage/slice';
import { useDispatch } from 'react-redux';
import { ITransaction, ICategory } from 'app/pages/HomePage/types';
import moment from 'moment';

const { Option } = Select;

interface IAddTransactionProps {
  categories: ICategory[];
  onCancel: () => void;
  transactions: ITransaction[];
}

const AddTransaction = ({ categories, transactions }: IAddTransactionProps) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values: ITransaction) => {
    let transaction = {
      id: transactions.length + 1,
      date: moment(values.date).format('l'),
      label: values.label,
      amount: values.amount,
      category: values.category,
    };
    dispatch(
      actions.createTransaction({
        ...transaction,
      }),
    );
  };

  return (
    <React.Fragment>
      <h4>Add a Transaction</h4>
      <Form form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item name="label" label="Label" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Date" name="date" rules={[{ required: true }]}>
          <DatePicker />
        </Form.Item>
        <Form.Item name="amount" label="Amount" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true }]}
        >
          <Select placeholder="Select a category" allowClear>
            {categories.map((category, index) => (
              <Option key={index} value={category.label}>
                {category.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};

export default AddTransaction;
