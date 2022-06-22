import { Category, Transaction } from "../../../redux/initial-state.model";
import { findCategoryById } from "../../categories/category.helper";
import './TransactionsTable.scss';

const TransactionsTable = ({ transactions, categories }: { transactions: Transaction[], categories: Category[] }) => {
  const tableRowClassName = 'table-row';
  const tableClassName = 'table';
  const tableCellClassName = 'table-cell';
  const tableHeadClassName = 'table-head';

  const formatToCurrency = (amount: number) => {
    return `${amount < 0 ? '-' : ''}$ ${Math.abs(amount).toFixed(2)}`
  }

  return (
    <div className={tableClassName}>
      <div className={`${tableRowClassName} ${tableHeadClassName}`}>
        <div className={tableCellClassName}>
          Label
        </div>
        <div className={tableCellClassName}>
          Category
        </div>
        <div className={tableCellClassName}>
          Amount
        </div>
        <div className={tableCellClassName}>
          Date
        </div>
      </div>
      {
        transactions.map((transaction: Transaction) => (
          <div key={`transaciton-table-row-${transaction.transaction_id}`} className={tableRowClassName}>
            <div className={tableCellClassName}>
              {transaction.label}
            </div>
            <div className={tableCellClassName}>
              <span style={{ color: findCategoryById(categories, transaction.category_id)?.color }}>
                {findCategoryById(categories, transaction.category_id)?.label}
              </span>
            </div>
            <div className={tableCellClassName} style={{ color: transaction.amount < 0 ? 'red' : 'green' }}>
              {formatToCurrency(transaction.amount)}
            </div>
            <div className={tableCellClassName}>
              {transaction.date.toLocaleDateString()}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default TransactionsTable;