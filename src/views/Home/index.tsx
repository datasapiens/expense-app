import React, { FC, useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Add } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { TabPanel } from 'src/components/TabPanel'
import styles from './Home.module.scss'
import { Transactions } from './transactions'

const Home: FC = () => {
    const [value, setValue] = useState(0)

    const a11yProps = (index: number) => {
        return {
            'aria-controls': `simple-tabpanel-${index}`,
            id: `simple-tab-${index}`,
        }
    }

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue)
    }

    const onAddClick = () => {
        // TODO:
    }

    return (
        <div className={styles.home}>
            <AppBar position="sticky">
                <div className={styles.appBar}>
                    <span className={styles.title}>Home</span>

                    <IconButton
                        aria-label="delete"
                        color="default"
                        onClick={onAddClick}
                    >
                        <Add fontSize="large" style={{ color: 'white' }} />
                    </IconButton>
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
                <Transactions />
            </TabPanel>
            <TabPanel index={1} value={value}>
                Item Two
            </TabPanel>
        </div>
    )
}

export default Home
