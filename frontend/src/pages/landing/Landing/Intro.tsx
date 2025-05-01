import React from "react";

import { Badge, Col, Container, Row } from "react-bootstrap";

import screenshotMixed from "../../../assets/img/screenshots/mixed.jpg";

const Intro = () => (
  <section className="landing-intro bg-dark pt-5 pt-lg-6 pb-5 pb-lg-7">
    <Container className="landing-intro-content">
      <Row className="align-items-center">
        <Col lg={5} className="mx-auto">
          <Badge bg="" className="badge-subtle-primary p-1">
            Free Trial
          </Badge>

          <h1 className="my-4 text-white">
            AppStack is the perfect Admin Template{" "}
            <span className="text-primary">for your next project</span>
          </h1>

          <p className="text-lg text-white-50">
            A professional package that comes with hundreds of UI components,
            forms, tables, charts, dashboards, pages and svg icons.
          </p>

          <div className="my-4">
            <div className="d-inline-block me-3">
              <h2 className="text-white">500+</h2>
              <span className="text-white-50">UI Components</span>
            </div>
            <div className="d-inline-block me-3">
              <h2 className="text-white">1500+</h2>
              <span className="text-white-50">SVG Icons</span>
            </div>
            <div className="d-inline-block">
              <h2 className="text-white">75+</h2>
              <span className="text-white-50">Pages</span>
            </div>
          </div>
          <div className="my-4">
            <a
              href="https://themes.getbootstrap.com/product/appstack-react-admin-dashboard-template/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-pill btn-lg"
            >
              Get Started
            </a>
          </div>
        </Col>
        <Col lg={7} className="d-none d-lg-flex mx-auto text-center">
          <div className="landing-intro-screenshot pb-3">
            <img
              src={screenshotMixed}
              alt="Dark/Light Bootstrap React Admin Template"
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Intro;
