import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import styles from './Layout.module.scss'

const Layout: FC = () => {
    return (
        <div className={styles.layout}>
            <Sidebar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
