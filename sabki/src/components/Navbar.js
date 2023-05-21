import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link, NavLink } from "react-router-dom";

import "./Navbar.css";

function Navigation() {
  return (
    <>
    <Navbar expand="lg" className="nav">
      <Container>
        <Navbar.Brand href="/">SABKI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink exact className={(navData) => navData.isActive ? "is-active link" : "link"} to='/'>Home</NavLink>
            <NavLink exact className={(navData) => navData.isActive ? "is-active link" : "link"} to='/survey'>Survey</NavLink>
            <NavLink exact className={(navData) => navData.isActive ? "is-active link" : "link"} to='/panduan'>Panduan</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </>
    
  );
}

export default Navigation;