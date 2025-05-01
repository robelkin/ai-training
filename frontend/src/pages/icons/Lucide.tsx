import React from "react";
import { Helmet } from "react-helmet-async";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import * as Icon from "lucide-react";

const icons = [
  {
    icon: <Icon.Activity />,
    name: "Activity",
  },
  {
    icon: <Icon.Airplay />,
    name: "Airplay",
  },
  {
    icon: <Icon.AlertCircle />,
    name: "AlertCircle",
  },
  {
    icon: <Icon.AlertOctagon />,
    name: "AlertOctagon",
  },
  {
    icon: <Icon.AlertTriangle />,
    name: "AlertTriangle",
  },
  {
    icon: <Icon.AlignCenter />,
    name: "AlignCenter",
  },
  {
    icon: <Icon.AlignJustify />,
    name: "AlignJustify",
  },
  {
    icon: <Icon.AlignLeft />,
    name: "AlignLeft",
  },
  {
    icon: <Icon.AlignRight />,
    name: "AlignRight",
  },
  {
    icon: <Icon.Anchor />,
    name: "Anchor",
  },
  {
    icon: <Icon.Aperture />,
    name: "Aperture",
  },
  {
    icon: <Icon.Archive />,
    name: "Archive",
  },
  {
    icon: <Icon.ArrowDownCircle />,
    name: "ArrowDownCircle",
  },
  {
    icon: <Icon.ArrowDownLeft />,
    name: "ArrowDownLeft",
  },
  {
    icon: <Icon.ArrowDownRight />,
    name: "ArrowDownRight",
  },
  {
    icon: <Icon.ArrowDown />,
    name: "ArrowDown",
  },
  {
    icon: <Icon.ArrowLeftCircle />,
    name: "ArrowLeftCircle",
  },
  {
    icon: <Icon.ArrowLeft />,
    name: "ArrowLeft",
  },
  {
    icon: <Icon.ArrowRightCircle />,
    name: "ArrowRightCircle",
  },
  {
    icon: <Icon.ArrowRight />,
    name: "ArrowRight",
  },
  {
    icon: <Icon.ArrowUpCircle />,
    name: "ArrowUpCircle",
  },
  {
    icon: <Icon.ArrowUpLeft />,
    name: "ArrowUpLeft",
  },
  {
    icon: <Icon.ArrowUpRight />,
    name: "ArrowUpRight",
  },
  {
    icon: <Icon.ArrowUp />,
    name: "ArrowUp",
  },
];

interface LucideIconType {
  icon: {
    icon: JSX.Element;
    name: string;
  };
}

const LucideIcon = ({ icon }: LucideIconType) => (
  <Col md={6} lg={3}>
    <div className="mb-2">
      {React.cloneElement(icon.icon, {
        className: "lucide align-middle me-2",
      })}
      <span className="align-middle">{icon.name}</span>
    </div>
  </Col>
);

const LucideIcons = () => (
  <React.Fragment>
    <Helmet title="Lucide" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Lucide</h1>

      <Card>
        <Card.Header>
          <Card.Title>Lucide Icons</Card.Title>
          <h6 className="card-subtitle text-muted">
            Simply beautiful open source icons
          </h6>
        </Card.Header>
        <Card.Body>
          <Row className="mb-3">
            {icons.map((icon, iconKey) => (
              <LucideIcon icon={icon} key={iconKey} />
            ))}
          </Row>
          <Button
            target="_blank"
            rel="nofollow noreferrer"
            href="https://lucide.dev/"
          >
            Browse all available icons
            <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
          </Button>
        </Card.Body>
      </Card>
    </Container>
  </React.Fragment>
);

export default LucideIcons;
