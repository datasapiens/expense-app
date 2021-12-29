import React from 'react';
import HomePage from "./components/HomePage";
import Graph from "./components/Graph";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button } from '@mui/material';

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Button
            onClick={() => navigate('/')}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Go to Home
          </Button>
          <Button
            onClick={() => navigate('/graph')}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Go to Graph
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/graph" element={<Graph />}></Route>
      </Routes>
    </div>
  );
}

export default App;
