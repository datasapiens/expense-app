import { render, screen } from '@testing-library/react';
import Graphs from './Graphs';

it('should render', () => {
  render(<Graphs />);
  expect(screen.getByText('Graphs')).toBeInTheDocument();
});
