import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "../../components/categories/categories.actions";
import CategoriesList from "../../components/categories/CategoriesList/CategoriesList";
import CategoryForm from "../../components/categories/CategoryForm/CategoryForm";
import Button from "../../components/shared/Button/Button";
import Card from "../../components/shared/Card/Card";
import Layout from "../../components/shared/Layout/Layout"
import TransactionForm from "../../components/transactions/TransactionForm/TransactionForm";
import { getTransactions } from "../../components/transactions/transactions.actions";
import TransactionsTable from "../../components/transactions/TransactionsTable/TransactionsTable";
import { InitialState } from "../../redux/initial-state.model";
import './TransactionsPage.scss'

const TransactionsPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: InitialState) => state.categoriesState?.categories);
  const transactions = useSelector((state: InitialState) => state.transactionState?.transactions);

  const [showTransactionForm, setShowTransactionForm] = useState(false);
  const [showCategoryForm, setShowCategoryForm] = useState(false);

  const buttonWrapperClassName = 'button-wrapper';
  const transactionsClassName = 'transactions-page';
  const pageHeaderClassName = 'page-header';

  useEffect(() => {
    if (categories && !categories.length) {
      dispatch(getCategories());
    }
  }, [categories, dispatch])

  useEffect(() => {
    dispatch(getTransactions())
  }, [dispatch])


  const createNewTransaction = () => {
    setShowTransactionForm(true);
  }

  const createNewCategory = () => {
    setShowCategoryForm(true);
  }

  const ExpensesCardTitle = <div style={{ display: 'flex' }}>
    <span className="primary bold">Expenses</span>
    <i style={{ paddingLeft: '6px' }} className="fa-solid fa-money-bill-trend-up primary"></i>
  </div>

  const CategoriesCardTitle = <div style={{ display: 'flex' }}>
    <span className="secondary bold">Categories</span>
    <i style={{ paddingLeft: '6px' }} className="fa-solid fa-list-ul secondary"></i>
  </div>

  return (
    <Layout>
      <div className={pageHeaderClassName}>
        <h1>Budget Planner</h1>
        <p>
          Welcome to your budget planner. You can use the <span className="primary bold">Expenses</span>
          <i style={{ padding: '0 3px' }} className="fa-solid fa-money-bill-trend-up primary"></i> function to log your transactions.
          Use the <span className="secondary bold">Categories</span><i style={{ padding: '0 3px 0 4px' }} className="fa-solid fa-list-ul secondary"></i> 
          function to manage the categories of your transactions.
        </p>
        <p>Check the <Link to='/dash'>Dashboard</Link> page to see the estatistics of your transactions.</p>
      </div>
      <div className={transactionsClassName}>
        <Card Title={ExpensesCardTitle}>
          {
            transactions && categories && transactions.length ? (
              <TransactionsTable categories={categories} transactions={transactions} />
            ) : (
              <p>No transactions registered yet.</p>
            )
          }
          {!showTransactionForm &&
            <div className={buttonWrapperClassName}>
              <Button text="Register New Transaction" fullWidth onClickHandler={createNewTransaction} />
            </div>
          }
          {showTransactionForm &&
            <TransactionForm setShowForm={setShowTransactionForm} />
          }
        </Card>
        <Card Title={CategoriesCardTitle}>
          {categories &&
            categories.length ? (
            <CategoriesList categories={categories} />
          ) : (
            <p>No categories registered yet.</p>
          )
          }
          {!showCategoryForm &&
            <div className={buttonWrapperClassName}>
              <Button buttonStyle={'secondary'} text="Register New Category" fullWidth onClickHandler={createNewCategory} />
            </div>
          }
          {showCategoryForm &&
            <CategoryForm setShowForm={setShowCategoryForm} />
          }
        </Card>
      </div>
    </Layout>
  )
}

export default TransactionsPage;