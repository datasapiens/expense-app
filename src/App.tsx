import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Modal from "react-modal";
import Graphs from "./pages/Graph";

Modal.setAppElement("#root");

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graphs" element={<Graphs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
