import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Chart } from "components/common/Chart";
import { spendingByCategories } from "state/selectors/spendingSelectors";

export const SpendingByCategoryLineGraph = () => {
  const { t } = useTranslation();
  const data = useSelector(spendingByCategories);

  return (
    <div>
      <h3>{t("graphs.spending-count")}</h3>
      <Chart
        type="bar"
        datasets={[
          {
            label: "temp",
            data: data.map((category) => category.total),
            backgroundColor: data.map((category) => category.color),
          },
        ]}
        labels={data.map(({ label }) => label)}
      />
    </div>
  );
};
