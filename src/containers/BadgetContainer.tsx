import React from 'react';
import { BudgetCard, AddBadgetForm, RemoveBadgetForm } from '../common';
import { Modal, Button } from '../components';
import useTypedSelector from '../hooks/useTypedSelector';
import { filterByField } from '../utils/helpers';
import { ITransaction } from '../types/transaction';
import useToggle from '../hooks/useToggle';
import './index.scss';

const BadgetContainer = () => {
  const { budgets } = useTypedSelector((store) => store.budgets);
  const { transactions } = useTypedSelector((store) => store.transactions);
  const [isOpen, toggle] = useToggle();
  const [isOpen2, toggle2] = useToggle(); // maybe fix

  return (
    <div className="container">
      <Button label="Add badget" onClick={toggle2} />
      <Button
        label="Remove badget"
        onClick={toggle}
        style={{ marginLeft: '2rem' }}
      />
      <div className="cards">
        {budgets.map(({ id, label }) => (
          <BudgetCard
            key={id}
            budgetId={id}
            label={label}
            transactions={filterByField<ITransaction, 'category'>(
              id,
              'category',
              transactions
            )}
          />
        ))}
      </div>
      <Modal isOpen={isOpen} close={toggle} header="Remove budgets">
        <RemoveBadgetForm
          toggle={toggle}
          budgets={budgets}
          transactions={transactions}
        />
      </Modal>
      <Modal isOpen={isOpen2} close={toggle2} header="Add budget">
        <AddBadgetForm toggle={toggle2} />
      </Modal>
    </div>
  );
};

export default BadgetContainer;
