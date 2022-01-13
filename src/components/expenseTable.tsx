import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import storageService from "../service/storageService";

export default function ExpenseTable(props: any) {
  const { transactions, updateTransactions } = props;

  const deleteTransaction = (id: number) => {
    let getItem = storageService.getItem("transactions") || "[]";
    let getItemArray = JSON.parse(getItem);
    let itemIndex = getItemArray?.findIndex((x: { id: number }) => x.id === id);
    getItemArray.splice(itemIndex, 1);
    updateTransactions(getItemArray);
  };

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="fw-bold">Transaction Name</TableCell>
            <TableCell className="fw-bold" align="right">
              Category
            </TableCell>
            <TableCell className="fw-bold" align="right">
              Transaction Type
            </TableCell>
            <TableCell className="fw-bold" align="right">
              Transaction Amount
            </TableCell>
            <TableCell className="fw-bold" align="right">
              Date Time
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.label}
              </TableCell>
              <TableCell align="right">{row.category?.label}</TableCell>
              <TableCell align="right">{row.transactionType}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    deleteTransaction(row.id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
