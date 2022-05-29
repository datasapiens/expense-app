import { FC } from 'react'
import { Pie } from 'react-chartjs-2'
import { useAppSelector } from 'src/store/hooks'
import { selectFilteredTransactions } from 'src/store/transactions'
import { Transaction } from 'src/interfaces/transaction.interface'
import { Category } from 'src/interfaces/category.interface'
import { selectCategories } from 'src/store/categories'
import { BACKGROUND_COLOR, BORDER_COLOR } from 'src/constants/chartColors'

export const IncomePerCategory: FC = () => {
    const transactions: Transaction[] = useAppSelector(
        selectFilteredTransactions
    )
    const categories: Record<string, Category> =
        useAppSelector(selectCategories)

    const incomesByCategory: Record<string, number> = {}

    for (let index = 0; index < transactions.length; index++) {
        const transaction = transactions[index]
        if (transaction.amount > 0) {
            incomesByCategory[transaction.categoryId] =
                (incomesByCategory[transaction.categoryId] || 0) +
                transaction.amount
        }
    }

    const [categoryLabels, categoryAmounts] = Object.entries(
        incomesByCategory
    ).reduce<[string[], number[]]>(
        ([labels, amounts], [categoryId, amount]) => {
            const category: Category = categories[categoryId]
            return [labels.concat(category.label), amounts.concat(amount)]
        },
        [[], []]
    )

    return (
        <Pie
            data={{
                datasets: [
                    {
                        backgroundColor: BACKGROUND_COLOR,
                        borderColor: BORDER_COLOR,
                        borderWidth: 1,
                        data: categoryAmounts,
                        label: 'Income Per Category',
                    },
                ],
                labels: categoryLabels,
            }}
        />
    )
}
