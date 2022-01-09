import { TransactionModel } from '../../app/models/transaction.model';
import { CategoryModel } from '../../app/models/category.model';

export const maxSumByCategory = (transactions: TransactionModel[], categories: CategoryModel[]): (string | number)[] => {
  if (!(transactions.length && categories.length)) {
    return [];
  }

  const header = ['Category', 'Income', 'Expense'];
  let result: any[] = [header];

  const categoriesObj = categories.reduce((acc: Record<number, string>, el) => {
    if (acc[el.id]) {
      return acc;
    }
    acc[el.id] = el.label;
    return acc;
  }, {});

  const dataObj = transactions.reduce((acc: any, val: any) => {
    const categoryName = categoriesObj[val.categoryId];
    if (acc[categoryName]) {
      if (+val.amount >= 0) {
        acc[categoryName].income += Number(val.amount);
      }
      if (+val.amount < 0) {
        acc[categoryName].expence += Math.abs(Number(val.amount));
      }
    }
    if (!acc[categoryName]) {
      acc[categoryName] = {
        income: +val.amount >= 0 ? Number(val.amount) : 0,
        expence: +val.amount < 0 ? Math.abs(Number(val.amount)) : 0,
      };
    }
    return acc;
  }, {});

  Object.keys(dataObj).forEach(key => {
    result.push([key, dataObj[key].income, dataObj[key].expence]);
  });

  console.log(result);
  return result;
};
