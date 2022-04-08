import React from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';
import { actions } from 'app/pages/HomePage/slice';
import { useDispatch } from 'react-redux';
import { ITransaction, ICategory } from 'app/pages/HomePage/types';
import moment from 'moment';
import i18next from 'i18next';

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
      <h4>{i18next.t('ADD_A_TRANSACTION')}</h4>
      <Form form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="label"
          label={i18next.t('LABEL')}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={i18next.t('DATE')}
          name="date"
          rules={[{ required: true }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="amount"
          label={i18next.t('AMOUNT')}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="category"
          label={i18next.t('CATEGORY')}
          rules={[{ required: true }]}
        >
          <Select placeholder={i18next.t('SELECT_A_CATEGORY')} allowClear>
            {categories.map((category, index) => (
              <Option key={index} value={category.label}>
                {category.label}
              </Option>
            ))}
          </Select>
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

export default AddTransaction;
