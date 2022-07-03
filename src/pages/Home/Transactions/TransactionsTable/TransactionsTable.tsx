import { useSelector } from 'react-redux';
import DataTable, {
  TableStyles,
  TableColumn
} from 'react-data-table-component';
import Transaction from '../../../../types/transaction';
import {
  selectCategoriesDictionary,
  selectAllTransactions
} from '../../../../store';
import styles from './TransactionsTable.module.scss';

const customStyles: TableStyles = {
  rows: {
    style: {
      fontSize: '1rem'
    }
  },
  headCells: {
    style: {
      fontSize: '1rem',
      fontWeight: 500
    }
  }
};

const TransactionsTable = () => {
  const data = useSelector(selectAllTransactions);
  const categoriesDictionary = useSelector(selectCategoriesDictionary);

  const columns: TableColumn<Transaction>[] = [
    {
      name: 'Label',
      selector: row => row.label,
      sortable: true
    },
    {
      name: 'Date',
      id: 'date',
      selector: row => row.date,
      sortable: true,
      format: row =>
        new Date(row.date)
          .toLocaleDateString('de-DE', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          })
          .replaceAll('.', '-')
    },
    {
      name: 'Category',
      selector: row => row.categoryId,
      sortable: true,
      format: row => categoriesDictionary[row.categoryId]?.label
    },
    {
      name: 'Amount',
      id: 'amount',
      selector: row => row.amount,
      sortable: true,
      format: row =>
        new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'EUR'
        }).format(row.amount),
      right: true,
      conditionalCellStyles: [
        {
          when: row => row.amount > 0,
          style: {
            color: '#198754'
          }
        },
        {
          when: row => row.amount < 0,
          style: {
            color: '#dc3545'
          }
        }
      ]
    }
  ];

  return (
    <div className={styles.transactionsTable}>
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        pagination
        defaultSortFieldId={'date'}
      />
    </div>
  );
};

export default TransactionsTable;
