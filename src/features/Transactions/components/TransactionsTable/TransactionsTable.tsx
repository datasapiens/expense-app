import * as React from 'react'
import { FC } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { type TransactionsTableProps } from './types'

/**
 * Renders the transactions table
 */
const TransactionsTable: FC<TransactionsTableProps> = ({ rows = [], headers = [] }) => {
  /**
   * Aggregate row totals
   */
  const total = rows.reduce((accumulator, object) => {
    return accumulator + +object.amount
  }, 0)

  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table' size='small'>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell>{row.label}</TableCell>
              <TableCell>
                {new Date(row.date).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.amount}</TableCell>
            </TableRow>
          ))}
          {total !== 0 && (
            <TableRow>
              <TableCell colSpan={4}>Total</TableCell>
              <TableCell>{total}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TransactionsTable
