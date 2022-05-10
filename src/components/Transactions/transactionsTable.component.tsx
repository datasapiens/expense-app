import React, { useMemo } from "react";
import { useAppSelector } from "store";
import { categorySelector } from "store/slices/category.slice";
import { transactionSeletor } from "store/slices/transaction.slice";
import AddTransaction from "./AddTransaction";

const TransactionsTable = () => {
  const allTransactions = useAppSelector(transactionSeletor);
  const categories = useAppSelector(categorySelector);

  const transaction = useMemo(() => {
    const total =
      allTransactions.length > 0
        ? allTransactions.map((t) => Number(t.amount))?.reduce((a, b) => a + b)
        : 0;
    const transactions = allTransactions.map((transaction) => ({
      ...transaction,
      category: categories.find(
        (category) => category.id === transaction.categoryId
      ),
    }));
    return { transactions, total };
  }, [allTransactions, categories]);

  return (
    <div>
      <AddTransaction />

      <h2>Transactions</h2>
      {transaction.transactions?.length > 0 ? (
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
            {transaction.transactions?.map((transaction, i) => (
              <tr key={i}>
                <td>{transaction?.label}</td>
                <td>{transaction.date}</td>
                <td>{transaction.category?.label}</td>
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
              <td style={{ fontWeight: "bold" }}>{transaction.total}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div>
          <p>You have no transactions! Add a transaction to view record</p>
        </div>
      )}
    </div>
  );
};

export default TransactionsTable;
