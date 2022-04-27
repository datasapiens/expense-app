import { AddTransactionForm } from 'modules/Transaction/AddTransactionForm';
import { CategorySection } from 'modules/Category/CategorySection';
import { TransactionItem } from 'modules/Transaction/TransactionItem';
import { selectCategory, selectTransaction } from 'store/selectors';
import { useSelector } from 'hooks/useSelector';
import { EmptyListIcon } from 'assets/scss/icons/EmptyListIcon';
import { AppLayout } from 'components/layouts/AppLayout';
import './Homepage.scss';

export const Homepage: React.FC = () => {
  const category = useSelector(selectCategory);
  const transaction = useSelector(selectTransaction);

  const transactions = transaction.transactions.allIds.map(
    (id) => transaction.transactions.byId[id],
  );

  const categories = category.allIds.map((id) => category.byId[id]);

  return (
    <AppLayout className="homepage">
      <div className="homepage__content">
        <div className="homepage__forms">
          <AddTransactionForm categories={categories} />

          <CategorySection categories={categories} />
        </div>

        <div className="homepage__transactions">
          {transaction.transactions.allIds.length ? (
            <>
              {transactions
                .slice(0)
                .reverse()
                .map((transaction) => (
                  <TransactionItem
                    key={transaction.id}
                    transaction={transaction}
                  />
                ))}
            </>
          ) : (
            <div className="homepage__transactions--empty">
              <EmptyListIcon />
              <p>You don&apos;t have any transactions. </p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};
