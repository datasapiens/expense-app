import { Routes, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Graphs from './pages/Graphs/Graphs';

const App = (): JSX.Element => {
  return (
    <Container>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="graphs" element={<Graphs />} />
      </Routes>
    </Container>
  );
};

export default App;
