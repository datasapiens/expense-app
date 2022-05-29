import { FC, ReactNode } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Add, Delete } from '@material-ui/icons'
import { IconButton, Toolbar } from '@material-ui/core'
import { useAppDispatch, useAppSelector } from 'src/store/hooks'
import { Category } from 'src/interfaces/category.interface'
import { ConfirmationModalContent } from 'src/components/ConfirmationModalContent'
import { deleteCategory, selectFilteredCategories } from 'src/store/categories'
import styles from './Categories.module.scss'
import { AddCategoryModalContent } from '../AddCategoryModalContent'

interface Props {
    setError: (error: string) => void
    setModalContent: (content: ReactNode) => void
}

export const Categories: FC<Props> = ({ setModalContent, setError }) => {
    const filteredCategories: Category[] = useAppSelector(
        selectFilteredCategories
    )

    const dispatch = useAppDispatch()

    const onDelete = (category: Category) => {
        setModalContent(
            <ConfirmationModalContent
                onClose={() => setModalContent(null)}
                onConfirm={() => {
                    setModalContent(null)
                    dispatch(deleteCategory(category.id))
                }}
            />
        )
    }

    const onAddClick = () => {
        setModalContent(
            <AddCategoryModalContent
                onClose={() => setModalContent(null)}
                setError={(error) => setError(error)}
            />
        )
    }

    return (
        <div>
            <Toolbar className={styles.toolbar}>
                <div>Categories</div>
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
                            <TableCell align="left">#</TableCell>
                            <TableCell align="left">Label</TableCell>
                            <TableCell align="left">{}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredCategories.map((category: Category, index) => {
                            return (
                                <TableRow key={category.id}>
                                    <TableCell align="left">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="left">
                                        {category.label}
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton
                                            aria-label="delete"
                                            color="default"
                                            onClick={() => onDelete(category)}
                                        >
                                            <Delete />
                                        </IconButton>
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
