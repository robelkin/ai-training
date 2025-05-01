import React from "react";
import { Link } from "react-router-dom";

import { Badge, Col, Container, Row } from "react-bootstrap";

import screenshotThemeDefault from "../../../assets/img/screenshots/theme-default.jpg";
import screenshotThemeDark from "../../../assets/img/screenshots/theme-dark.jpg";
import screenshotThemeColored from "../../../assets/img/screenshots/theme-colored.jpg";
import screenshotThemeLight from "../../../assets/img/screenshots/theme-light.jpg";
import screenshotSidebarCompact from "../../../assets/img/screenshots/sidebar-compact.jpg";
import screenshotSidebarRight from "../../../assets/img/screenshots/sidebar-right.jpg";

const Demos1 = () => (
  <section className="py-6">
    <Container className="position-relative z-3">
      <Row>
        <Col md={12} className="mx-auto text-center">
          <Row>
            <Col lg={10} xl={9} className="mx-auto">
              <div className="mb-4">
                <span className="text-uppercase text-primary text-sm fw-medium mb-1 d-block">
                  Demos
                </span>
                <h2 className="h1 mb-3">
                  Multiple color schemes &amp; layouts
                </h2>
                <p className="text-muted fs-lg">
                  4 Pre-built color schemes and multiple layout types are
                  available to make this template your very own. All the color
                  schemes can take variation in color and styling, that can
                  easily be modified using Sass variables.
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
                to="/dashboard/default?bsTheme=light&sidebarTheme=dark&sidebarPosition=left&sidebarBehavior=sticky&layout=fluid"
              >
                <img
                  src={screenshotThemeDefault}
                  className="img-fluid rounded-3 landing-img"
                  alt="Bootstrap 5 Dashboard Theme"
                />
              </Link>
              <h4>Default</h4>
            </Col>
            <Col md={4} className="py-3">
              <Link
                className="d-block mb-3 mx-1"
                target="_blank"
                rel="noreferrer"
                to="/dashboard/default?bsTheme=light&sidebarTheme=dark&sidebarPosition=left&sidebarBehavior=compact&layout=fluid"
              >
                <img
                  src={screenshotSidebarCompact}
                  className="img-fluid rounded-3 landing-img"
                  alt="Compact Sidebar Bootstrap 5 Dashboard Theme"
                />
              </Link>
              <h4>Compact sidebar</h4>
            </Col>
            <Col md={4} className="py-3">
              <Link
                className="d-block mb-3 mx-1"
                target="_blank"
                rel="noreferrer"
                to="/dashboard/default?bsTheme=dark&sidebarTheme=dark&sidebarPosition=left&sidebarBehavior=sticky&layout=fluid"
              >
                <img
                  src={screenshotThemeDark}
                  className="img-fluid rounded-3 landing-img"
                  alt="Dark Bootstrap 5 Dashboard Theme"
                />
              </Link>
              <h4>
                Dark{" "}
                <sup>
                  <Badge as="small" bg="" className="badge-subtle-primary">
                    New
                  </Badge>
                </sup>
              </h4>
            </Col>
            <Col md={4} className="py-3">
              <Link
                className="d-block mb-3 mx-1"
                target="_blank"
                rel="noreferrer"
                to="/dashboard/default?bsTheme=light&sidebarTheme=colored&sidebarPosition=left&sidebarBehavior=sticky&layout=fluid"
              >
                <img
                  src={screenshotThemeColored}
                  className="img-fluid rounded-3 landing-img"
                  alt="Colored Bootstrap 5 Dashboard Theme"
                />
              </Link>
              <h4>Colored</h4>
            </Col>
            <Col md={4} className="py-3">
              <Link
                className="d-block mb-3 mx-1"
                target="_blank"
                rel="noreferrer"
                to="/dashboard/default?bsTheme=light&sidebarTheme=light&sidebarPosition=left&sidebarBehavior=sticky&layout=fluid"
              >
                <img
                  src={screenshotThemeLight}
                  className="img-fluid rounded-3 landing-img"
                  alt="Light Bootstrap 5 Dashboard Theme"
                />
              </Link>
              <h4>Light</h4>
            </Col>
            <Col md={4} className="py-3">
              <Link
                className="d-block mb-3 mx-1"
                target="_blank"
                rel="noreferrer"
                to="/dashboard/default?bsTheme=light&sidebarTheme=dark&sidebarPosition=right&sidebarBehavior=sticky&layout=fluid"
              >
                <img
                  src={screenshotSidebarRight}
                  className="img-fluid rounded-3 landing-img"
                  alt="Right Sidebar Bootstrap 5 Dashboard Theme"
                />
              </Link>
              <h4>Right sidebar</h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Demos1;
