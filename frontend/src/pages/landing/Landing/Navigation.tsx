import React from "react";

import { Button, Container, Nav, Navbar } from "react-bootstrap";

import Logo from "../../../assets/img/logo.svg?react";

const Navigation = () => (
  <Navbar expand="md" className="landing-navbar navbar-dark bg-dark">
    <Container>
      <Navbar.Brand className="landing-brand text-white" href="/">
        <Logo /> AppStack
      </Navbar.Brand>
      <Nav className="ms-auto" navbar>
        <Nav.Item>
          <Nav.Link href="#" active className="text-lg px-lg-3">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" active className="text-lg px-lg-3">
            Features
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" active className="text-lg px-lg-3">
            Pricing
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" active className="text-lg px-lg-3">
            FAQ
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" active className="text-lg px-lg-3">
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Button
        href="https://themes.getbootstrap.com/product/appstack-react-admin-dashboard-template/"
        target="_blank"
        rel="noopener noreferrer"
        variant="success"
        className="ms-2 btn-pill"
        size="lg"
      >
        Get Started
      </Button>
    </Container>
  </Navbar>
);

export default Navigation;
