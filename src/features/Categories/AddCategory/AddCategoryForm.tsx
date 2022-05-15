import React from 'react';
import { Form, Input, Button } from 'antd';

import './AddCategoryForm.scss';

type AddCategoryFormProps = {
  onCategorySuccess: (values: any) => void;
};

const AddCategoryForm: React.FC<AddCategoryFormProps> = ({
  onCategorySuccess,
}) => {
  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      initialValues={{ remember: true }}
      onFinish={onCategorySuccess}
      autoComplete="off"
    >
      <Form.Item
        label="Label"
        name="label"
        rules={[{ required: true, message: 'Please input a category label!' }]}
      >
        <Input />
      </Form.Item>

      <div className="form-action">
        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Create new category
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

AddCategoryForm.displayName = 'features/Categories/AddCategory/AddCategoryForm';

export default AddCategoryForm;
