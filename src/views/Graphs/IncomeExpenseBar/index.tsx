import { FC } from 'react'
import { Bar } from 'react-chartjs-2'
import moment from 'moment'
import { useAppSelector } from 'src/store/hooks'
import { selectFilteredTransactions } from 'src/store/transactions'
import { Transaction } from 'src/interfaces/transaction.interface'
import { BACKGROUND_COLOR } from 'src/constants/chartColors'

export const IncomeExpenseBar: FC = () => {
    const transactions: Transaction[] = useAppSelector(
        selectFilteredTransactions
    )

    const [incomeTransactions, expenseTransactions] = transactions.reduce<
        [Transaction[], Transaction[]]
    >(
        ([income, expenses], transaction) => {
            if (transaction.amount > 0) {
                return [income.concat(transaction), expenses]
            }
            return [income, expenses.concat(transaction)]
        },
        [[], []]
    )

    const aggregateTransactionsByDay = (
        transactions: Transaction[]
    ): Record<string, number> => {
        const transactionsByDay: { [key: string]: number } = {}
        transactions.forEach((transaction) => {
            const date = moment(transaction.date).format('YYYY-MM-DD')
            if (transactionsByDay[date]) {
                transactionsByDay[date] += transaction.amount
            } else {
                transactionsByDay[date] = transaction.amount
            }
        })
        return transactionsByDay
    }

    const incomeTransactionsByDay: Record<string, number> =
        aggregateTransactionsByDay(incomeTransactions)
    const expenseTransactionsByDay: Record<string, number> =
        aggregateTransactionsByDay(expenseTransactions)

    const uniqueDates: Record<string, string> = {}

    const allTransactionDates = Object.keys({
        ...expenseTransactionsByDay,
        ...incomeTransactionsByDay,
    })

    for (let index = 0; index < allTransactionDates.length; index++) {
        const date = allTransactionDates[index]
        if (!uniqueDates[date]) {
            uniqueDates[date] = date
        }
    }

    const allLabels = Object.keys(uniqueDates).sort()

    return (
        <Bar
            data={{
                datasets: [
                    {
                        backgroundColor: BACKGROUND_COLOR[0],
                        data: allLabels.map(
                            (label) => incomeTransactionsByDay[label] || 0
                        ),
                        label: 'Income',
                    },
                    {
                        backgroundColor: BACKGROUND_COLOR[1],
                        data: allLabels.map(
                            (label) => expenseTransactionsByDay[label] || 0
                        ),
                        label: 'Expenses',
                    },
                ],
                labels: allLabels,
            }}
            options={{
                plugins: {
                    legend: {
                        position: 'top' as const,
                    },
                },
                responsive: true,
            }}
        />
    )
}
