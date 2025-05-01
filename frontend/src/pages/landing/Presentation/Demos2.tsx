import React from "react";
import { Link } from "react-router-dom";

import { Badge, Col, Container, Row } from "react-bootstrap";

import screenshotDashboardDefault from "../../../assets/img/screenshots/dashboard-default.jpg";
import screenshotDashboardAnalytics from "../../../assets/img/screenshots/dashboard-analytics.jpg";
import screenshotDashboardSaaS from "../../../assets/img/screenshots/dashboard-saas.jpg";
import screenshotDashboardSocial from "../../../assets/img/screenshots/dashboard-social.jpg";
import screenshotDashboardCrypto from "../../../assets/img/screenshots/dashboard-crypto.jpg";
import screenshotLanding from "../../../assets/img/screenshots/landing.jpg";

const Demos2 = () => (
  <section className="py-6 bg-white" id="demos">
    <Container className="position-relative z-3">
      <Row>
        <Col md={12} className="mx-auto text-center">
          <Row>
            <Col lg={10} xl={9} className="mx-auto">
              <div className="mb-4">
                <span className="text-uppercase text-primary text-sm fw-medium mb-1 d-block">
                  Demos
                </span>
                <h2 className="h1 mb-3">Multiple dashboards &amp; pages</h2>
                <p className="text-muted fs-lg">
                  5 Dashboards and 40+ Pages featuring various components,
                  giving you the freedom of choosing and combining. All
                  components can take variation in color and styling, that can
                  easily be modified using Sass.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="py-3">
              <Link
                className="d-block mb-3 mx-1"
                target="_blank"
                rel="noreferrer"
                to="/dashboard/default"
              >
                <img
                  src={screenshotDashboardDefault}
                  className="img-fluid rounded-3 landing-img"
                  alt="Bootstrap 5 Dashboard Theme"
                />
              </Link>
              <h4>Default Dashboard</h4>
            </Col>
            <Col md={4} className="py-3">
              <Link
                className="d-block mb-3 mx-1"
                target="_blank"
                rel="noreferrer"
                to="/dashboard/analytics"
              >
                <img
                  src={screenshotDashboardAnalytics}
                  className="img-fluid rounded-3 landing-img"
                  alt="Analytics Bootstrap 5 Dashboard Theme"
                />
              </Link>
              <h4>Analytics Dashboard</h4>
            </Col>
            <Col md={4} className="py-3">
              <Link
                className="d-block mb-3 mx-1"
                target="_blank"
                rel="noreferrer"
                to="/dashboard/saas"
              >
                <img
                  src={screenshotDashboardSaaS}
                  className="img-fluid rounded-3 landing-img"
                  alt="SaaS Bootstrap 5 Dashboard Theme"
                />
              </Link>
              <h4>SaaS Dashboard</h4>
            </Col>
            <Col md={4} className="py-3">
              <Link
                className="d-block mb-3 mx-1"
                target="_blank"
                rel="noreferrer"
                to="/dashboard/social"
              >
                <img
                  src={screenshotDashboardSocial}
                  className="img-fluid rounded-3 landing-img"
                  alt="Social Bootstrap 5 Dashboard Theme"
                />
              </Link>
              <h4>Social Dashboard</h4>
            </Col>
            <Col md={4} className="py-3">
              <Link
                className="d-block mb-3 mx-1"
                target="_blank"
                rel="noreferrer"
                to="/dashboard/crypto"
              >
                <img
                  src={screenshotDashboardCrypto}
                  className="img-fluid rounded-3 landing-img"
                  alt="Crypto Bootstrap 5 Dashboard Theme"
                />
              </Link>
              <h4>
                Crypto Dashboard{" "}
                <sup>
                  <Badge as="small" bg="" className="badge-subtle-primary">
                    Updated
                  </Badge>
                </sup>
              </h4>
            </Col>
            <Col md={4} className="py-3">
              <Link
                className="d-block mb-3 mx-1"
                target="_blank"
                rel="noreferrer"
                to="/landing"
              >
                <img
                  src={screenshotLanding}
                  className="img-fluid rounded-3 landing-img"
                  alt="Landing Page Bootstrap 5 Dashboard Theme"
                />
              </Link>
              <h4>
                Landing Page{" "}
                <sup>
                  <Badge as="small" bg="" className="badge-subtle-primary">
                    New
                  </Badge>
                </sup>
              </h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Demos2;
