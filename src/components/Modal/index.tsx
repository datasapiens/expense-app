import React, { FC, ReactNode } from 'react'
import MuiModal from '@material-ui/core/Modal'
import styles from './Modal.module.scss'

interface Props {
    content: ReactNode
    isOpen: boolean
    onClose: () => void
}

export const Modal: FC<Props> = ({ isOpen, onClose, content }) => {
    return (
        <div>
            <MuiModal
                aria-describedby="simple-modal-description"
                aria-labelledby="simple-modal-title"
                onClose={onClose}
                open={isOpen}
            >
                <div className={styles.paper}>{content}</div>
            </MuiModal>
        </div>
    )
}
