import { render, screen } from '@testing-library/react';
import Home from './Home';

it('should render', () => {
  render(<Home />);
  expect(screen.getByText('Transactions')).toBeInTheDocument();
  expect(screen.getByText('Categories')).toBeInTheDocument();
});
