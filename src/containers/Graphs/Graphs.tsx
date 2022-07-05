import { Head } from "components/Head/Head";
import { NetIncome } from "./components/NetIncome/NetIncome";
import { Spendings } from "./components/Spendings/Spendings";
import styles from "./Graphs.module.scss";

export const Graphs = () => (
  <div className={styles.container}>
    <Head title="Graphs 📊" description="Graphs, charts and diagrams" />
    <Spendings />
    <NetIncome />
  </div>
);
