import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MenuBar from './modules/MenuBar';
import PATHS from './constants/paths';
import HomePage from './routes/Home';
import GraphPage from './routes/Graph';

import './App.scss';

function App() {
  return (
    <>
      <MenuBar />
      <Routes>
        <Route path={PATHS.HOME} element={<HomePage />} />
        <Route path={PATHS.GRAPH} element={<GraphPage />} />
      </Routes>
    </>
  );
}

export default App;
