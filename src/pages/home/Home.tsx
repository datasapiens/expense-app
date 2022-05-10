import React from "react";
import Container from "../../components/container/Container";
import Card from "../../components/card/Card";
import styles from "./Home.module.scss";
import TransactionForm from "../../components/transactions/transaction-form/TransactionForm";
import CategoryForm from "../../components/categories/category-form/CategoryForm";
import CategoryList from "../../components/categories/category-list/CategoryList";
import TransactionList from "../../components/transactions/transaction-list/TransactionList";

const Home: React.FC = () => {
  return (
    <Container>
      <React.Fragment>
        <div className={styles.transationCategoryWrapper}>
          <div className={styles.transactionForm}>
            <Card>
              <TransactionForm />
            </Card>
            <Card>
              <TransactionList />
            </Card>
          </div>
          <div className={styles.categorySection}>
            <Card>
              <CategoryForm />
            </Card>
            <Card>
              <CategoryList />
            </Card>
          </div>
        </div>
      </React.Fragment>
    </Container>
  );
};

export default Home;
