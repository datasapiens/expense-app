import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Home';
import Visualize from './visualize';

const App: React.FC = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visualize" element={<Visualize />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
