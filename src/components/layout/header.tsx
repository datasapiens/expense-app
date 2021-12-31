// outsource dependencies
import cn from 'classnames';
import React, { memo, useCallback, useState } from 'react';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

// local dependencies
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

interface IHeader {
  className?: string;
}

export const Header = memo<IHeader>(function Header ({ className }) {
  const [isHeaderCollapsed, setHeaderCollapsed] = useState(true);

  const handleToggleNavbar = useCallback(
    () => setHeaderCollapsed(!isHeaderCollapsed),
      [isHeaderCollapsed]
    );

  return (
    <header id="header" className={cn('header')}>
      <Navbar color="light" light={true} expand="lg" className="fixed-top" container={false}>
        <Container fluid="xl" className="d-flex justify-content-between">
          <NavbarBrand tag={Link} to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none">
            <img src={logo} className="header-logo" alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={handleToggleNavbar} />
          <Collapse isOpen={!isHeaderCollapsed} navbar={true}>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/graphs">
                  Graphs
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/notExistRoute">
                  Not Exist Route
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
});
