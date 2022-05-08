import { PageLayout } from "components/layouts/PageLayout";
import { SpendingByCategoryLineGraph } from "./SpendingByCategoryLineGraph";
import { SpendingByCategoryPieGraph } from "./TotalTransactionCountByCategoryPieGraph";
import style from "./Info.module.scss";

export const Info = () => (
  <PageLayout>
    <div className={style.container}>
      <div className={style.graph}>
        <SpendingByCategoryLineGraph />
      </div>

      <div className={style.graph}>
        <SpendingByCategoryPieGraph />
      </div>
    </div>
  </PageLayout>
);
