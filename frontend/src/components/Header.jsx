import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '..//Styles/Navbar.scss'

function Header() {
    return (
        <header className="bg-dark text-center text-lg-start">
            <Navbar expand="lg" className="custom-navbar" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className="navbar-brand">
                <span className="brand-icon">⚡</span>
                React-Bootstrap
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-nav me-auto">
                    <Nav.Link href="#home" className="nav-link">
                    <span className="nav-icon">🏠</span>
                    Home
                    </Nav.Link>
                    <Nav.Link href="#link" className="nav-link">
                    <span className="nav-icon">🔗</span>
                    Link
                    </Nav.Link>
                </Nav>
                
                <Nav className="navbar-nav navbar-nav-secondary">
                    <Nav.Link href="#login" className="nav-link">
                    Login
                    </Nav.Link>
                    <Nav.Link href="#signup" className="nav-link nav-link-cta">
                    Sign Up
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    );
}
export default Header;