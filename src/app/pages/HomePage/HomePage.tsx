import * as React from 'react';
import DeafultLayout from 'app/layouts/DefaultLayout';
import Transactions from './compoenents/Transactions';

export function HomePage() {
  return (
    <DeafultLayout>
      <h1>My HomePage</h1>
      <Transactions />
    </DeafultLayout>
  );
}
