import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MainMenu(): React.ReactElement {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">EFA e-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/find-product" className="nav-link">Products Catalog</Link>
            <Link to="/about" className="nav-link">About us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
