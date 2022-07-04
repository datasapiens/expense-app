import { useAppSelector } from "app/hooks";
import { selectCategories } from "../../../../features/categories/categoriesSlice";
import { selectTransactions } from "../../../../features/transactions/transactionsSlice";
import styles from "./TransactionsTable.module.scss";

const AMOUNT_LOCALE_OPTIONS = { style: "currency", currency: "EUR" };
const NO_CATEGORY_LABEL = "No Category";

export const TransactionsTable = () => {
  const { transactions } = useAppSelector(selectTransactions);
  const { categories } = useAppSelector(selectCategories);

  return (
    <table className={styles.transactionsTable}>
      <thead>
        <tr>
          <th>Label</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
      </thead>
      {transactions && (
        <tbody>
          {transactions.map((row) => {
            const category = categories.find(({ id }) => id === row.category);
            const categoryLabel = category?.label ?? NO_CATEGORY_LABEL;
            const amountColor =
              row.amount > 0 ? styles.positive : row.amount < 0 ? styles.negative : undefined;

            return (
              <tr key={row.id}>
                <td>{row.label}</td>
                <td>{new Date(row.date).toLocaleDateString()}</td>
                <td className={`${styles.cellAmount} ${amountColor}`}>
                  {row.amount.toLocaleString(undefined, AMOUNT_LOCALE_OPTIONS)}
                </td>
                <td>{categoryLabel}</td>
              </tr>
            );
          })}
        </tbody>
      )}
    </table>
  );
};
