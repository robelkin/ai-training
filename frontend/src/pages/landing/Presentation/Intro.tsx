import React from "react";

import {
  Badge,
  Col,
  Container,
  Row,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";

import screenshotMixed from "../../../assets/img/screenshots/mixed.jpg";
import brandJavaScript from "../../../assets/img/brands/javascript.svg";
import brandTypeScript from "../../../assets/img/brands/typescript.svg";

const Intro = () => (
  <section className="landing-intro pt-5 pt-lg-6 pb-5 pb-lg-7">
    <Container className="landing-intro-content">
      <Row className="align-items-center">
        <Col lg={5} className="mx-auto">
          <Badge bg="" className="badge-subtle-primary p-1">
            v4.0.1
          </Badge>

          <div className="my-4">
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>Available for JavaScript</Tooltip>}
            >
              <img
                width="40"
                height="40"
                src={brandJavaScript}
                alt="JavaScript"
                className="d-inline-block me-2"
              />
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>Available for TypeScript</Tooltip>}
            >
              <img
                width="40"
                height="40"
                src={brandTypeScript}
                alt="TypeScript"
                className="d-inline-block"
              />
            </OverlayTrigger>
          </div>

          <h1 className="my-4">
            Fully-featured Dashboard Template based on{" "}
            <span className="text-primary">React & Bootstrap 5</span>
          </h1>

          <p className="text-lg">
            A professional package that comes with hundreds of UI components,
            forms, tables, charts, dashboards, pages and svg icons.
          </p>

          <div className="my-4">
            <div className="d-inline-block me-3">
              <h2 className="text-dark">500+</h2>
              <span className="text-muted">UI Components</span>
            </div>
            <div className="d-inline-block me-3">
              <h2 className="text-dark">1500+</h2>
              <span className="text-muted">SVG Icons</span>
            </div>
            <div className="d-inline-block">
              <h2 className="text-dark">75+</h2>
              <span className="text-muted">Pages</span>
            </div>
          </div>
          <div className="my-4">
            <a href="#demos" className="btn btn-primary btn-pill btn-lg me-2">
              Live Demo
            </a>
            <a
              href="https://themes.getbootstrap.com/product/appstack-react-admin-dashboard-template/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary btn-pill btn-lg me-1"
            >
              Purchase
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
