import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import Home from './Home';

jest.mock('../../data', () => ({
  CATEGORIES: [
    {
      id: 'CAT_1',
      label: 'Cat#1',
      color: '#123123'
    }
  ],
  DEFAULT_CATEGORY: {
    id: 'OTHERS',
    label: 'Others'
  }
}));

it('should render', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  expect(screen.getByText('Transactions')).toBeInTheDocument();
  expect(screen.getByText('Categories')).toBeInTheDocument();
});
