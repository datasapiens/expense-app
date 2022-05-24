import React, { FC } from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListAltIcon from '@material-ui/icons/ListAlt'
import ShowChartIcon from '@material-ui/icons/ShowChart'
import { Link } from 'react-router-dom'
import { GRAPHS_ROUTE, HOME_ROUTE } from 'src/constants/routes'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
    return (
        <Drawer anchor="left" variant="permanent">
            <div className={styles.drawer}>
                <div className={styles.title}>Expense App</div>
                <Divider />
                <List>
                    <ListItem>
                        <Link className={styles.link} to={HOME_ROUTE}>
                            <ListItemIcon>
                                <ListAltIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link className={styles.link} to={GRAPHS_ROUTE}>
                            <ListItemIcon>
                                <ShowChartIcon />
                            </ListItemIcon>
                            <ListItemText primary="Graphs" />
                        </Link>
                    </ListItem>
                </List>
            </div>
        </Drawer>
    )
}

export default Sidebar
