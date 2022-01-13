import React from "react";
import { Outlet } from "react-router-dom";
import { Expense } from "../components/expense";
import { Header } from "./header";

interface iCorelayout {
  className?: string;
}
export const CoreLayout: React.FC<iCorelayout> = () => (
  <>
    <Header />
    <Outlet />
  </>
);
