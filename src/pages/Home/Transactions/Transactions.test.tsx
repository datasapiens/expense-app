import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import Transactions from './Transactions';

it('should render', () => {
  render(
    <Provider store={store}>
      <Transactions />
    </Provider>
  );
  expect(screen.getByText('Transactions')).toBeInTheDocument();
});
