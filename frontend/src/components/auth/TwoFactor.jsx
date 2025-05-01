import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Form } from "react-bootstrap";

// Programmer can implement the 2FA solution
// based on their chosen auth provider.
const TwoFactor = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-3">
      <Form onSubmit={() => navigate("/dashboard/default")}>
        <Form.Group className="mb-3">
          <Form.Label>6-digit code</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            name="code"
            placeholder="Enter your code"
          />
        </Form.Group>

        <div className="d-grid gap-2 mt-3">
          <Button type="submit" variant="primary" size="lg">
            Verify
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default TwoFactor;
