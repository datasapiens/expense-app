import { HashRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "components/Navbar/Navbar";
import { Home } from "containers/Home/Home";
import { Graphs } from "containers/Graphs/Graphs";

export const App = () => (
  <HashRouter>
    <Navbar
      links={[
        {
          to: "/",
          children: "Home",
        },
        {
          to: "/graphs",
          children: "Graphs",
        },
      ]}
    />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/graphs" element={<Graphs />} />
    </Routes>
  </HashRouter>
);
