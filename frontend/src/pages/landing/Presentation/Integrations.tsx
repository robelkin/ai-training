import React from "react";

import {
  Button,
  Col,
  Container,
  Row,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";

import brandReact from "../../../assets/img/brands/react.svg";
import brandRedux from "../../../assets/img/brands/redux.svg";
import brandReactRouter from "../../../assets/img/brands/react-router.svg";
import brandFirebase from "../../../assets/img/brands/firebase.svg";
import brandCognito from "../../../assets/img/brands/cognito.svg";
import brandAuth0 from "../../../assets/img/brands/auth0.svg";
import brandJWT from "../../../assets/img/brands/jwt.svg";
import brandESLint from "../../../assets/img/brands/eslint.svg";

const Integrations = () => (
  <section className="pt-6">
    <Container>
      <Row>
        <Col md={10} className="mx-auto text-center">
          <div className="mb-5">
            <span className="text-uppercase text-primary text-sm fw-medium mb-1 d-block">
              Integrations
            </span>
            <h2 className="h1">
              Launch faster with ready-to-deploy integrations
            </h2>
            <p className="text-muted fs-lg">
              AppStack React includes multiple ready-to-deploy integrations,
              including Redux, ESLint, Prettier, Auth0, Firebase Authentication,
              Amazon Cognito &amp; JSON Web Token Authentication.
            </p>

            <div className="my-4">
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>React v18</Tooltip>}
              >
                <div className="landing-integration">
                  <img src={brandReact} alt="React v18" />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Redux</Tooltip>}
              >
                <div className="landing-integration">
                  <img src={brandRedux} alt="Redux" />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>React Router v6</Tooltip>}
              >
                <div className="landing-integration">
                  <img
                    src={brandReactRouter}
                    alt="React Router v6"
                    height="36"
                    style={{ margin: "2px 0" }}
                  />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Firebase Authentication</Tooltip>}
              >
                <div className="landing-integration">
                  <img src={brandFirebase} alt="Firebase Authentication" />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Amazon Cognito</Tooltip>}
              >
                <div className="landing-integration">
                  <img src={brandCognito} alt="Amazon Cognito" />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Auth0</Tooltip>}
              >
                <div className="landing-integration">
                  <img src={brandAuth0} alt="Auth0" />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>JSON Web Token</Tooltip>}
              >
                <div className="landing-integration">
                  <img src={brandJWT} alt="JSON Web Token" />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>ESLint</Tooltip>}
              >
                <div className="landing-integration">
                  <img src={brandESLint} alt="ESLint" />
                </div>
              </OverlayTrigger>
            </div>

            <Button
              variant="primary"
              size="lg"
              as="a"
              href="/docs/introduction"
              target="_blank"
              rel="noreferrer"
            >
              Open documentation
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Integrations;
