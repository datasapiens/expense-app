import React from 'react';
import { Routes, Route,  Navigate } from 'react-router-dom';
import { Container } from '@mui/material';
import Dashboard from './components/Dashboard';
import Graphs from './components/Graphs';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <Container maxWidth='lg' sx={{ padding: '50px 20px' }}>
        <Routes>
          <Route path='/expense-app/' element={<Dashboard />} />
          <Route path='/expense-app/graphs' element={<Graphs />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
