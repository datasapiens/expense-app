import React from 'react';
import AppRouter from './app/app-router/AppRouter';
import Navbar from './features/navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
}

export default App;
