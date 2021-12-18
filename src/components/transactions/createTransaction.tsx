import { Button, Col, DatePicker, Form, Input, Select } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { addTransaction } from "../../transactionslice";
const { Option } = Select;

const NewTransaction: React.FC = () => {
  const [dat, setDat] = useState('');

  const categories = useSelector((state: RootState) => state.category.category);

  const dispatch = useDispatch()
  const onFinishTransaction = (values: any) => {
    values['date'] = dat;
    //console.log(values)
    dispatch(addTransaction(values))
  };


  const onFinishTransactionFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  function setFieldValue(dateString: string): void {
    setDat(dateString);
  }


  return (
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
  );
}

export default NewTransaction