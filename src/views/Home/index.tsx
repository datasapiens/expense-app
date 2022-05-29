import React, { FC, ReactNode, useState } from 'react'
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
    const [value, setValue] = useState(0)
    const [error, setError] = useState('')

    const a11yProps = (index: number) => {
        return {
            'aria-controls': `simple-tabpanel-${index}`,
            id: `simple-tab-${index}`,
        }
    }

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue)
    }

    return (
        <div className={styles.home}>
            <AppBar position="sticky">
                <div className={styles.appBar}>
                    <span className={styles.title}>Home</span>
                </div>
                <Tabs
                    aria-label="simple tabs example"
                    onChange={handleChange}
                    value={value}
                >
                    <Tab label="Transactions" {...a11yProps(0)} />
                    <Tab label="Categories" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel index={0} value={value}>
                <Transactions
                    setError={setError}
                    setModalContent={setModalContent}
                />
            </TabPanel>
            <TabPanel index={1} value={value}>
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
