// Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css'; // Import the CSS file for Navbar styles

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" className="animated-link">Home</Nav.Link>
          <Nav.Link href="/about" className="animated-link">About</Nav.Link>
          <Nav.Link href="/contact" className="animated-link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
