import * as React from 'react';
import { useInjectReducer } from 'utils/redux-injectors';
import DeafultLayout from 'app/layouts/DefaultLayout';
import Transactions from './compoenents/Transactions';
import { reducer, sliceKey } from './slice';

export function HomePage() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  return (
    <DeafultLayout>
      <h1>My HomePage</h1>
      <Transactions />
    </DeafultLayout>
  );
}
