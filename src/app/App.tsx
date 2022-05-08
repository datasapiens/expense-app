import { Route, Routes } from "react-router-dom";
import { Home } from "views/Home";
import { Info } from "views/Info";
import "styles/global.scss";

export const App = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="/info" element={<Info />} />
    <Route path="*" element={<Home />} />
  </Routes>
);
