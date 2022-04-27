import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'hooks/useDispatch';
import type { Category } from 'types/Category';
import { Transaction } from 'types/Transaction';
import { addTransaction } from 'store/transaction/actions';
import './AddTransactionForm.scss';
import { Button } from 'components/UI/Button';
import { Input } from 'components/UI/Input';
import { Select } from 'components/UI/Select';

type AddTransactionFormProps = {
  categories: Category[];
};

export const AddTransactionForm: React.FC<AddTransactionFormProps> = ({
  categories,
}) => {
  const dispatch = useDispatch();
  const labelInputRef = useRef<HTMLInputElement>(null);

  const defaultNewTransaction: Transaction = {
    id: '',
    amount: 0,
    category: '',
    date: new Date().toISOString(),
    label: '',
  };

  const [newTransaction, setNewTransaction] = React.useState<Transaction>(
    defaultNewTransaction,
  );

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    if (name === 'amount') {
      setNewTransaction({ ...newTransaction, amount: +value });
      return;
    }

    setNewTransaction({ ...newTransaction, [name]: value });
  };

  useEffect(() => {
    if (newTransaction.id) {
      dispatch(addTransaction(newTransaction));
      setNewTransaction(defaultNewTransaction);
    }
  }, [newTransaction]);

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    setNewTransaction({
      ...newTransaction,
      id: Math.random().toString(),
    });

    labelInputRef.current?.focus();
  };

  return (
    <form className="add-transaction" onSubmit={onSubmit}>
      <h3 className="add-transaction__title">Add Transaction</h3>

      <Select
        name="category"
        className="add-transaction__category"
        onChange={onInputChange}
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.label}
          </option>
        ))}
      </Select>

      <Input
        required
        className="add-transaction__label"
        onChange={onInputChange}
        type="text"
        inputRef={labelInputRef}
        value={newTransaction.label}
        name="label"
        placeholder="Label"
      />

      <Input
        type="number"
        onChange={onInputChange}
        value={newTransaction.amount === 0 ? '' : newTransaction.amount}
        required
        name="amount"
        placeholder="Amount"
      />

      <Button type="submit">Add</Button>
    </form>
  );
};
