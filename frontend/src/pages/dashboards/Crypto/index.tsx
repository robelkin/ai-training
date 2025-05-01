import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

import Chart from "./Chart";
import Header from "./Header";
import Markets from "./Markets";
import Tickers from "./Tickers";
import Operations from "./Operations";
import BuyOrders from "./BuyOrders";
import SellOrders from "./SellOrders";

const Crypto = () => (
  <React.Fragment>
    <Helmet title="Crypto Dashboard" />
    <Container fluid className="p-0">
      <Header />
      <Tickers />
      <Row>
        <Col lg={5} xxl={4} className="d-flex">
          <Markets />
        </Col>
        <Col lg={7} xxl={8} className="d-flex">
          <Chart />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={12} xxl={3} className="d-flex">
          <Operations />
        </Col>
        <Col xs={12} lg={6} xxl className="d-flex">
          <BuyOrders />
        </Col>
        <Col xs={12} lg={6} xxl className="d-flex">
          <SellOrders />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Crypto;
