import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
function Navigation(props) {
  return (
    <div className="pb-4">
      <Navbar collapseOnSelect expand="lg"  variant="light">
        <Container>
          <Navbar.Brand href="#home">Arotolia</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/signup">Sign Up</Nav.Link>
              <Nav.Link href="/login">Log In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
