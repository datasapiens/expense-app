import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";

interface iHeader {
  className?: string;
}

export const Header: React.FC<iHeader> = () => {
  return (
    <div>
      <Navbar color="dark" dark expand="md" light>
        <NavbarBrand tag={Link} to="/">
          Expense Tracker
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/graphs">
                Graphs
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Proof of Concept</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};
