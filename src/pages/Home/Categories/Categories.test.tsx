import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import Categories from './Categories';

jest.mock('../../../data', () => ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __esModule: true,
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
      <Categories />
    </Provider>
  );
  expect(screen.getByText('Categories')).toBeInTheDocument();
});
