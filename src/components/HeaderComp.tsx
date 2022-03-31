import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderComp = () => {
  return (
    <Header>
      <nav className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/graphs">Graphs</Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default HeaderComp;

const Header = styled.header`
  nav {
    display: flex;
    justify-content: flex-end;
    ul {
      list-style: none;
      display: flex;
      gap: 1rem;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
`;
