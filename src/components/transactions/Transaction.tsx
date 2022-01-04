import React, { FC, ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Transaction as TransactionType,
  Category as CategoryType,
} from "../../store/types";
import { setTransactionAction } from "../../store/actions";
import { v4 as uuidv4 } from "uuid";
import styles from "./transaction.module.scss";
import { getCategories, getTransactions } from "../../store/selectors";

const DEFAULT = "Category";

const defaultTransactionData = {
  label: "",
  amount: 0,
  category: {
    id: "",
    label: "",
    color: "",
  },
};

const Transaction: FC = () => {
  const dispatch = useDispatch();

  const transactions = useSelector(getTransactions);
  const categories = useSelector(getCategories);

  const [transactionData, setTransactionData] = useState(
    defaultTransactionData
  );

  const [categoryBtnLabel, setCategory] = useState(DEFAULT);

  const AddTransactionHandler = (e: FormEvent) => {
    e.preventDefault();
    if (
      transactionData.label &&
      transactionData.amount &&
      transactionData.category.label
    ) {
      dispatch(
        setTransactionAction({
          id: uuidv4(),
          ...transactionData,
          date: new Date().toLocaleDateString("en-US"),
        })
      );
      setTransactionData(defaultTransactionData);
    }
  };

  return (
    <>
      <h4 className="heading-4">Transactions</h4>
      {transactions.length ? (
        <table className={`${styles.transactionsTable} table`}>
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Label</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((item: TransactionType, idx: number) => (
              <tr key={item.id}>
                <th scope="row">{idx + 1}</th>
                <td>{item.label}</td>
                <td>{item.date.toLocaleString()}</td>
                <td>{item.amount}</td>
                <td>
                  <div
                    className={styles.categoryWrapper}
                    style={{ background: item.category.color }}
                  >
                    {item.category.label}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h5 className="heading-5 mt-3">No transactions yet</h5>
      )}
      <h4 className="heading-4">Add new transaction</h4>
      <form
        className="d-flex justify-content-between align-items-center"
        onSubmit={AddTransactionHandler}
      >
        <div className="mt-3">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Transaction label"
            value={transactionData.label}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTransactionData({
                ...transactionData,
                label: e.target.value,
              })
            }
          />
          <input
            type="number"
            className="form-control mb-2"
            placeholder="Transaction amount"
            value={transactionData.amount}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTransactionData({
                ...transactionData,
                amount: parseInt(e.target.value),
              })
            }
          />
          <div className={styles.btnContainer}>
            <div className="btn-group">
              <button
                type="button"
                className="form-control dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {categoryBtnLabel}
              </button>
              <ul className="dropdown-menu">
                {categories.map((category: CategoryType) => (
                  <li
                    className="dropdown-item"
                    key={category.id}
                    onClick={() => {
                      setTransactionData({
                        ...transactionData,
                        category,
                      });
                      setCategory(category.label);
                    }}
                  >
                    {category.label}
                  </li>
                ))}
              </ul>
            </div>
            <button className="btn btn-success" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Transaction;
