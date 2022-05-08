import { i18n } from "i18n";
import { v4 as uuidV4 } from "uuid";
import { createSelector } from "@reduxjs/toolkit";
import { Category } from "entities/Category";
import { categoriesSelector } from "state/selectors/categoriesSelector";
import { transactionsSelector } from "state/selectors/transactionsSelector";

type SpendingByCategory = Category & {
  spending: number;
  income: number;
  total: number;
  count: number;
};

export const spendingByCategories = createSelector(
  categoriesSelector,
  transactionsSelector,
  (categories, transactions) => {
    const categoriesMap = categories.reduce((acc, current) => {
      acc.set(current.id, {
        ...current,
        spending: 0,
        count: 0,
        income: 0,
        total: 0,
      });

      return acc;
    }, new Map<string, SpendingByCategory>());

    const hasTransactionsWithNoCategory = transactions.some(
      (transaction) => categoriesMap.get(transaction.category) == null
    );

    const noCategoryTransactionsCategoryId = uuidV4();
    if (hasTransactionsWithNoCategory) {
      categoriesMap.set(noCategoryTransactionsCategoryId, {
        id: noCategoryTransactionsCategoryId,
        label: i18n.t("placeholder.no-category"),
        color: "#000",
        total: 0,
        spending: 0,
        count: 0,
        income: 0,
      });
    }

    transactions.forEach((transaction) => {
      let category = categoriesMap.get(transaction.category);
      if (!category) {
        category = categoriesMap.get(noCategoryTransactionsCategoryId)!;
      }

      if (transaction.amount < 0) {
        category.spending += transaction.amount;
      }
      if (transaction.amount > 0) {
        category.spending += transaction.amount;
      }

      category.count += 1;
      category.total += transaction.amount;
    });

    const result: SpendingByCategory[] = [];

    categoriesMap.forEach((category) => result.push(category));

    return result;
  }
);
