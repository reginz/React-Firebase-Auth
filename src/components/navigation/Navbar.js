import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

function Navigation() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container>
          <Navbar.Brand href="/home">aratolia</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-between"
          >
            <Nav className="me-auto">
              <Nav.Link href="https://blog.brieferr.com/" target="_blank">
                Blog
              </Nav.Link>
              <Nav.Link href="/pricing">Pricing</Nav.Link>
              <Nav.Link
                href="https://zapier.com/apps/brieferr/integrations"
                target="_blank"
              >
                Integrations
              </Nav.Link>
              <Nav.Link href="/about-us">About</Nav.Link>
              <NavDropdown title="Use Cases" id="basic-nav-dropdown">
                <NavDropdown.Item href="/use-cases/for-enterprises">
                  For Enterprises
                </NavDropdown.Item>
                <NavDropdown.Item href="/use-cases/for-founders">
                  For Founders
                </NavDropdown.Item>
                <NavDropdown.Item href="/use-cases/for-developers">
                  For Developers
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="nav-right">
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
