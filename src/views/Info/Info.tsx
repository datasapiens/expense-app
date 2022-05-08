import { PageLayout } from "components/layouts/PageLayout";
import { SpendingByWeekdayGraph } from "./SpendingByWeekdayGraph";
import { SpendingByCategoryPieGraph } from "./SpendingByCategoryPieGraph";
import style from "./Info.module.scss";

export const Info = () => (
  <PageLayout>
    <div className={style.container}>
      <div className={style.graph}>
        <SpendingByWeekdayGraph />
      </div>

      <div className={style.graph}>
        <SpendingByCategoryPieGraph />
      </div>
    </div>
  </PageLayout>
);
