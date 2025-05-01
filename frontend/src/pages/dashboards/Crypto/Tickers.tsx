import React from "react";
import { Col, Card, Row, Badge } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBitcoinSign,
  faDollarSign,
  faLitecoinSign,
} from "@fortawesome/free-solid-svg-icons";
import { faEthereum, faMonero } from "@fortawesome/free-brands-svg-icons";

interface TickerType {
  title: string;
  icon: any;
  iconColor: string;
  backgroundColor: string;
  primaryValue: string;
  secondaryValue: string;
  footer: string | JSX.Element;
}

const Ticker = ({
  title,
  icon,
  iconColor,
  backgroundColor,
  primaryValue,
  secondaryValue,
  footer,
}: TickerType) => (
  <Card className="flex-fill">
    <Card.Body>
      <Row>
        <Col>
          <h5 className="card-title">{title}</h5>
        </Col>
        <Col xs="auto">
          <div
            className="stat stat-sm"
            style={{
              background: backgroundColor,
            }}
          >
            <FontAwesomeIcon
              icon={icon}
              className={`align-middle text-${iconColor}`}
            />
          </div>
        </Col>
      </Row>
      <h4 className="mt-0 mb-1">
        {primaryValue} <span className="text-muted">{secondaryValue}</span>
      </h4>
      <div className="mb-0">
        <span className="text-muted">{footer}</span>
      </div>
    </Card.Body>
  </Card>
);

const Tickers = () => (
  <Row>
    <Col xs={12} md={6} xxl className="d-flex">
      <Ticker
        title="Total balance"
        icon={faDollarSign}
        iconColor=""
        backgroundColor=""
        primaryValue="$53,252"
        secondaryValue="2.30 BTC"
        footer={
          <span>
            <Badge bg="" className="badge-subtle-success me-1">
              +6.15%
            </Badge>
            Since last week
          </span>
        }
      />
    </Col>
    <Col xs={12} md={6} xxl className="d-flex">
      <Ticker
        title="USD/BTC"
        icon={faBitcoinSign}
        iconColor="white"
        backgroundColor="#F7931A"
        primaryValue="$23,077.05"
        secondaryValue="€22,617.47"
        footer="Volume: 132,691 BTC"
      />
    </Col>
    <Col xs={12} md={6} xxl className="d-flex">
      <Ticker
        title="LTC/BTC"
        icon={faLitecoinSign}
        iconColor="white"
        backgroundColor="#345D9D"
        primaryValue="0.00256"
        secondaryValue="$59.02"
        footer="Volume: 31,268 BTC"
      />
    </Col>
    <Col xs={12} md={6} xxl className="d-flex">
      <Ticker
        title="ETH/BTC"
        icon={faEthereum}
        iconColor="white"
        backgroundColor="#627EEA"
        primaryValue="0.07334"
        secondaryValue="$1,691.76"
        footer="Volume: 32,982 BTC"
      />
    </Col>
    <Col xs={12} md={6} xxl className="d-none d-xxl-flex">
      <Ticker
        title="XMR/BTC"
        icon={faMonero}
        iconColor="white"
        backgroundColor="#FF6600"
        primaryValue="0.006854"
        secondaryValue="$157.68"
        footer="Volume: 28,567 BTC"
      />
    </Col>
  </Row>
);

export default Tickers;
