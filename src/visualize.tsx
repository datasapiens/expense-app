import { Router, Routes } from "react-router-dom";
import { TransactionsChart } from "./chart";

const Visualize: React.FC<any> = (props): JSX.Element => {
  return (
    <TransactionsChart />
  );
}

export default Visualize