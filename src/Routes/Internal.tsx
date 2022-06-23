import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Categories } from '../Pages/Categories'
import { Graph } from '../Pages/Graph'

export const Internal = () => 

    <Routes>
        <Route path={'/'} element={<Categories/>}></Route>
        <Route path={'/graph'} element={<Graph/>}></Route>
    </Routes>
