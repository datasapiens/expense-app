import React from 'react'
import { Route, Routes as RouterRoutes } from 'react-router-dom'
import Home from '../features/Home'
import Graphs from '../features/Graphs'

/**
 * Renders routes
 */
const Routes = () => (
  <RouterRoutes>
    <Route index element={<Home />} />
    <Route path='/graphs' element={<Graphs />} />
  </RouterRoutes>
)

export default Routes
