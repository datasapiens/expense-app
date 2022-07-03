import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import MultitypeChart from './MultitypeChart';

it('should render', () => {
  render(
    <Provider store={store}>
      <MultitypeChart />
    </Provider>
  );
  expect(screen.getByText('Multitype Chart')).toBeInTheDocument();
});
