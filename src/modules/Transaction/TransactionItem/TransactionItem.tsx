import React from 'react';
import cn from 'classnames';
import { Transaction } from 'types/Transaction';
import './TransactionItem.scss';

type TransactionItemProps = {
  transaction: Transaction;
};

export const TransactionItem: React.FC<TransactionItemProps> = ({
  transaction,
}) => {
  const date = Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(transaction.date));

  const moneyTransformer = transaction.amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const isExpense = transaction.amount < 0;
  const isIncome = transaction.amount > 0;

  return (
    <article
      className={cn('transaction', {
        transaction__expense: isExpense,
        transaction__income: isIncome,
      })}
    >
      <div className="transaction__info">
        <h3 className="transaction__label">{transaction.label}</h3>
        <p className="transaction__date">{date}</p>
      </div>
      <p className="transaction__amount">{moneyTransformer}</p>
    </article>
  );
};
