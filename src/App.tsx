import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Graph from './pages/Graph/Graph';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="graph" element={<Graph />} />
      </Routes>
    </Layout>
  );
}

export default App;
