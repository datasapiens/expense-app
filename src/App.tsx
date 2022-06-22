import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TransactionsPage from './pages/TransactionsPage/TransactionsPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';

function App() {

  const baseUrl = process.env.PUBLIC_URL;

  return (
    <BrowserRouter basename={baseUrl}>
      <Routes>
        <Route path='/' element={<TransactionsPage />} />
        <Route path='/dash' element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
