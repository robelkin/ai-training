import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import {
  Code,
  DownloadCloud,
  Mail,
  Sliders,
  Smartphone,
  Users,
} from "lucide-react";

const Features = () => (
  <section className="bg-white py-6">
    <Container>
      <div className="mb-5 text-center">
        <span className="text-uppercase text-primary text-sm fw-medium mb-1 d-block">
          Features
        </span>
        <h2 className="h1">Features you'll love</h2>
        <p className="text-muted text-lg">
          A responsive dashboard built for everyone who wants to create webapps
          on top of Bootstrap &amp; React.
        </p>
      </div>

      <Row className="text-start">
        <Col md={4}>
          <div className="d-flex py-3">
            <div className="landing-feature">
              <Sliders />
            </div>
            <div className="flex-grow-1">
              <h4 className="mt-0">Customizable</h4>
              <p className="fs-lg">
                You don't need to be an expert to customize our themes. Our code
                is very readable and well documented.
              </p>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="d-flex py-3">
            <div className="landing-feature">
              <Smartphone />
            </div>
            <div className="flex-grow-1">
              <h4 className="mt-0">Fully Responsive</h4>
              <p className="fs-lg">
                With mobile, tablet & desktop support it doesn't matter what
                device you're using. AdminKit is responsive in all browsers.
              </p>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="d-flex py-3">
            <div className="landing-feature">
              <Mail />
            </div>
            <div className="flex-grow-1">
              <h4 className="mt-0">Dev-to-dev Support</h4>
              <p className="fs-lg">
                Our themes are supported by specialists who provide quick and
                effective support. Usually an email reply takes &lt;24h.
              </p>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="d-flex py-3">
            <div className="landing-feature">
              <Users />
            </div>
            <div className="flex-grow-1">
              <h4 className="mt-0">Authentication Examples</h4>
              <p className="fs-lg">
                The package comes with fully working authentication examples,
                including Firebase, Auth0, AWS Cognito and JWT.
              </p>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="d-flex py-3">
            <div className="landing-feature">
              <Code />
            </div>
            <div className="flex-grow-1">
              <h4 className="mt-0">Clean Code</h4>
              <p className="fs-lg">
                We strictly follow Bootstrap's guidelines to make your
                integration as easy as possible. All code is handwritten.
              </p>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="d-flex py-3">
            <div className="landing-feature">
              <DownloadCloud />
            </div>
            <div className="flex-grow-1">
              <h4 className="mt-0">Regular Updates</h4>
              <p className="fs-lg">
                From time to time you'll receive an update containing new
                components, improvements and bugfixes.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Features;
