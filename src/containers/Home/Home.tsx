import { Categories } from "./components/Categories/Categories";
import { AddTransaction } from "./components/AddTransaction/AddTransaction";
import { Transactions } from "./components/Transactions/Transactions";
import styles from "./Home.module.scss";
import { Head } from "components/Head/Head";

export const Home = () => {
  return (
    <div className={styles.container}>
      <Head title="Home 🏠" description="Dashboard" />
      <AddTransaction />
      <Transactions />
      <Categories />
    </div>
  );
};
