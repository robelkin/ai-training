import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Form } from "react-bootstrap";

// Programmer can implement the lock screen behavior
// based on their chosen auth provider.
const LockScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-3">
      <Form onSubmit={() => navigate("/dashboard/default")}>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            size="lg"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <small>
            <Link to="/auth/reset-password">Forgot password?</Link>
          </small>
        </Form.Group>

        <div className="d-grid gap-2 mt-3">
          <Button type="submit" variant="primary" size="lg">
            Sign in
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LockScreen;
