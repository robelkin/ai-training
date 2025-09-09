import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

const LlmQuery = () => {
  const [query, setQuery] = useState('');
  const [showIntroAlert, setShowIntroAlert] = useState(true);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = () => {
    console.log('LLM Query:', query);
    // TODO: Implement actual LLM API call here
  };

  return (
    <React.Fragment>
      <Helmet title="LLM Query Exercise" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">LLM Query Exercise</h1>

        {showIntroAlert && (
          <Alert 
            variant="primary" 
            className="alert-outline"
            onClose={() => setShowIntroAlert(false)}
            dismissible
          >
            <div className="alert-icon">
              <FontAwesomeIcon icon={faBell} fixedWidth />
            </div>
            <div className="alert-message">
              <strong>Welcome to the LLM Query Exercise!</strong>
              <p className="mb-2">
                This page provides a basic interface to send a query to a Large Language Model (LLM) via the backend.
              </p>
              <p className="mb-1">
                To make this page functional, you'll need to implement the following steps, using AI assistance:
              </p>
              <p className="mb-2">
                Suggestion: Before you start, create a brief plan using <code>@WRITE_PLANNING_DOC.md</code> to outline how you'll implement the task list below.
              </p>
              <ul>
                <li>
                  <strong>Task 1: Backend Integration:</strong> Create a new API endpoint in the backend (e.g., <code>/api/llm/query</code>).
                  This endpoint should accept a POST request containing the user's query. Inside the endpoint handler,
                  make a call to an LLM of your choice (e.g., using a library like OpenAI's or Anthropic's SDK).
                  Return the LLM's response to the frontend.
                </li>
                <li>
                  <strong>Task 2: Frontend API Call & Display:</strong> Update the <code>handleSubmit</code> function in this component.
                  It should make a POST request to your new backend endpoint, sending the <code>query</code> state.
                  Handle the response from the backend and display the LLM's answer below the form (you'll need to add state and JSX for this).
                </li>
                <li>
                  <strong>Task 3: Model Selection:</strong> Enhance the UI by adding a dropdown or radio buttons
                  to allow the user to select which LLM they want to query (e.g., GPT-4, Claude 3, etc.).
                  Pass this selection to the backend endpoint and adjust the backend logic accordingly.
                </li>
              </ul>
            </div>
          </Alert>
        )}

        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title>Ask a question</Card.Title>
                <h6 className="card-subtitle text-muted">
                  Enter your question below and submit it to the LLM.
                </h6>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Question</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter your question here..."
                      value={query}
                      onChange={handleQueryChange}
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={handleSubmit}>
                    Submit Query
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* TODO: Add section to display LLM response */}
      </Container>
    </React.Fragment>
  );
};

export default LlmQuery; 