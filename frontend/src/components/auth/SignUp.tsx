import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import { Alert, Button, Form, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faApple } from "@fortawesome/free-brands-svg-icons";

import brandGoogle from "../../assets/img/brands/google.svg";

import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        submit: false,
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().max(255).required("First name is required"),
        lastName: Yup.string().max(255).required("Last name is required"),
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Email is required"),
        password: Yup.string()
          .min(12, "Must be at least 12 characters")
          .max(255)
          .required("Required"),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          signUp(
            values.email,
            values.password,
            values.firstName,
            values.lastName
          );
          navigate("/auth/sign-in");
        } catch (error: any) {
          const message = error.message || "Something went wrong";

          setStatus({ success: false });
          setErrors({ submit: message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <React.Fragment>
          <div className="d-grid gap-2 mb-3">
            <Link
              to="/dashboard/default"
              className="btn btn-facebook btn-lg position-relative shadow"
            >
              <span
                className="float-start fs-3 position-absolute"
                style={{ left: 16, top: 2 }}
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  fixedWidth
                  className="fs-3"
                />
              </span>
              Continue with Facebook
            </Link>
            <Link
              to="/dashboard/default"
              className="btn btn-google btn-lg position-relative shadow"
            >
              <span
                className="float-start fs-3 position-absolute"
                style={{ left: 16, top: 1 }}
              >
                <img src={brandGoogle} height="22" alt="Google" />
              </span>
              Continue with Google
            </Link>
            <Link
              to="/dashboard/default"
              className="btn btn-apple btn-lg position-relative shadow"
            >
              <span
                className="float-start fs-3 position-absolute"
                style={{ left: 16, top: 2 }}
              >
                <FontAwesomeIcon icon={faApple} fixedWidth className="fs-3" />
              </span>
              Continue with Apple
            </Link>
          </div>
          <Row>
            <Col>
              <hr />
            </Col>
            <Col xs="auto" className="text-uppercase d-flex align-items-center">
              Or
            </Col>
            <Col>
              <hr />
            </Col>
          </Row>
          <Form onSubmit={handleSubmit}>
            {errors.submit && (
              <Alert className="my-3" variant="danger">
                {errors.submit}
              </Alert>
            )}
            <Form.Group className="mb-3">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="First name"
                value={values.firstName}
                isInvalid={Boolean(touched.firstName && errors.firstName)}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {!!touched.firstName && (
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last name"
                value={values.lastName}
                isInvalid={Boolean(touched.lastName && errors.lastName)}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {!!touched.lastName && (
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email address"
                value={values.email}
                isInvalid={Boolean(touched.email && errors.email)}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {!!touched.email && (
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                isInvalid={Boolean(touched.password && errors.password)}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {!!touched.password && (
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <div className="d-grid gap-2 mt-3">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
              >
                Sign up
              </Button>
            </div>
          </Form>
        </React.Fragment>
      )}
    </Formik>
  );
};

export default SignUp;
