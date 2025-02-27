import React from 'react';
import {Navbar,Nav, Container} from 'react-bootstrap'
function Navigation(props) {
    return (
        <div className='only-mobile'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Arotolia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Library</Nav.Link>
                        <Nav.Link href="/patients">Patients</Nav.Link>
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;