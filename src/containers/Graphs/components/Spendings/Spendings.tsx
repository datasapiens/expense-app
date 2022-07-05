import { Card } from "components/Card/Card";
import { SpendingsChart } from "../SpendingsChart/SpendingsChart";
import styles from "./Spendings.module.scss";

export const Spendings = () => {
  return (
    <div className={styles.container}>
      <Card title="Spendings per Category">
        <SpendingsChart />
      </Card>
    </div>
  );
};
