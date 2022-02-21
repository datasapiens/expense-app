import React, { FC, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/home';
import PageLayout from './layout';
import { Incoming, Outgoing, Balance } from './components/graphs';

import './layout.scss';
export const app_URL: string = '/expense-app';

const App: FC = () => {
  return (
    <div className='App'>
      <PageLayout>
        <Routes>
          <Route path={app_URL} element={<Home />} />
          <Route path={`${app_URL}/graphs`} element={<Balance />} />
          <Route path={`${app_URL}/graphs/incoming`} element={<Incoming />} />
          <Route path={`${app_URL}/graphs/outgoing`} element={<Outgoing />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </PageLayout>
    </div>
  );
};

export default App;
