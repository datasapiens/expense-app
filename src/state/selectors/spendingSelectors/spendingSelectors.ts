import { createSelector } from "@reduxjs/toolkit";
import { Category } from "entities/Category";
import { categoriesSelector } from "state/selectors/categoriesSelector";
import { transactionsSelector } from "state/selectors/transactionsSelector";

type SpendingByCategory = Category & {
  spending: number;
  income: number;
  total: number;
  totalAbs: number;
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
        totalAbs: 0,
      });

      return acc;
    }, new Map<string, SpendingByCategory>());

    transactions
      .filter((transaction) => categoriesMap.get(transaction.category) != null)
      .forEach((transaction) => {
        const category = categoriesMap.get(transaction.category);
        if (!category) {
          return;
        }

        if (transaction.amount < 0) {
          category.spending += transaction.amount;
        }
        if (transaction.amount > 0) {
          category.spending += transaction.amount;
        }

        category.count += 1;
        category.total += transaction.amount;
        category.totalAbs += Math.abs(transaction.amount);
      });

    const result: SpendingByCategory[] = [];

    categoriesMap.forEach((category) => result.push(category));

    return result;
  }
);
