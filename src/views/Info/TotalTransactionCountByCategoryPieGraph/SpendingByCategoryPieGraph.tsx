import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { spendingByCategories } from "state/selectors/spendingSelectors";
import { Chart } from "components/common/Chart";

export const SpendingByCategoryPieGraph = () => {
  const { t } = useTranslation();
  const data = useSelector(spendingByCategories);

  return (
    <div>
      <h3>{t("graphs.transaction-count")}</h3>
      <Chart
        type="pie"
        datasets={[
          {
            data: data.map((category) => category.count),
            backgroundColor: data.map((category) => category.color),
          },
        ]}
        labels={data.map((category) => category.label)}
      />
    </div>
  );
};
