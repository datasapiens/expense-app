import { render, screen } from '@testing-library/react';
import FormControlLabel from './FormControlLabel';

it('should render', () => {
  render(<FormControlLabel>Label</FormControlLabel>);
  expect(screen.getByText('Label')).toBeInTheDocument();
});
