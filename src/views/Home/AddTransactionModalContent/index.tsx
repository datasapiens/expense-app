import { FC, useState } from 'react'
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from '@material-ui/core'
import moment from 'moment'
import { useAppDispatch, useAppSelector } from 'src/store/hooks'
import { Category } from 'src/interfaces/category.interface'
import { addTransaction } from 'src/store/transactions'
import { generateId } from 'src/utils/generateId'
import { selectFilteredCategories } from 'src/store/categories'
import styles from './AddTransactionModalContent.module.scss'

interface Props {
    onClose: () => void
    setError: (error: string) => void
}

export const AddTransactionModalContent: FC<Props> = ({
    onClose,
    setError,
}) => {
    const [label, setLabel] = useState('')
    const [amount, setAmount] = useState('')
    const [categoryId, setCategoryId] = useState('')

    const categories: Category[] = useAppSelector(selectFilteredCategories)

    const dispatch = useAppDispatch()

    const onSave = () => {
        if (label.trim().length === 0) {
            setError('Label is required')
            return
        }
        if (categoryId.trim().length === 0) {
            setError('Category is required')
            return
        }
        if (Number.isNaN(parseFloat(amount))) {
            setError('Amount is required and should be a number')
            return
        }

        onClose()

        dispatch(
            addTransaction({
                amount: parseFloat(amount),
                categoryId,
                date: moment().toDate(),
                id: generateId(),
                label,
            })
        )
    }

    return (
        <div>
            <div className={styles.title}>Add Transaction</div>

            <div className={styles.section}>
                <TextField
                    fullWidth
                    label="Label"
                    onChange={(e) => setLabel(e.target.value)}
                    value={label}
                    variant="outlined"
                />
            </div>
            <div className={styles.section}>
                <TextField
                    fullWidth
                    label="Amount"
                    onChange={(e) => setAmount(e.target.value)}
                    type="number"
                    value={amount}
                    variant="outlined"
                />
            </div>
            <div className={styles.section}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">
                        Category
                    </InputLabel>
                    <Select
                        fullWidth
                        label="Category"
                        labelId="demo-simple-select-outlined-label"
                        onChange={(e) =>
                            setCategoryId(e.target.value as string)
                        }
                        value={categoryId}
                    >
                        {categories.map((category: Category) => (
                            <MenuItem key={category.id} value={category.id}>
                                {category.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>

            <div className={styles.footer}>
                <div className={styles.button}>
                    <Button
                        color="secondary"
                        onClick={onClose}
                        size="large"
                        variant="contained"
                    >
                        Cancel
                    </Button>
                </div>
                <div className={styles.button}>
                    <Button
                        color="primary"
                        onClick={onSave}
                        size="large"
                        variant="contained"
                    >
                        Save
                    </Button>
                </div>
            </div>
        </div>
    )
}
