import * as React from 'react'
import { FC } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { type CategoriesTableProps } from './types'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from '@mui/material'
import { useAppDispatch } from '../../../../store'
import { removeCategoryAction } from '../../../../store/reducers/categories.reducer'

/**
 * Renders the categories table
 */
const CategoriesTable: FC<CategoriesTableProps> = ({ rows = [], headers = [] }) => {
  const dispatch = useAppDispatch()

  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table' size='small'>
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header}>{header}</TableCell>
            ))}
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell>{row.label}</TableCell>
              <TableCell align='right'>
                <IconButton
                  onClick={() => dispatch(removeCategoryAction(row.id))}
                  aria-label='delete'
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CategoriesTable
