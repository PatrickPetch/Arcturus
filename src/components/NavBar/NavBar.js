import React from 'react'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'

function NavBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">SEDS-NTU</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <NavDropdown title="Project" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#new-dawn">New Dawn</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#astrobiology">Astrobiology</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#events">Events</Nav.Link>
                        <Nav.Link href="#team">Team</Nav.Link>
                        <Nav.Link href="#join-is">Join Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
