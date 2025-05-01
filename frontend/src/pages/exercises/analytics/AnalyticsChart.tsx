import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Alert, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const AnalyticsChartExercise = () => {
  return (
    <React.Fragment>
      <Helmet title="Analytics Chart Exercise" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Analytics Chart Exercise</h1>

        <Row>
          <Col> {/* Use Col without size prop to take full width */} 
            <Alert variant="primary" className="alert-outline mb-4">
              <div className="alert-icon">
                <FontAwesomeIcon icon={faInfoCircle} fixedWidth />
              </div>
              <div className="alert-message">
                <strong>Exercise Task</strong>
                <p className="mb-2">
                  Your goal is to display the company's monthly website analytics data using a chart.
                </p>
                <p className="mb-1">
                  First, you need to fetch the data from the backend API endpoint. We have deliberately avoided giving you pointers to where this is as you can discover that using AI. 
                </p>
                <p className="mb-0">
                  Once you have the data, use a charting library to visualize it. You can choose which metrics to display (e.g., Page Views and Total Visits over time). There are example charts implemented in the <strong>Example Layouts</strong> section of this application that you can reference for implementation details. However, <strong>do not look at the example code directly</strong>. Instead, ask the AI assistant to look at the relevant example code and explain how to implement the chart based on those examples.
                </p>
              </div>
            </Alert>
          </Col>
        </Row>

        <Row>
          <Col> {/* Use Col without size prop to take full width */} 
            <Card>
              <Card.Header>
                <Card.Title>Monthly Analytics Chart</Card.Title>
                <h6 className="card-subtitle text-muted">Display the fetched monthly analytics data here.</h6>
              </Card.Header>
              <Card.Body>
                {/* Chart component will go here */}
                <div className="text-center">
                  Chart placeholder
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default AnalyticsChartExercise; 