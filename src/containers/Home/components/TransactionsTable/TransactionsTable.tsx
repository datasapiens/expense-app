import { useCallback, useMemo } from "react";
import { useAppSelector } from "app/hooks";
import { Table } from "components/Table/Table";
import { selectCategories } from "features/categories/categoriesSlice";
import { selectTransactions, Transaction } from "features/transactions/transactionsSlice";
import { ColumnDef } from "@tanstack/react-table";
import styles from "./TransactionsTable.module.scss";

const AMOUNT_LOCALE_OPTIONS = { style: "currency", currency: "EUR" };
const NO_CATEGORY_LABEL = "No Category";

export const TransactionsTable = () => {
  const { transactions } = useAppSelector(selectTransactions);
  const { categories } = useAppSelector(selectCategories);

  const getCategoryLabel = useCallback(
    (categoryId: string) => {
      const category = categories.find(({ id }) => id === categoryId);
      const categoryLabel = category?.label ?? NO_CATEGORY_LABEL;
      return categoryLabel;
    },
    [categories],
  );

  const getAmountCellStyle = (amount: number) =>
    amount > 0 ? styles.positive : amount < 0 ? styles.negative : undefined;

  const columns = useMemo<ColumnDef<Transaction>[]>(
    () => [
      {
        accessorFn: ({ label }) => label,
        id: "label",
        header: "Label",
      },
      {
        accessorFn: ({ date }) => date,
        id: "date",
        cell: ({ getValue }) => new Date(getValue()).toLocaleDateString(),
        header: "Date",
      },
      {
        accessorFn: ({ amount }) => amount,
        id: "amount",
        cell: ({ getValue }) => {
          const value = getValue();

          return (
            <span className={`${styles.cellAmount} ${getAmountCellStyle(value)}`}>
              {value.toLocaleString(undefined, AMOUNT_LOCALE_OPTIONS)}
            </span>
          );
        },
        header: "Amount",
      },
      {
        accessorFn: ({ category }) => category,
        id: "category",
        cell: ({ getValue }) => getCategoryLabel(getValue()),
        header: "Category",
      },
    ],
    [getCategoryLabel],
  );

  return <Table columns={columns} data={transactions} />;
};
