import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../store';
import TransactionsTable from './TransactionsTable';

it('should render empty message', () => {
  render(
    <Provider store={store}>
      <TransactionsTable />
    </Provider>
  );
  expect(
    screen.getByText('There are no records to display')
  ).toBeInTheDocument();
});
