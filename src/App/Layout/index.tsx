import { FC } from 'react'
import { Outlet } from 'react-router-dom'
// TODO:
const Layout: FC = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default Layout
