import { useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import { categoriesSelector } from "state/selectors/categoriesSelector";
import { transactionsSelector } from "state/selectors/transactionsSelector";
import style from "./Transactions.module.scss";

export const Transactions = () => {
  const categories = useSelector(categoriesSelector);
  const transactions = useSelector(transactionsSelector);
  const categoriesNameMap = useMemo(() => {
    const result = categories.reduce<Record<string, string>>(
      (acc, category) => {
        acc[category.id] = category.label;

        return acc;
      },
      {}
    );
    return result;
  }, [categories]);
  const getCategoryName = useCallback(
    (categoryId: string) => categoriesNameMap[categoryId] ?? "----",
    [categoriesNameMap]
  );

  return (
    <div>
      <h2>Transactions</h2>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Transaction</th>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({ label, amount, date, id, category }) => (
            <tr key={id}>
              <td>{label}</td>
              <td>
                {new Date(date).toLocaleDateString("en-EU", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </td>
              <td>{getCategoryName(category)}</td>
              <td>{amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
