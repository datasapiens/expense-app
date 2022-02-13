import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import { Footer, Header, Home } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
