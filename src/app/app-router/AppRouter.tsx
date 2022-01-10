import React, { FC } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { RouteNames } from '../routes';
import { RouteObject } from 'react-router';

const Charts = React.lazy(() => import('../../features/charts/Charts'));
const TransactionsPage = React.lazy(() => import('../../features/transactions/transactions-page/TransactionsPage'));

const AppRouter: FC = () => {
  const publicRoutes: RouteObject = {
    path: '/',
    children: [
      {
        path: '',
        element: <Navigate to={RouteNames.TRANSACTIONS} />,
      },
      {
        path: RouteNames.TRANSACTIONS,
        element: (
          <React.Suspense fallback={<>...</>}>
            <TransactionsPage />
          </React.Suspense>
        ),
      },
      {
        path: RouteNames.CHARTS,
        element: (
          <React.Suspense fallback={<>...</>}>
            <Charts />
          </React.Suspense>
        ),
      },
    ],
  };

  const routing = useRoutes([publicRoutes]);
  return <>{routing}</>;
};

export default AppRouter;
