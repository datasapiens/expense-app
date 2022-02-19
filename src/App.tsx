import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
          <Route path='/' element={<Dashboard />} />
          <Route path='graphs' element={<Graphs />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
