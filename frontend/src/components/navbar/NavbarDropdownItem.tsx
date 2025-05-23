import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";

interface NavbarDropdownItemType {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
  spacing?: boolean;
}

const NavbarDropdownItem = ({
  icon,
  title,
  description,
  time,
  spacing,
}: NavbarDropdownItemType) => (
  <ListGroup.Item>
    <Row className="align-items-center g-0">
      <Col xs={2}>{icon}</Col>
      <Col xs={10} className={spacing ? "ps-2" : ""}>
        <div>{title}</div>
        <div className="text-muted small mt-1">{description}</div>
        <div className="text-muted small mt-1">{time}</div>
      </Col>
    </Row>
  </ListGroup.Item>
);

export default NavbarDropdownItem;
