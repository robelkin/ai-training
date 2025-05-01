import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Card, Breadcrumb } from 'react-bootstrap'; // Using react-bootstrap

const HomePage = () => {
  return (
    <React.Fragment>
      <Helmet title="Home" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Welcome!</h1>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Text>
                  This is the main application home page. You can start adding your content here.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default HomePage; 