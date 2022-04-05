import React from "react";
import styles from "./Home.module.scss";
import { CategoriesList } from "../../redux/features/categories/Categories";
import { AddItem } from "../../redux/features/items/AddItem";
import {ItemList} from "../../redux/features/items/Items";


function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <ItemList />
      </div>
      <div className={styles.categories}>
        <CategoriesList />
        <AddItem />
      </div>
    </div>
  );
}

export default Home;
