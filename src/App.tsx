import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { store } from './store';
import Home from './pages/Home/Home';
import Graphs from './pages/Graphs/Graphs';
import Container from './components/Container/Container';
import Nav from './components/Nav/Nav';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Container>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graphs" element={<Graphs />} />
        </Routes>
      </Container>
    </Provider>
  );
};

export default App;
