import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import AddSampleTransactions from './AddSampleTransactions';

const dispatchSpy = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => dispatchSpy,
  useSelector: () => [
    {
      id: 'xyz',
      color: '#111111',
      label: 'Label#1'
    }
  ]
}));

it('should be able to dispatch on form submit', async () => {
  render(<AddSampleTransactions />);

  fireEvent.click(screen.getByRole('button', { name: 'Load' }));

  await waitFor(() => {
    expect(dispatchSpy).toHaveBeenCalled();
  });
});
