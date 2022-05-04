import { FC, useState } from 'react';
import { TransactionCard, Modal, Button } from '../../components';
import { AddTransactionForm } from '../../common';
import { ITransaction } from '../../types/transaction';
import './index.scss';
import useToggle from '../../hooks/useToggle';

interface BudgetCardProps {
  budgetId: string;
  label: string;
  transactions: ITransaction[];
}

const BudgetCard: FC<BudgetCardProps> = ({ budgetId, label, transactions }) => {
  const [showTransactions, setShowTransactions] = useState(false);
  const [isOpen, toggle] = useToggle();

  return (
    <div className="card">
      <div className="card__header">
        <h2 className="card__title">{label}</h2>
        <Button label="Add transaction" onClick={toggle} mode="light" />
      </div>
      <div className="transactions">
        {showTransactions &&
          transactions.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))}
      </div>
      <a
        className="card__link"
        href="#"
        onClick={() => setShowTransactions(!showTransactions)}
      >
        {showTransactions ? 'Hide Transactions' : 'Show transactions'}
      </a>
      <Modal isOpen={isOpen} close={toggle} header="Add transaction">
        <AddTransactionForm budgetId={budgetId} toggle={toggle} />
      </Modal>
    </div>
  );
};

export default BudgetCard;
