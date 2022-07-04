import { ChangeEvent, useState } from "react";
import { Card } from "components/Card/Card";
import { NetIncomeChart } from "../NetIncomeChart/NetIncomeChart";
import styles from "./NetIncome.module.scss";
import { FormInput } from "components/FormInput/FormInput";

const currentYear = new Date().getFullYear();

export const NetIncome = () => {
  const [year, setYear] = useState(currentYear);
  const onYearChange = (event: ChangeEvent<HTMLInputElement>) =>
    setYear(parseInt(event.target.value, 10));

  return (
    <div className={styles.container}>
      <Card title="Quarterly Net Income per Year">
        <FormInput
          name="year"
          label="Year"
          type="number"
          min="1900"
          max="2099"
          step="1"
          value={year}
          onChange={onYearChange}
        />
        <NetIncomeChart year={year} />
      </Card>
    </div>
  );
};
