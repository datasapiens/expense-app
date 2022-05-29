import { FC } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import moment from 'moment'
import { useAppSelector } from 'src/store/hooks'
import { Transaction } from 'src/interfaces/transaction.interface'
import { Category } from 'src/interfaces/category.interface'

export const Transactions: FC = () => {
    const transactions: Transaction[] = useAppSelector(
        (state) => state.transactions
    )
    const categories: Record<string, Category> = useAppSelector(
        (state) => state.categories
    )

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Label</TableCell>
                        <TableCell align="left">Date</TableCell>
                        <TableCell align="left">Amount</TableCell>
                        <TableCell align="left">Category</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {transactions.map((transaction: Transaction) => (
                        <TableRow key={transaction.id}>
                            <TableCell align="left">
                                {transaction.label}
                            </TableCell>
                            <TableCell align="left">
                                {moment(transaction.date).format('DD/MM/YYYY')}
                            </TableCell>
                            <TableCell align="left">
                                {transaction.amount.toFixed(2)}
                            </TableCell>
                            <TableCell align="left">
                                {categories[transaction.categoryId].label}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
