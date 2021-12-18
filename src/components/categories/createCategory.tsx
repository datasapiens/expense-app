import { Button, Form, Input } from "antd"
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../categoryslice";

const NewCategory: React.FC = () => {

  const dispatch = useDispatch()

  const onFinish = (values: any) => {
    dispatch(addCategory(values.label))
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
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
  )
}

export default NewCategory