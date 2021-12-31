
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ExpenseApp } from './expense-app';

test('renders learn react link', () => {
  render(<ExpenseApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
