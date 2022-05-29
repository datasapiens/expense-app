import React, { FC } from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListAltIcon from '@material-ui/icons/ListAlt'
import ShowChartIcon from '@material-ui/icons/ShowChart'
import { Link, useLocation } from 'react-router-dom'
import { GRAPHS_ROUTE, HOME_ROUTE } from 'src/constants/routes'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
    const location = useLocation()

    return (
        <Drawer anchor="left" variant="permanent">
            <div className={styles.drawer}>
                <div className={styles.title}>Expense App</div>
                <Divider />
                <List>
                    <ListItem
                        className={
                            location.pathname.includes(HOME_ROUTE)
                                ? styles.active
                                : undefined
                        }
                    >
                        <Link className={styles.link} to={HOME_ROUTE}>
                            <ListItemIcon>
                                <ListAltIcon />
                            </ListItemIcon>
                            <span>Home</span>
                        </Link>
                    </ListItem>
                    <ListItem
                        className={
                            location.pathname.includes(GRAPHS_ROUTE)
                                ? styles.active
                                : undefined
                        }
                    >
                        <Link className={styles.link} to={GRAPHS_ROUTE}>
                            <ListItemIcon>
                                <ShowChartIcon />
                            </ListItemIcon>
                            <span>Graphs</span>
                        </Link>
                    </ListItem>
                </List>
            </div>
        </Drawer>
    )
}

export default Sidebar
