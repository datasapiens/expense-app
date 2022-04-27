import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { homeRoutes, graphRoutes } from 'routes/index';
import { Homepage } from 'pages/Homepage';
import { GraphPage } from 'pages/GraphPage';
import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path={homeRoutes.path} element={<Homepage />} />
          <Route path={graphRoutes.path} element={<GraphPage />} />
        </Routes>
      </Router>
    </div>
  );
};
