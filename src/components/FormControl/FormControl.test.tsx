import { render, screen } from '@testing-library/react';
import FormControl from './FormControl';

jest.mock('clsx');

it('should render', () => {
  render(<FormControl>FormControl Content</FormControl>);
  expect(screen.getByText('FormControl Content')).toBeInTheDocument();
});
