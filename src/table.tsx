import { Table } from "antd";

const TransactionsTable: React.FC <any>= (props): JSX.Element => {

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'label',
      dataIndex: 'label',
      key: 'label',
    },
    {
      title: 'date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'category',
      dataIndex: 'category',
      key: 'category',
    },
  ];
  return (
    <Table dataSource={props.transactions} columns={columns} pagination={false} size='middle'/>
  );
}


export default TransactionsTable