import { Button } from "antd";
import { Link } from "react-router-dom";
import { TransactionsChart } from "./components/chart/chart";

const Visualize: React.FC<any> = (props): JSX.Element => {
  return (
    <div className="chart">
      <div className="chart-area">
        <TransactionsChart />
      </div>

      <br />
      <br />
      <br />
      <Link to='/' className="chart-button">
        <Button type="primary" htmlType="submit">
          Add more Transactions
        </Button>
      </Link>
    </div>
  );
}

export default Visualize