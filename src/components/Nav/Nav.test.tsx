import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Nav from './Nav';

it('should render', () => {
  render(
    <MemoryRouter>
      <Nav data-testid="nav" />
    </MemoryRouter>
  );

  expect(screen.getByText('Home')).toHaveAttribute('aria-current');
});

it('should navigate', () => {
  render(
    <MemoryRouter>
      <Nav data-testid="nav" />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByText('Graphs'));
  expect(screen.getByText('Graphs')).toHaveAttribute('aria-current');
});
