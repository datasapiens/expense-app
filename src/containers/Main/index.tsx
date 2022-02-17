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
import Alerts from "../Alerts";
import styles from "./Main.module.scss";

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
    dispatch(requestAddTransaction(formValues));
  };

  const submitCategoriesForm = (formValues: any) => {
    dispatch(requestAddCategory(formValues));
  };

  const deleteCategory = (category: Category) => {
    dispatch(requestDeleteCategory(category));
  };

  return (
    <div className={styles.mainContainer}>
      <Alerts />
      <div className={styles.mainContainerForms}>
        <div className={styles.categoriesFormWrapper}>
          <AddCategoriesForm onSubmit={submitCategoriesForm} />
        </div>
        <div className={styles.transactionsFormWrapper}>
          <AddTransactionsForm
            categories={activeCategories}
            onSubmit={submitTransactionsForm}
          />
        </div>
      </div>

      <div className={styles.mainContainerLists}>
        <div className={styles.categoriesListWrapper}>
          <CategoriesList
            categories={activeCategories}
            onDelete={deleteCategory}
          />
        </div>
        <div className={styles.transactionsListWrapper}>
          <TransactionsTable
            categories={allCategories}
            transactions={transactions}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
