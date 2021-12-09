import React from "react";
import { Transaction, Category } from "../../components";

const Index: React.FC = () => {
  return (
    <div className="page">
      <Transaction />
      <hr />
      <Category />
    </div>
  );
};

export default Index;
