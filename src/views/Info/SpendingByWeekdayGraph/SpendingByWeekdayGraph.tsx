import { useSelector } from "react-redux";
import { transactionsSelector } from "state/selectors/transactionsSelector";

export const SpendingByWeekdayGraph = () => {
  const transactions = useSelector(transactionsSelector);

  return <div>Test</div>;
};
