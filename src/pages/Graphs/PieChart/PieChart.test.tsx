import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import PieChart from './PieChart';

it('should render', () => {
  render(
    <Provider store={store}>
      <PieChart />
    </Provider>
  );
  expect(screen.getByText('Pie Chart')).toBeInTheDocument();
});
