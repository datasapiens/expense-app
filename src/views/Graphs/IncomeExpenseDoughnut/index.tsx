import { FC } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { useAppSelector } from 'src/store/hooks'
import { selectFilteredTransactions } from 'src/store/transactions'
import { Transaction } from 'src/interfaces/transaction.interface'
import { round } from 'src/utils/round'
import { BACKGROUND_COLOR, BORDER_COLOR } from 'src/constants/chartColors'

export const IncomeExpenseDoughnut: FC = () => {
    const transactions: Transaction[] = useAppSelector(
        selectFilteredTransactions
    )

    const [income, expenses] = transactions.reduce(
        ([income, expenses], transaction) => {
            if (transaction.amount > 0) {
                return [income + transaction.amount, expenses]
            }
            return [income, expenses + Math.abs(transaction.amount)]
        },
        [0, 0]
    )

    return (
        <Doughnut
            data={{
                datasets: [
                    {
                        backgroundColor: BACKGROUND_COLOR,
                        borderColor: BORDER_COLOR,
                        borderWidth: 1,
                        data: [round(income), round(expenses)],
                        label: 'Income / Expenses',
                    },
                ],
                labels: ['Income', 'Expenses'],
            }}
        />
    )
}
