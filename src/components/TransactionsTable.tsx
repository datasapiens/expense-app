import React, { useMemo } from "react";
import { useAppSelector } from "store";
import { transactionSeletor } from "store/slices/transaction.slice";
import styled from "styled-components";
import AddTransaction from "./AddTransaction";

const TransactionsTable = () => {
  const transactions = useAppSelector(transactionSeletor);

  const total = useMemo(() => {
    return transactions.length > 0
      ? transactions.map((t) => Number(t.amount))?.reduce((a, b) => a + b)
      : 0;
  }, [transactions]);

  return (
    <Wrapper>
      <AddTransaction />

      <h2>Transactions</h2>
      {transactions.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Label</th>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions?.map((transaction, i) => (
              <tr key={i}>
                <td>{transaction?.label}</td>
                <td>{transaction.date}</td>
                <td>{transaction.category}</td>
                <td
                  style={{
                    color: transaction.amount.toString().includes("-")
                      ? "red"
                      : "inherit",
                  }}
                >
                  {transaction?.amount}
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td style={{ fontWeight: "bold" }}>Total</td>
              <td style={{ fontWeight: "bold" }}>{total}</td>
            </tr>
          </tbody>
        </table>
      )}
    </Wrapper>
  );
};

export default TransactionsTable;

const Wrapper = styled.div``;
