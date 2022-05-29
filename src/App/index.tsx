import { FC, useEffect } from 'react'
import { initiateLocalStorageData } from 'src/initiateLocalStorageData'
import { Category } from 'src/interfaces/category.interface'
import { Transaction } from 'src/interfaces/transaction.interface'
import { selectCategories, setCategories } from 'src/store/categories'
import { useAppDispatch, useAppSelector } from 'src/store/hooks'
import { selectTransactions, setTransactions } from 'src/store/transactions'
import AppRoutes from './AppRoutes'

const App: FC = () => {
    const transactions: Transaction[] = useAppSelector(selectTransactions)
    const categories: Record<string, Category> =
        useAppSelector(selectCategories)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (transactions.length === 0 && Object.keys(categories).length === 0) {
            const {
                categories: localStorageCategories,
                transactions: localStorageTransactions,
            } = initiateLocalStorageData()

            dispatch(setCategories(localStorageCategories))
            dispatch(setTransactions(localStorageTransactions))
        }
    }, [])

    return <AppRoutes />
}

export default App
