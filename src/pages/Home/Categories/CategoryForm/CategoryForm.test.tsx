import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import CategoryForm from './CategoryForm';

const dispatchSpy = jest.fn();
jest.mock('react-redux', () => ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __esModule: true,
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
