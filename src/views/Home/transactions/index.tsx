import { FC, ReactNode } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import moment from 'moment'
import { Add } from '@material-ui/icons'
import { IconButton, Toolbar } from '@material-ui/core'
import { useAppSelector } from 'src/store/hooks'
import { Transaction } from 'src/interfaces/transaction.interface'
import { Category } from 'src/interfaces/category.interface'
import { selectFilteredTransactions } from 'src/store/transactions'
import styles from './Transactions.module.scss'
import { AddTransactionModalContent } from '../AddTransactionModalContent'

interface Props {
    setError: (error: string) => void
    setModalContent: (content: ReactNode) => void
}

export const Transactions: FC<Props> = ({ setModalContent, setError }) => {
    const transactions: Transaction[] = useAppSelector(
        selectFilteredTransactions
    )
    const categories: Record<string, Category> = useAppSelector(
        (state) => state.categories
    )

    const onAddClick = () => {
        setModalContent(
            <AddTransactionModalContent
                onClose={() => setModalContent(null)}
                setError={(error) => setError(error)}
            />
        )
    }

    return (
        <div>
            <Toolbar className={styles.toolbar}>
                <div>Transactions</div>
                <IconButton
                    aria-label="add"
                    color="default"
                    onClick={onAddClick}
                >
                    <Add fontSize="large" />
                </IconButton>
            </Toolbar>
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
                        {transactions.map((transaction: Transaction) => {
                            const category: Category =
                                categories?.[transaction.categoryId]

                            return (
                                <TableRow key={transaction.id}>
                                    <TableCell align="left">
                                        {transaction.label}
                                    </TableCell>
                                    <TableCell align="left">
                                        {moment(transaction.date).format(
                                            'DD/MM/YYYY'
                                        )}
                                    </TableCell>
                                    <TableCell align="left">
                                        {transaction.amount.toFixed(2)}
                                    </TableCell>
                                    <TableCell align="left">
                                        {category.label}
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
