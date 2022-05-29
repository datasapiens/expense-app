import { AppBar, Tab, Tabs } from '@material-ui/core'
import { ChangeEvent, FC, useState } from 'react'
import { TabPanel } from 'src/components/TabPanel'
import { ExpensePerCategory } from './ExpensePerCategory'
import styles from './Graphs.module.scss'
import { IncomeExpense } from './IncomeExpense'
import { IncomePerCategory } from './IncomePerCategory'

const Graphs: FC = () => {
    const [tabIndex, setTabIndex] = useState(0)

    const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
        setTabIndex(newValue)
    }

    return (
        <div className={styles.graphs}>
            <AppBar position="sticky">
                <div className={styles.appBar}>
                    <span className={styles.title}>Graphs</span>
                </div>
                <Tabs onChange={handleChange} value={tabIndex}>
                    <Tab label="Income/Expense" />
                    <Tab label="Income Per Category" />
                    <Tab label="Expense Per Category" />
                </Tabs>
            </AppBar>

            <div className={styles.main}>
                <TabPanel index={0} value={tabIndex}>
                    <IncomeExpense />
                </TabPanel>
                <TabPanel index={1} value={tabIndex}>
                    <IncomePerCategory />
                </TabPanel>
                <TabPanel index={2} value={tabIndex}>
                    <ExpensePerCategory />
                </TabPanel>
            </div>
        </div>
    )
}

export default Graphs
