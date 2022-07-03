import { render, screen } from '@testing-library/react';
import Input from './Input';

it('should render', () => {
  render(<Input name="name" />);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});
