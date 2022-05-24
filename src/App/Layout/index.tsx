import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

// TODO:
const Layout: FC = () => {
    return (
        <div className="layout">
            <Sidebar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout
