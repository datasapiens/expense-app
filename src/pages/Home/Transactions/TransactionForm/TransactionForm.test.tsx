import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import TransactionForm from './TransactionForm';

const dispatchSpy = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => dispatchSpy,
  useSelector: () => [
    {
      id: 'xyz',
      color: '#446444',
      label: 'Category#1'
    }
  ]
}));

it('should be able to dispatch on form submit', async () => {
  render(<TransactionForm />);

  fireEvent.change(screen.getByRole('textbox', { name: 'Label' }), {
    target: {
      value: 'Mock Transaction'
    }
  });

  fireEvent.change(screen.getByRole('spinbutton', { name: 'Amount' }), {
    target: {
      value: '1000'
    }
  });

  fireEvent.change(screen.getByTestId('dateField'), {
    target: {
      value: '2021-05-05'
    }
  });

  fireEvent.change(screen.getByRole('combobox', { name: 'Category' }), {
    target: {
      value: 'xyz'
    }
  });

  fireEvent.click(screen.getByRole('button', { name: 'Save' }));

  await waitFor(() => {
    expect(dispatchSpy).toHaveBeenCalled();
  });
});
