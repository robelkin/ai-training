import React from "react";

import { Col, Container, Row, Card, Button } from "react-bootstrap";

const Pricing = () => {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col md={10} xl={8} xxl={8} className="mx-auto">
            <div className="mb-4 text-center">
              <span className="text-uppercase text-primary text-sm fw-medium mb-1 d-block">
                Pricing
              </span>
              <h2 className="h1">We have a plan for everyone</h2>
              <p className="text-muted fs-lg">
                Whether you're a business or an individual, 14-day trial no
                credit card required.
              </p>
            </div>

            <Row className="py-4">
              <Col sm={4} className="mb-3 mb-md-0">
                <Card className="text-center h-100">
                  <Card.Body className="d-flex flex-column">
                    <div className="mb-4">
                      <h5>Free</h5>
                      <span className="display-4">$0</span>
                    </div>
                    <h6>Includes:</h6>
                    <ul className="list-unstyled">
                      <li className="mb-2">1 user</li>
                      <li className="mb-2">5 projects</li>
                      <li className="mb-2">5 GB storage</li>
                    </ul>
                    <div className="mt-auto">
                      <Button
                        variant="outline-primary"
                        size="lg"
                        className="btn-pill"
                      >
                        Sign up
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={4} className="mb-3 mb-md-0">
                <Card className="text-center h-100">
                  <Card.Body className="d-flex flex-column">
                    <div className="mb-4">
                      <h5>Standard</h5>
                      <span className="display-4">$19</span>
                      <span>/mo</span>
                    </div>
                    <h6>Includes:</h6>
                    <ul className="list-unstyled">
                      <li className="mb-2">5 users</li>
                      <li className="mb-2">50 projects</li>
                      <li className="mb-2">50 GB storage</li>
                      <li className="mb-2">Security policy</li>
                      <li className="mb-2">Weekly backups</li>
                    </ul>
                    <div className="mt-auto">
                      <Button variant="primary" size="lg" className="btn-pill">
                        Try it for free
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={4} className="mb-3 mb-md-0">
                <Card className="text-center h-100">
                  <Card.Body className="d-flex flex-column">
                    <div className="mb-4">
                      <h5>Plus</h5>
                      <span className="display-4">$39</span>
                      <span>/mo</span>
                    </div>
                    <h6>Includes:</h6>
                    <ul className="list-unstyled">
                      <li className="mb-2">Unlimited users</li>
                      <li className="mb-2">Unlimited projects</li>
                      <li className="mb-2">250 GB storage</li>
                      <li className="mb-2">Priority support</li>
                      <li className="mb-2">Security policy</li>
                      <li className="mb-2">Daily backups</li>
                      <li className="mb-2">Custom CSS</li>
                    </ul>
                    <div className="mt-auto">
                      <Button
                        variant="outline-primary"
                        size="lg"
                        className="btn-pill"
                      >
                        Try it for free
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
