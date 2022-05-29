import { FC, useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { useAppDispatch } from 'src/store/hooks'
import { addCategory } from 'src/store/categories'
import styles from './AddCategoryModalContent.module.scss'

interface Props {
    onClose: () => void
    setError: (error: string) => void
}

export const AddCategoryModalContent: FC<Props> = ({ onClose, setError }) => {
    const [label, setLabel] = useState('')

    const dispatch = useAppDispatch()

    const onSave = () => {
        if (label.trim().length === 0) {
            setError('Label is required')
            return
        }

        onClose()

        dispatch(addCategory(label))
    }

    return (
        <div>
            <div className={styles.title}>Add Category</div>

            <div className={styles.section}>
                <TextField
                    fullWidth
                    label="Label"
                    onChange={(e) => setLabel(e.target.value)}
                    value={label}
                    variant="outlined"
                />
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
