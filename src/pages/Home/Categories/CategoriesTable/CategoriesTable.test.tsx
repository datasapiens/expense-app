import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../store';
import CategoriesTable from './CategoriesTable';

// always click 'yes' on confirm windows
window.confirm = jest.fn(() => true);

jest.mock('../../../../data', () => ({
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

it('should be able to delete a category', () => {
  render(
    <Provider store={store}>
      <CategoriesTable />
    </Provider>
  );

  fireEvent.click(screen.getByRole('button', { name: 'Delete Cat#1' }));
  expect(screen.queryByText('Cat#1')).not.toBeInTheDocument();
});
