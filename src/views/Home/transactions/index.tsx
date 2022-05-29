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
import { selectCategories } from 'src/store/categories'
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
    const categories: Record<string, Category> =
        useAppSelector(selectCategories)

    const onAddClick = () => {
        setModalContent(
            <AddTransactionModalContent
                onClose={() => setModalContent(null)}
                setError={(error) => setError(error)}
            />
        )
    }

    return (
        <div className={styles.tableWrapper}>
            <Toolbar className={styles.toolbar}>
                <div className={styles.title}>Transactions</div>
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
                            <TableCell align="left">
                                <span className={styles.head}>Label</span>
                            </TableCell>
                            <TableCell align="left">
                                <span className={styles.head}>Date</span>
                            </TableCell>
                            <TableCell align="left">
                                <span className={styles.head}>Amount</span>
                            </TableCell>
                            <TableCell align="left">
                                <span className={styles.head}>Category</span>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions.map((transaction: Transaction) => {
                            const category: Category =
                                categories?.[transaction.categoryId]

                            return (
                                <TableRow key={transaction.id}>
                                    <TableCell align="left">
                                        <span className={styles.cell}>
                                            {transaction.label}
                                        </span>
                                    </TableCell>
                                    <TableCell align="left">
                                        <span className={styles.cell}>
                                            {moment(transaction.date).format(
                                                'DD/MM/YYYY'
                                            )}
                                        </span>
                                    </TableCell>
                                    <TableCell align="left">
                                        <span className={styles.cell}>
                                            {transaction.amount.toFixed(2)}
                                        </span>
                                    </TableCell>
                                    <TableCell align="left">
                                        <span className={styles.cell}>
                                            {category.label}
                                        </span>
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
