import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import Settings from "../components/Settings";

import unsplash1 from "../assets/img/photos/unsplash-1.jpg";

interface AuthCoverProps {
  children?: ReactNode;
}

const AuthCover: React.FC<AuthCoverProps> = ({ children }) => (
  <React.Fragment>
    <Container fluid className="p-0">
      <Row className="g-0">
        <Col xl={6} className="d-none d-xl-flex">
          <div className="auth-full-page position-relative">
            <img src={unsplash1} className="auth-bg" alt="Unsplash" />
            <div className="auth-quote">
              <i data-lucide="quote"></i>
              <figure>
                <blockquote>
                  <p>
                    This template was just what we were after; its modern, works
                    perfectly and is visually beautiful, we couldn't be happier.
                  </p>
                </blockquote>
                <figcaption>— Richard, AppStack User</figcaption>
              </figure>
            </div>
          </div>
        </Col>
        <Col xl={6}>
          <div className="auth-full-page d-flex p-4 p-xl-5">
            <div className="d-flex flex-column w-100 h-100">
              <div className="auth-form">
                {children}
                <Outlet />
              </div>
              <div className="text-center">
                <p className="mb-0">
                  &copy; 2024 - <a href="/">AppStack</a>
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default AuthCover;
