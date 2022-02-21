import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Graph from './Graph';
const App:React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/graph" element={<Graph/>}/>
      </Routes>
  );
}

export default App;