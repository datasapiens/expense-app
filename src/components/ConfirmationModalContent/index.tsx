import { FC } from 'react'
import { Button } from '@material-ui/core'
import styles from './ConfirmationModalContent.module.scss'

interface Props {
    onClose: () => void
    onConfirm: () => void
    title?: string
}

export const ConfirmationModalContent: FC<Props> = ({
    title = 'Are you sure?',
    onClose,
    onConfirm,
}) => {
    return (
        <div>
            <div className={styles.title}>{title}</div>

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
                        onClick={onConfirm}
                        size="large"
                        variant="contained"
                    >
                        Confirm
                    </Button>
                </div>
            </div>
        </div>
    )
}
