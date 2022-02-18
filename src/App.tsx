import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Dashboard from './components/Dashboard';
import Graphs from './components/Graphs';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Container maxWidth='lg' style={{ padding: '50px 20px' }}>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='graphs' element={<Graphs />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
