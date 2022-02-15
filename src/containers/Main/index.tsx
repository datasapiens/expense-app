import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddCategoriesForm from "../../components/AddCategoriesForm";
import AddTransactionsForm from "../../components/AddTransactionsForm";
import CategoriesList from "../../components/CategoriesList";
import TransactionsTable from "../../components/TransactionsTable";
import { Category } from "../../models";
import {
  requestAddCategory,
  requestAddTransaction,
  requestDeleteCategory,
} from "../../state/actions";
import "./styles.scss";

const Main = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector(
    (state: any) => state.categories.categories
  );
  const activeCategories = useSelector((state: any) =>
    state.categories.categories.filter(
      (category: Category) => !category.deleteDate
    )
  );
  const transactions = useSelector(
    (state: any) => state.transactions.transactions
  );

  const submitTransactionsForm = (formValues: any) => {
    console.log(formValues);
    dispatch(requestAddTransaction(formValues));
  };

  const submitCategoriesForm = (formValues: any) => {
    console.log(formValues);
    dispatch(requestAddCategory(formValues));
  };

  const deleteCategory = (category: Category) => {
    dispatch(requestDeleteCategory(category));
  };

  return (
    <div className="mainContainer">
      <AddCategoriesForm onSubmit={submitCategoriesForm} />
      <CategoriesList categories={activeCategories} onDelete={deleteCategory} />
      <AddTransactionsForm
        categories={activeCategories}
        onSubmit={submitTransactionsForm}
      />
      <TransactionsTable
        categories={allCategories}
        transactions={transactions}
      />
    </div>
  );
};

export default Main;
