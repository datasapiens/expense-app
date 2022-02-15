import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTransactionsForm from "../../components/AddTransactionsForm";
import TransactionsTable from "../../components/TransactionsTable";
import { requestAddTransaction } from "../../state/actions";
import "./styles.scss";

const Main = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: any) => state.categories.categories);
  const transactions = useSelector((state: any) => state.transactions.transactions);

  const submitForm = (formValues: any) => {
    console.log(formValues);
    dispatch(requestAddTransaction(formValues));
  };

  return (
    <div className="mainContainer">
      <p>Main</p>
      <AddTransactionsForm categories={categories} onSubmit={submitForm} />
      <TransactionsTable transactions={transactions} />
    </div>
  );
};

export default Main;
