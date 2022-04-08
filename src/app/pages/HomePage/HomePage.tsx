import * as React from 'react';
import i18next from 'i18next';
import { useInjectReducer } from 'utils/redux-injectors';
import DeafultLayout from 'app/layouts/DefaultLayout';
import Transactions from './compoenents/Transactions';
import { reducer, sliceKey } from './slice';

export function HomePage() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  return (
    <DeafultLayout>
      <h1>{i18next.t('MY_HOMPAGE')}</h1>
      <Transactions />
    </DeafultLayout>
  );
}
