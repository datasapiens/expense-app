import { useStore } from '../../app/store'
import DataTable, { TableStyles, TableColumn } from 'react-data-table-component'
import { Transaction } from '../../features/expenseTrackerSlice'

export function TransactionTable() {
  const { transactions, categoryDictionary } = useStore()

  const customStyles: TableStyles = {
    rows: {
      style: {
        fontSize: '1.5rem',
      },
    },
    headCells: {
      style: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
      },
    },
  }

  const columns: TableColumn<Transaction>[] = [
    {
      name: 'Label',
      selector: (row) => row.label,
      sortable: true,
    },
    {
      name: 'Date',
      id: 'date',
      selector: (row) => row.date,
      format: (row) => new Intl.DateTimeFormat().format(new Date(row.date)),
      sortable: true,
    },
    {
      name: 'Category',
      selector: (row) => row.category,
      sortable: true,
      format: (row) => categoryDictionary[row.category],
    },
    {
      name: 'Amount',
      id: 'amount',
      selector: (row) => row.amount,
      sortable: true,
      format: (row) =>
        new Intl.NumberFormat('cs-CZ', {
          localeMatcher: 'best fit',
          style: 'currency',
          currency: 'EUR',
          currencyDisplay: 'narrowSymbol',
          signDisplay: 'exceptZero',
        }).format(row.amount),
      right: true,
      conditionalCellStyles: [
        {
          when: (row) => row.amount > 0,
          style: {
            color: 'green',
          },
        },
      ],
    },
  ]

  return (
    <DataTable
      columns={columns}
      data={transactions}
      customStyles={customStyles}
      pagination
      highlightOnHover={true}
      defaultSortFieldId={'date'}
      defaultSortAsc={false}
    />
  )
}
