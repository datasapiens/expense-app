import React, { ChangeEvent, FC, ReactNode, useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Snackbar } from '@material-ui/core'
import { TabPanel } from 'src/components/TabPanel'
import { Modal } from 'src/components/Modal'
import styles from './Home.module.scss'
import { Transactions } from './Transactions'
import { Categories } from './Categories'

const Home: FC = () => {
    const [modalContent, setModalContent] = useState<ReactNode>(null)
    const [tabIndex, setTabIndex] = useState(0)
    const [error, setError] = useState('')

    const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
        setTabIndex(newValue)
    }

    return (
        <div className={styles.home}>
            <AppBar position="sticky">
                <div className={styles.appBar}>
                    <span className={styles.title}>Home</span>
                </div>
                <Tabs onChange={handleChange} value={tabIndex}>
                    <Tab label="Transactions" />
                    <Tab label="Categories" />
                </Tabs>
            </AppBar>
            <TabPanel index={0} value={tabIndex}>
                <Transactions
                    setError={setError}
                    setModalContent={setModalContent}
                />
            </TabPanel>
            <TabPanel index={1} value={tabIndex}>
                <Categories
                    setError={setError}
                    setModalContent={setModalContent}
                />
            </TabPanel>

            <Modal
                content={modalContent}
                isOpen={!!modalContent}
                onClose={() => setModalContent(null)}
            />

            <Snackbar
                anchorOrigin={{
                    horizontal: 'left',
                    vertical: 'bottom',
                }}
                autoHideDuration={6000}
                color="error"
                message={error}
                onClose={() => setError('')}
                open={!!error}
            />
        </div>
    )
}

export default Home
