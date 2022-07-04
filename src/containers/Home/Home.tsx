import { Categories } from "./components/Categories/Categories";
import { AddTransaction } from "./components/AddTransaction/AddTransaction";
import { Transactions } from "./components/Transactions/Transactions";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={styles.container}>
      <AddTransaction />
      <Transactions />
      <Categories />
    </div>
  );
};
