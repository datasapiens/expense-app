import React, { FC, useEffect } from "react";
import styles from "./home.module.scss";
import Header from "../../components/header/Header";
import Category from "../../components/category/Category";
import Transaction from "../../components/transactions/Transaction";
import { useSelector } from "react-redux";
import { mockCategories } from "../../helpers/mockCategories";
import { LocalStorageManager } from "../../helpers/localStorageManager";
import { getCategories } from "../../store/selectors";

const HomePage: FC = () => {
  const categories = useSelector(getCategories);

  useEffect(() => {
    if (!categories.length) {
      LocalStorageManager.setItem("categories", mockCategories);
    }
  }, [categories.length]);

  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <Transaction />
        <Category />
      </div>
    </>
  );
};

export default HomePage;
