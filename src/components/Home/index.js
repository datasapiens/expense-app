import React from "react";
import Categories from "./Categories";
import Expenses from "./Expenses";
import SubHeader from "./SubHeader";

const Home = () => {
  return (
    <>
      <SubHeader />
      <Categories />
      <Expenses />
    </>
  );
};

export default Home;
