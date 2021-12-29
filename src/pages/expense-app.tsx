// outsource dependencies
import React, { memo, useEffect } from 'react';
import { useController } from 'redux-saga-controller';
import { Route, Routes, Navigate } from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';


// local dependencies
import { history } from '../constants';
import { controller } from './controller';

import { Home } from './home/home';
import { Graphs } from './graphs/graphs';
import { BoxLoader } from '../components/preloader';
import { MainLayout } from '../components/layout/main-layout';


export const ExpenseApp = memo(function ExpenseApp () {
  const [
    { initialized },
    { initialize }
  ] = useController(controller);

  useEffect(() => {
    initialize()
  }, [initialize]);

  if (!initialized ) { return <BoxLoader active={true} />; }

  return (<>
    <Router history={history}>
      <MainLayout>
        <Routes>
          <Route path="/graphs" element={<Graphs />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </MainLayout>
    </Router>
  </>);
});
