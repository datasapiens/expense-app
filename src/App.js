import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Graph, Header, Home } from "./components";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="expense-app/" element={<Home />} />
          <Route path="expense-app/graph/" element={<Graph />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
