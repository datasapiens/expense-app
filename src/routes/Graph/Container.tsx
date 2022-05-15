import React from 'react';
import GraphPage from './page/Graph';

import { selectTransactions } from '../../store/selectors/transactions';
import { selectCategories } from '../../store/selectors/categories';
import { useAppSelector } from '../../app/hooks';

const Container = () => {
  return (
    <GraphPage
      categories={useAppSelector(selectCategories)}
      transactions={useAppSelector(selectTransactions)}
    />
  );
};

Container.displayName = 'routes/Graph/Container';

export default Container;
