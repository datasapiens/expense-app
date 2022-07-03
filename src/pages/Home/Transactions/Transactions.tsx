import Card from '../../../components/Card/Card';
import TransactionForm from './TransactionForm/TransactionForm';
import TransactionsTable from './TransactionsTable/TransactionsTable';

const Transactions = (): JSX.Element => {
  return (
    <Card header="Transactions">
      <TransactionsTable />
      <TransactionForm />
    </Card>
  );
};

export default Transactions;
