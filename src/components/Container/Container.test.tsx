import { render, screen } from '@testing-library/react';
import Container from './Container';

it('should render', () => {
  render(<Container data-testid="container">Container Content</Container>);
  expect(screen.getByTestId('container')).toBeInTheDocument();
});
