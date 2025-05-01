import React, { useState } from "react";

import { Accordion, Card, Col, Container, Row } from "react-bootstrap";

const Faq = () => {
  const [activeKey, setActiveKey] = useState("0");

  return (
    <section className="bg-white py-6">
      <Container>
        <div className="mb-5 text-center">
          <span className="text-uppercase text-primary text-sm fw-medium mb-1 d-block">
            AppStack
          </span>
          <h2 className="h1">Frequently asked questions</h2>
          <p className="text-muted fs-lg">
            Here are some of the answers you might be looking for.
          </p>
        </div>

        <Row>
          <Col md={9} lg={8} className="mx-auto">
            <Accordion activeKey={activeKey}>
              <Card className="border mb-3">
                <Card.Header
                  className="cursor-pointer"
                  onClick={() => setActiveKey("0")}
                >
                  <h6 className="mb-0">
                    Does this product support TypeScript?
                  </h6>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="py-3">
                    Yes, the package includes two projects, based on JavaScript
                    &amp; TypeScript. Both projects are fully-featured, and
                    contain all components, icons, pages, auth types and more.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="border mb-3">
                <Card.Header
                  className="cursor-pointer"
                  onClick={() => setActiveKey("1")}
                >
                  <h6 className="mb-0">Is there any support included?</h6>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="py-3">
                    You have access to the Software's online support services
                    via email for six (6) months from the purchase date. Please
                    contact us at{" "}
                    <a href="mailto:support@bootlab.io">support@bootlab.io</a>{" "}
                    for any questions.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="border mb-3">
                <Card.Header
                  className="cursor-pointer"
                  onClick={() => setActiveKey("2")}
                >
                  <h6 className="mb-0">
                    How do I get a receipt for my purchase?
                  </h6>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body className="py-3">
                    You'll receive an email from Bootstrap themes once your
                    purchase is complete. More info can be found{" "}
                    <a
                      href="https://themes.zendesk.com/hc/en-us/articles/360000011052-How-do-I-get-a-receipt-for-my-purchase-"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      here
                    </a>
                    .
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="border mb-3">
                <Card.Header
                  className="cursor-pointer"
                  onClick={() => setActiveKey("3")}
                >
                  <h6 className="mb-0">
                    What methods of payments are supported?
                  </h6>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body className="py-3">
                    You can purchase the themes on Bootstrap Themes via any
                    major credit/debit card (via Stripe) or with your Paypal
                    account. We don't support cryptocurrencies or invoicing at
                    this time.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="border mb-3">
                <Card.Header
                  className="cursor-pointer"
                  onClick={() => setActiveKey("4")}
                >
                  <h6 className="mb-0">
                    Does this product work with npm / yarn?
                  </h6>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body className="py-3">
                    Yes, AppStack React has been thoroughly tested with npm and
                    yarn (LTS versions).
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
