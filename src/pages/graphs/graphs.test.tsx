
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Graphs } from './graphs';

test('renders learn react link', () => {
  render(<Graphs />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
