import { NetIncome } from "./components/NetIncome/NetIncome";
import { Spendings } from "./components/Spendings/Spendings";
import styles from "./Graphs.module.scss";

export const Graphs = () => {
  return (
    <div className={styles.container}>
      <Spendings />
      <NetIncome />
    </div>
  );
};
