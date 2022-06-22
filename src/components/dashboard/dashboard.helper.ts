import { delay, Observable, of } from "rxjs";
import { IncomeByCategoriesData, Category, Transaction, OutcomeByCategoriesData, BalanceByMonthData } from "../../redux/initial-state.model";

export const calcIncomeByCategories = ({ categories, transactions }: {
  categories: Category[], transactions: Transaction[]
}): Observable<IncomeByCategoriesData[]> => {
  let incomeByCategoriesData: IncomeByCategoriesData[] = [];
  try {
    categories.forEach((category) => {
      const amountByCategory: IncomeByCategoriesData | null = calculateAmountByCategory({ category, transactions, isIncome: true });

      if (amountByCategory) {
        incomeByCategoriesData.push(amountByCategory);
      }
    })
    return of(incomeByCategoriesData).pipe(delay(1000));
  } catch (error) {
    throw (Error('Error calculating income by categories'))
  }
}

const calculateAmountByCategory = ({ category, transactions, isIncome }: {
  category: Category, transactions: Transaction[], isIncome: boolean
}): IncomeByCategoriesData | null => {
  const amountTransactions = transactions.filter(transaction => isIncome ? transaction.amount > 0 : transaction.amount < 0);
  const filteredTransactions = amountTransactions.filter((transaction) => transaction.category_id === category.category_id);
  const totalAmount = amountTransactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  const categoryAmount = filteredTransactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  if (categoryAmount) {
    return {
      name: category.label,
      value: categoryAmount,
      percentage: `${((categoryAmount / totalAmount) * 100).toFixed(1)}%`,
      color: category.color ? category.color : '000',

    }
  }

  return null;
}

export const calcOutcomeByCategories = ({ categories, transactions }: {
  categories: Category[], transactions: Transaction[]
}): Observable<OutcomeByCategoriesData[]> => {
  let outcomeByCategoriesData: OutcomeByCategoriesData[] = [];
  try {
    categories.forEach((category) => {
      const amountByCategory: OutcomeByCategoriesData | null = calculateAmountByCategory({ category, transactions, isIncome: false });

      if (amountByCategory) {
        outcomeByCategoriesData.push(amountByCategory);
      }
    })
    return of(outcomeByCategoriesData).pipe(delay(1000));
  } catch (error) {
    throw (Error('Error calculating outcome by categories'))
  }
}

export const calculateBalanceByMonth = ({
  transactions }:
  { transactions: Transaction[] }): Observable<BalanceByMonthData[]> => {
  const mapDateObject: any = {};

  transactions.forEach(({ date, amount }) => {
    const year = (new Date(date)).getFullYear();
    const month = (new Date(date)).getMonth() + 1;
    const currentYearObject = mapDateObject[year];
    if (!currentYearObject) mapDateObject[year] = {};
    const current = mapDateObject[year]?.[month];
    mapDateObject[year][month] = current ? current + amount : amount;
  })

  const yearsArray = Object.keys(mapDateObject);
  let dataArray: BalanceByMonthData[] = [];
  yearsArray.forEach((year) => {
    const monthsArray = Object.keys(mapDateObject[year]);
    monthsArray.forEach((month) => {
      dataArray.push({
        date: `${getMonthName(+month)}/${year}`,
        balance: mapDateObject[year][month],
      })
    })
  })

  return of(dataArray).pipe(delay(1000));
}

const getMonthName = (month: number) => {
  const monthsName = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  return monthsName[month - 1];
}