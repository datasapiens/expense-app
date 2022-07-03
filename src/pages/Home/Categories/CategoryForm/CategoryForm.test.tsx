import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import CategoryForm from './CategoryForm';

const dispatchSpy = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => dispatchSpy
}));

it('should be able to dispatch on form submit', async () => {
  render(<CategoryForm />);

  fireEvent.change(screen.getByRole('textbox', { name: 'Label' }), {
    target: {
      value: 'Mock Category'
    }
  });

  fireEvent.click(screen.getByRole('button', { name: 'Save' }));

  await waitFor(() => {
    expect(dispatchSpy).toHaveBeenCalled();
  });
});
