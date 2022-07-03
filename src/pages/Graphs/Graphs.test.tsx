import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import Graphs from './Graphs';

it('should render', () => {
  render(
    <Provider store={store}>
      <Graphs />
    </Provider>
  );
  expect(screen.getByText('Pie Chart')).toBeInTheDocument();
  expect(screen.getByText('Multitype Chart')).toBeInTheDocument();
});
