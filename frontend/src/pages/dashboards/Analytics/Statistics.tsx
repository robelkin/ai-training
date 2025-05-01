import React from "react";
import { useTranslation } from "react-i18next";
import { Badge, Col, Card, Row } from "react-bootstrap";
import { ArrowUpRight, Clock, Users } from "lucide-react";

import illustration from "../../../assets/img/illustrations/searching.png";

const Statistics = () => {
  const { t } = useTranslation();

  return (
    <div className="w-100">
      <Row>
        <Col sm={6} lg={12} xxl={6} className="d-flex">
          <Card className="illustration flex-fill">
            <Card.Body className="p-0 d-flex flex-fill">
              <Row className="g-0 w-100">
                <Col xs={6}>
                  <div className="illustration-text p-3 m-1">
                    <h4 className="illustration-text">
                      {t("Welcome back")}, Chris!
                    </h4>
                    <p className="mb-0">AppStack Dashboard</p>
                  </div>
                </Col>
                <Col xs={6} className="align-self-end text-end">
                  <img
                    src={illustration}
                    alt="Searching"
                    className="img-fluid illustration-img"
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} lg={12} xxl={6} className="d-flex">
          <Card className="flex-fill">
            <Card.Body>
              <Row>
                <Col className="mt-0">
                  <h5 className="card-title">Bounce</h5>
                </Col>

                <Col xs="auto">
                  <div className="stat stat-sm">
                    <ArrowUpRight className="align-middle" />
                  </div>
                </Col>
              </Row>
              <span className="h1 d-inline-block mt-1 mb-4">2.364</span>
              <div className="mb-0">
                <Badge bg="" className="badge-subtle-success me-2">
                  +3.65%
                </Badge>
                <span className="text-muted">Since last week</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="d-lg-none d-xxl-flex">
        <Col sm={6} lg={12} xxl={6} className="d-flex">
          <Card className="flex-fill">
            <Card.Body>
              <Row>
                <Col className="mt-0">
                  <h5 className="card-title">Real-Time</h5>
                </Col>

                <Col xs="auto">
                  <div className="stat stat-sm">
                    <Clock className="align-middle" />
                  </div>
                </Col>
              </Row>
              <span className="h1 d-inline-block mt-1 mb-4">1.856</span>
              <div className="mb-0">
                <Badge bg="" className="badge-subtle-success me-2">
                  +2.25%
                </Badge>
                <span className="text-muted">Since last week</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} lg={12} xxl={6} className="d-flex">
          <Card className="flex-fill">
            <Card.Body>
              <Row>
                <Col className="mt-0">
                  <h5 className="card-title">Visitors</h5>
                </Col>

                <Col xs="auto">
                  <div className="stat stat-sm">
                    <Users className="align-middle" />
                  </div>
                </Col>
              </Row>
              <span className="h1 d-inline-block mt-1 mb-4">17.212</span>
              <div className="mb-0">
                <Badge bg="" className="badge-subtle-danger me-2">
                  -1.25%
                </Badge>
                <span className="text-muted">Since last week</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Statistics;
