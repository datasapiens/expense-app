import { useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { categoriesSelector } from "state/selectors/categoriesSelector";
import { transactionsSelector } from "state/selectors/transactionsSelector";
import style from "./Transactions.module.scss";

export const Transactions = () => {
  const { t } = useTranslation();
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
    (categoryId: string) =>
      categoriesNameMap[categoryId] ?? t("placeholder.category-missing"),
    [categoriesNameMap, t]
  );

  return (
    <div>
      <h2>{t("headers.transactions")}</h2>
      <table className={style.table}>
        <thead>
          <tr>
            <th>{t("views.transactions.table.transaction")}</th>
            <th>{t("views.transactions.table.date")}</th>
            <th>{t("views.transactions.table.category")}</th>
            <th>{t("views.transactions.table.amount")}</th>
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
