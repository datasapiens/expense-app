import { FC } from 'react';
import { ITransaction } from '../../types/transaction';
import './index.scss';

interface TransactionCardProps {
  transaction: ITransaction;
}

const TransactionCard: FC<TransactionCardProps> = ({ transaction }) => {
  return <div className="transaction">{transaction.label}</div>;
};

export default TransactionCard;
