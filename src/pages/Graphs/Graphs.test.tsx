import { render, screen } from '@testing-library/react';
import Graphs from './Graphs';

it('should render', () => {
  render(<Graphs />);
  expect(screen.getByText('Pie Chart')).toBeInTheDocument();
  expect(screen.getByText('Multitype Chart')).toBeInTheDocument();
});
