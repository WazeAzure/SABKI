import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from "react-router-dom";

import "./Navbar.css";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" className="nav">
      <Container>
        <Navbar.Brand href="/">SABKI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="link">Home</Link>
            <Link to="/survey" className="link">Survey</Link>
            <Link to="/panduan" className="link">Panduan</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;