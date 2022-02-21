import React, { useState, useRef, useEffect } from 'react';
import { Form, Input, Button, Select, Col, Row } from 'antd';
import DatePicker from './date-picker';
import { v4 as uuidv4 } from 'uuid';
import { CategoryList } from '../../components/home';

import {
  addTransaction,
  getCategories,
  initialCategories,
} from '../../reducers-actions';

const { Option } = Select;
let moment = require('moment');

const InputBar = ({ setUpdate, update }: { setUpdate: any; update: any }) => {
  const categoryNames = getCategories()?.map((category: any) => category.label);
  const [label, setLabel] = useState<string>('');
  const [date, setDate] = useState(moment(new Date()));
  const [category, setCategory] = useState<string>('Other');
  const [amount, setAmount] = useState<number>(NaN);
  const inputRef = useRef<any>(null);

  const dateFormat = 'YYYY/MM/DD';

  const handleReset = () => {
    setLabel('');
    setAmount(NaN);
    inputRef.current.focus();
  };
  console.log(category);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    initialCategories();
  }, []);

  return (
    <>
      <Form
        onFinish={() => {
          addTransaction({
            id: uuidv4(),
            label: label,
            category: category,
            date: moment(date).format(dateFormat),
            amount: amount,
          });
          setUpdate((prevState: any) => !prevState);
          setTimeout(() => {
            handleReset();
            console.log('reset');
          }, 300);
        }}
        layout='vertical'
      >
        <h3 style={{ textAlign: 'left' }}>Add Transaction</h3>
        <Row gutter={5}>
          <Col>
            <Form.Item>
              <Input
                ref={inputRef}
                value={label}
                maxLength={30}
                placeholder='Label'
                required={true}
                style={{ width: 250 }}
                onChange={(e) => {
                  setLabel(e.currentTarget?.value);
                }}
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <Input
                prefix='€'
                value={amount}
                placeholder='Amount'
                style={{ width: 150 }}
                required={true}
                type='number'
                step='0.01'
                onChange={(e: any) => {
                  setAmount(e.currentTarget.value);
                }}
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <DatePicker
                date={date}
                setDate={setDate}
                dateFormat={dateFormat}
              />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <Select
                placeholder='Select category | Other'
                defaultValue='Other'
                style={{ width: 200, textAlign: 'left' }}
                onChange={(e) => setCategory(e)}
              >
                {categoryNames?.map((category: string, index: number) => (
                  <Option key={index} value={category}>
                    {category}
                  </Option>
                ))}
                ;
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={20}>
            <Form.Item>
              <CategoryList update={update} setUpdate={setUpdate} />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                style={{ float: 'right', width: 100, marginRight: 10 }}
              >
                Save
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default InputBar;
