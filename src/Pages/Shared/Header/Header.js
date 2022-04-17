import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <>
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              Travel With Me
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="home#services">Sercvices</Nav.Link>
                <Nav.Link as={Link} to="blogs">
                  Blogs
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="about">
                  About me
                </Nav.Link>
                <Nav.Link as={Link} to="signin">
                  SignIn
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </header>
  );
};

export default Header;
