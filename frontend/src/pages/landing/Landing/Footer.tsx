import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from "../../../assets/img/logo-white.svg?react";

const Footer = () => {
  return (
    <footer className="py-5 bg-dark">
      <Container>
        <Row className="mb-4">
          <Col xs={12} lg={4}>
            <div className="mb-3">
              <Logo style={{ width: "24px", height: "24px" }} />
            </div>
            <p className="text-white-50">
              A professional package that comes with hundreds of UI components,
              forms, tables, charts, dashboards, pages and svg icons.
            </p>
          </Col>
          <Col
            xs={12}
            md={4}
            lg={{ span: 2, offset: 2 }}
            className="mb-3 mb-md-0"
          >
            <h4 className="text-light fs-5">Company</h4>
            <ul className="list-unstyled ps-0 mb-0 mt-3">
              <li className="mt-2">
                <Link to="/" className="text-white-50">
                  About Us
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/" className="text-white-50">
                  Diversity &amp; inclusion
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/" className="text-white-50">
                  Blog
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/" className="text-white-50">
                  Careers
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={4} lg={2} className="mb-3 mb-md-0">
            <h4 className="text-light fs-5">Resources</h4>
            <ul className="list-unstyled ps-0 mb-0 mt-3">
              <li className="mt-2">
                <Link to="/" className="text-white-50">
                  Community
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/" className="text-white-50">
                  Terms of service
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/" className="text-white-50">
                  Report a vulnerability
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/" className="text-white-50">
                  Brand kit
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={4} lg={2} className="mb-3 mb-md-0">
            <h4 className="text-light fs-5">Legals</h4>
            <ul className="list-unstyled ps-0 mb-0 mt-3">
              <li className="mt-2">
                <Link to="/" className="text-white-50">
                  Refund policy
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/" className="text-white-50">
                  Terms &amp; conditions
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/" className="text-white-50">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <p className="text-white-50 mt-4 text-center mb-0">
              © 2024 AppStack
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
