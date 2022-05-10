import HeaderComp from "components/Header/header.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages";
import GraphsPage from "./pages/graphs";

const RouterComp = () => {
  return (
    <BrowserRouter>
      <HeaderComp />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/graphs" element={<GraphsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouterComp;
