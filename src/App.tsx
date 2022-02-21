import React, { FC, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/home';
import PageLayout from './layout';
import { Incoming, Outgoing, Balance } from './components/graphs';

import './layout.scss';

const App: FC = () => {
  return (
    <div className='App'>
      <PageLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/graphs' element={<Balance />} />
          <Route path='/graphs/incoming' element={<Incoming />} />
          <Route path='/graphs/outgoing' element={<Outgoing />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </PageLayout>
    </div>
  );
};

export default App;
