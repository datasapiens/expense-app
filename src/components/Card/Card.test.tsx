import { render, screen } from '@testing-library/react';
import Card from './Card';

it('should render', () => {
  render(<Card>Card Content</Card>);
  expect(screen.getByText('Card Content')).toBeInTheDocument();
});

it('should render with header', () => {
  render(<Card header="Card Header">Card Content</Card>);
  expect(screen.getByText('Card Content')).toBeInTheDocument();
  expect(screen.getByText('Card Header')).toBeInTheDocument();
});
