import { Button } from "antd";
import { Link } from "react-router-dom";
import { TransactionsChart } from "./chart";

const Visualize: React.FC<any> = (props): JSX.Element => {
  return (
    <>
      <TransactionsChart />

      <br />
      <br />
      <br />
      <Link to='/'>
        <Button type="primary" htmlType="submit">
          Add more Transactions
        </Button>
      </Link>
    </>
  );
}

export default Visualize