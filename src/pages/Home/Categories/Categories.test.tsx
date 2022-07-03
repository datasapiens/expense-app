import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import Categories from './Categories';

it('should render', () => {
  render(
    <Provider store={store}>
      <Categories />
    </Provider>
  );
  expect(screen.getByText('Categories')).toBeInTheDocument();
});
