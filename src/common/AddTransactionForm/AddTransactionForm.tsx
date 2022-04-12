import React, { FC, useState } from 'react';
import { Button, Input } from '../../components';
import useActions from '../../hooks/useTypedDispatch';
import { v4 as uuidv4 } from 'uuid';
import { ITransaction } from '../../types/transaction';
import './index.scss';

interface AddTransactionFormProps {
  toggle: () => void;
  budgetId: string;
}

const AddTransactionForm: FC<AddTransactionFormProps> = ({
  budgetId,
  toggle,
}) => {
  const [transaction, setTransaction] = useState({
    label: '',
    date: new Date(Date.now()).toDateString(),
    amount: 0,
    category: budgetId,
  });

  const { addTransaction } = useActions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const trc = {
        ...transaction,
        id: uuidv4(),
      };
      addTransaction(trc);
    } catch (err) {
      throw err;
    }
    toggle();
  };

  return (
    <form className="badget-form" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="label"
        required
        placeholder="Transaction name"
        value={transaction.label}
        onChange={handleChange}
      />
      <Input
        type="number"
        name="amount"
        required
        placeholder="Amount"
        value={transaction.amount}
        onChange={handleChange}
      />
      <Button label="create" type="submit" onClick={handleSubmit} />
    </form>
  );
};

export default AddTransactionForm;
