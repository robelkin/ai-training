import React from "react";

import { Card, Col, Container, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import brandBootstrap from "../../../assets/img/brands/bootstrap.svg";

const Testimonials = () => (
  <section className="py-6">
    <Container>
      <div className="mb-5 text-center">
        <span className="text-uppercase text-primary text-sm fw-medium mb-1 d-block">
          Reviews
        </span>
        <h2 className="h1">Developers love AppStack React</h2>
        <p className="text-muted fs-lg">
          Here's what some of our 5,000+ customers have to say about working
          with our products.
        </p>
      </div>
      <Row>
        <Col md={6} lg={4}>
          <Card as="blockquote" className="landing-quote border">
            <Card.Body className="p-4">
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img
                    src={brandBootstrap}
                    width="48"
                    height="48"
                    alt="Bootstrap"
                  />
                </div>
                <div className="ps-3">
                  <h5 className="mb-1 mt-2">Nikita</h5>
                  <small className="d-block text-muted h5 fw-normal">
                    Head of Product
                  </small>
                </div>
              </div>
              <p className="lead mb-2">
                “We are totally amazed with a simplicity and the design of the
                template.{" "}
                <span>Probably saved us hundreds of hours of development.</span>{" "}
                We are absolutely amazed with the support Bootlab has provided
                us.”
              </p>

              <div className="landing-stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card as="blockquote" className="landing-quote border">
            <Card.Body className="p-4">
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img
                    src={brandBootstrap}
                    width="48"
                    height="48"
                    alt="Bootstrap"
                  />
                </div>
                <div className="ps-3">
                  <h5 className="mb-1 mt-2">Alejandro</h5>
                  <small className="d-block text-muted h5 fw-normal">
                    Back-end Developer
                  </small>
                </div>
              </div>
              <p className="lead mb-2">
                “Everything is so properly set up that{" "}
                <span>
                  any new additions I'd make would feel like a native extension
                  of the theme
                </span>{" "}
                versus a simple hack. I definitely feel like this will save me
                hundredths of hours I'd otherwise spend on designing.”
              </p>

              <div className="landing-stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="d-block d-md-none d-lg-block">
          <Card as="blockquote" className="landing-quote border">
            <Card.Body className="p-4">
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img
                    src={brandBootstrap}
                    width="48"
                    height="48"
                    alt="Bootstrap"
                  />
                </div>
                <div className="ps-3">
                  <h5 className="mb-1 mt-2">Jordi</h5>
                  <small className="d-block text-muted h5 fw-normal">
                    Front-end Developer
                  </small>
                </div>
              </div>
              <p className="lead mb-2">
                “I ran into a problem and contacted support. Within 24 hours, I
                not only received a response but even an updated version that
                solved my problem and works like a charm.{" "}
                <span>Fantastic customer service!</span>”
              </p>

              <div className="landing-stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Testimonials;
