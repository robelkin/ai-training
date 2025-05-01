import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";

const Cta = () => (
  <section className="py-6">
    <Container className="text-center">
      <Row>
        <Col md={9} lg={8} xl={6} className="mx-auto">
          <h2 className="h1 mb-3">
            Join over 5,000 developers who are already working with our products
          </h2>
          <Button
            variant="success"
            size="lg"
            href="https://themes.getbootstrap.com/product/appstack-react-admin-dashboard-template/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-n1 btn-pill"
          >
            Get AppStack
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Cta;
