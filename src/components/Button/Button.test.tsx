import { render, screen } from '@testing-library/react';
import Button from './Button';

jest.mock('clsx');

it('should render', () => {
  render(<Button>Button</Button>);
  expect(screen.getByText('Button')).toBeInTheDocument();
});
