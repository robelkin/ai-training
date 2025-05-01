import React from "react";

import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";

import Logo from "../../../assets/img/logo.svg?react";

const Navigation = () => (
  <Navbar expand="md" className="landing-navbar">
    <Container>
      <Navbar.Brand className="landing-brand" href="/">
        <Logo /> AppStack{" "}
        <Badge as="sup" bg="" className="badge-subtle-primary p-1">
          React
        </Badge>
      </Navbar.Brand>
      <Nav className="ms-auto" navbar>
        <Nav.Item className="d-none d-md-inline-block">
          <Nav.Link
            href="/dashboard/default"
            target="_blank"
            rel="noreferrer"
            active
            className="text-lg px-lg-3"
          >
            Live Preview
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/docs/introduction"
            target="_blank"
            rel="noreferrer"
            active
            className="text-lg px-lg-3"
          >
            Documentation
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="d-none d-md-inline-block">
          <Nav.Link
            href="mailto:support@bootlab.io"
            active
            className="text-lg px-lg-3"
          >
            Support
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
        Get AppStack
      </Button>
    </Container>
  </Navbar>
);

export default Navigation;
