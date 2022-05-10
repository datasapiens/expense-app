import React from 'react';
import { Form, Input, Button, Tag } from 'antd';
import { ICategory } from '../../types';
import { actions } from '../../slice';
import { useDispatch } from 'react-redux';
import i18next from 'i18next';

interface IAddCategoryProps {
  onSubmit: (values: any) => void;
  catergories: ICategory[];
}

const AddCategory = ({ onSubmit, catergories }: IAddCategoryProps) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    let category = {
      id: catergories.length + 1,
      ...values,
    };
    dispatch(
      actions.createCategory({
        ...category,
      }),
    );
  };

  const deleteCategory = (value: string) => {
    dispatch(actions.deleteCategory(value));
  };

  return (
    <React.Fragment>
      <div>
        <p>{i18next.t('CURRENT_CATEGORIES')}</p>
        {catergories &&
          catergories.map((category, index) => (
            <Tag
              key={index}
              closable
              onClose={() => deleteCategory(category.label)}
            >
              {category.label}
            </Tag>
          ))}
      </div>
      <h4>{i18next.t('ADD_A_CATEGORY')}</h4>
      <Form form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item name="label" label="Label" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {i18next.t('SUBMIT')}
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};

export default AddCategory;
