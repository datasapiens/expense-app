import React from 'react';
import { Form, Input, Button } from 'antd';

const AddCategory = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onCancel = () => {
    form.resetFields();
  };

  return (
    <React.Fragment>
      <h4>Add a Category</h4>
      <Form form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item name="label" label="Label" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Category
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};

export default AddCategory;
