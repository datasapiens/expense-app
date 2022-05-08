import { useSelector } from "react-redux";
import { spendingByCategories } from "state/selectors/spendingSelectors";
import { Chart } from "components/common/Chart";

export const SpendingByCategoryPieGraph = () => {
  const data = useSelector(spendingByCategories);

  return (
    <Chart
      type="pie"
      datasets={[
        {
          data: data.map((category) => category.total),
          backgroundColor: data.map((category) => category.color),
        },
      ]}
      labels={data.map((category) => category.label)}
    />
  );
};
