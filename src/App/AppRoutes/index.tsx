import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { GRAPHS_ROUTE, HOME_ROUTE, INDEX_ROUTE } from 'src/constants/routes'
import Graphs from 'src/views/Graphs'
import Home from 'src/views/Home'
import Layout from 'src/App/Layout'

const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route element={<Layout />} path={INDEX_ROUTE}>
                <Route element={<Home />} path={HOME_ROUTE} />
                <Route element={<Graphs />} path={GRAPHS_ROUTE} />
            </Route>
        </Routes>
    )
}

export default AppRoutes
