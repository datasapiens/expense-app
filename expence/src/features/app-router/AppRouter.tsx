import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { RouteNames } from "../../app/routes";
import { RouteObject } from "react-router";
import TransactionsPage from "../transactions-page/TransactionsPage";
import Charts from "../charts/Charts";

const AppRouter = () => {
  const publicRoutes: RouteObject = {
    path: "/",
    children: [
      {
        path: "",
        element: <Navigate to={RouteNames.TRANSACTIONS} />,
      },
      {
        path: RouteNames.TRANSACTIONS,
        element: <TransactionsPage />,
      },
      {
        path: RouteNames.CHARTS,
        element: <Charts />,
      },
    ],
  };

  const routing = useRoutes([publicRoutes]);
  return <>{routing}</>;
};

export default AppRouter;
