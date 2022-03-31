import CategoryTable from "components/CategoryTable";
import TransactionsTable from "components/TransactionsTable";
import React from "react";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Wrapper className="container">
      <h1>Welcome Guest</h1>

      <div className="split">
        <div className="split-transaction">
          <TransactionsTable />
        </div>
        <div className="split-category">
          <CategoryTable />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  .split {
    gap: 1rem;
    @media screen and (min-width: 768px) {
      display: flex;
    }
    &-transaction {
      flex: 1;
    }
    &-category {
      @media screen and (min-width: 768px) {
        width: 40%;
      }
    }
  }
`;
