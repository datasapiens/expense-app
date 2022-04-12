import React, { FC, useState } from 'react';
import { Button, Input } from '../../components';
import useActions from '../../hooks/useTypedDispatch';
import { v4 as uuidv4 } from 'uuid';
import './index.scss';

interface AddBadgetFormProps {
  toggle: () => void;
}

const AddBadgetForm: FC<AddBadgetFormProps> = ({ toggle }) => {
  const [badgetName, setBadgetName] = useState('');

  const { addBudget } = useActions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBadgetName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const budget = {
        id: uuidv4(),
        label: badgetName,
      };
      addBudget(budget);
    } catch (err) {
      throw err;
    }

    setBadgetName('');
    toggle();
  };

  return (
    <form className="badget-form" onSubmit={handleSubmit}>
      <Input
        type="text"
        required
        placeholder="Badget"
        value={badgetName}
        onChange={handleChange}
      />
      <Button label="create" type="submit" />
    </form>
  );
};

export default AddBadgetForm;
