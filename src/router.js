import React from "react";
import { render } from "react-dom";
import { Routes, Route } from "react-router-dom";
import { Expense } from "./components/expense";
import { Graphs } from "./components/graphs";
import { CoreLayout } from "./layout/coreLayout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<CoreLayout />}>
        <Route exact path="/" element={<Expense />} />
        <Route exact path="/graphs" element={<Graphs />} />
      </Route>
    </Routes>
  );
};
