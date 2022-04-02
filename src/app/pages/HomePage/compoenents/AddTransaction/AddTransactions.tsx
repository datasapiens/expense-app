import React from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';

const { Option } = Select;

const AddTransaction = ({ categories }) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onCancel = () => {
    form.resetFields();
  };

  return (
    <React.Fragment>
      <h4>Add a Transaction</h4>
      <Form form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item name="label" label="Label" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Date" name="date">
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
              <Option key={index} value={category}>
                {category}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onCancel}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};

export default AddTransaction;
