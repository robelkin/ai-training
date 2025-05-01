import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ButtonGroup,
  Nav,
  Badge,
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import {
  Inbox,
  NotepadText,
  Bell,
  Send,
  TriangleAlert,
  Trash2,
  Mails,
  Folder,
  Tag,
  Search,
  ReplyAll,
  Reply,
  Forward,
} from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import avatar2 from "../../assets/img/avatars/avatar-2.jpg";
import avatar3 from "../../assets/img/avatars/avatar-3.jpg";
import avatar4 from "../../assets/img/avatars/avatar-4.jpg";

const Navigation = () => {
  return (
    <Card>
      <Card.Body>
        <div className="d-grid mb-4">
          <Button
            variant="primary"
            size="lg"
            data-bs-toggle="modal"
            data-bs-target="#composeModal"
          >
            Compose
          </Button>
        </div>
        <Nav role="tablist" className="flex-column mb-4">
          <Nav.Item>
            <Nav.Link
              href="#"
              className="px-2 d-flex align-items-center text-reset"
            >
              <Inbox className="me-2" />
              <strong>Inbox</strong>
              <Badge
                bg=""
                className="badge-subtle-primary ms-auto rounded-pill"
              >
                14
              </Badge>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#"
              className="px-2 d-flex align-items-center text-reset"
            >
              <NotepadText className="me-2" />
              Drafts
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#"
              className="px-2 d-flex align-items-center text-reset"
            >
              <Bell className="me-2" />
              Scheduled
              <Badge
                bg=""
                className="badge-subtle-primary ms-auto rounded-pill"
              >
                3
              </Badge>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#"
              className="px-2 d-flex align-items-center text-reset"
            >
              <Send className="me-2" />
              Sent
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#"
              className="px-2 d-flex align-items-center text-reset"
            >
              <TriangleAlert className="me-2" />
              Spam
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#"
              className="px-2 d-flex align-items-center text-reset"
            >
              <Trash2 className="me-2" />
              Trash
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#"
              className="px-2 d-flex align-items-center text-reset"
            >
              <Mails className="me-2" />
              All mail
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <h6 className="text-uppercase mt-3">Labels</h6>
        <Nav role="tablist" className="nav flex-column mb-4">
          <Nav.Item>
            <Nav.Link
              href="#"
              className="nav-link px-2 d-flex align-items-center justify-content-between text-reset"
            >
              <span className="align-middle">Support</span>
              <FontAwesomeIcon icon={faCircle} className="text-danger fa-sm" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#"
              className="nav-link px-2 d-flex align-items-center justify-content-between text-reset"
            >
              Freelance
              <FontAwesomeIcon icon={faCircle} className="text-info fa-sm" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#"
              className="nav-link px-2 d-flex align-items-center justify-content-between text-reset"
            >
              Social
              <FontAwesomeIcon icon={faCircle} className="text-warning fa-sm" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#"
              className="nav-link px-2 d-flex align-items-center justify-content-between text-reset"
            >
              Friends
              <FontAwesomeIcon icon={faCircle} className="text-primary fa-sm" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#"
              className="nav-link px-2 d-flex align-items-center justify-content-between text-reset"
            >
              Family
              <FontAwesomeIcon icon={faCircle} className="text-success fa-sm" />
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div>
          <h6 className="text-uppercase mt-3 mb-3">Chat</h6>
          <div className="d-flex">
            <img
              className="d-flex me-2 rounded-circle"
              src={avatar4}
              alt="Stacie Hall"
              width="36"
              height="36"
            />
            <div className="flex-grow-1">
              <h6 className="m-0">Stacie Hall</h6>
              <p className="text-muted text-sm">How are you?</p>
            </div>
          </div>
          <div className="d-flex">
            <img
              className="d-flex me-2 rounded-circle"
              src={avatar2}
              alt="Carl Jenkins"
              width="36"
              height="36"
            />
            <div className="flex-grow-1">
              <h6 className="m-0">Carl Jenkins</h6>
              <p className="text-muted text-sm">Can we reschedule?</p>
            </div>
          </div>
          <div className="d-flex">
            <img
              className="d-flex me-2 rounded-circle"
              src={avatar3}
              alt="Bertha Martin"
              width="36"
              height="36"
            />
            <div className="flex-grow-1">
              <h6 className="m-0">Bertha Martin</h6>
              <p className="text-muted text-sm">Great job!</p>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

const EmailRead = () => {
  return (
    <div>
      <h5>
        Exciting news! Our company's quarterly earnings have exceeded
        expectations. Celebratory dinner tonight at 7:00 PM.
      </h5>
      <hr />

      <div className="d-flex">
        <img
          width="40"
          height="40"
          src={avatar4}
          className="rounded-circle d-flex me-2"
          alt="Stacie Hall"
        />
        <div className="w-100 mt-1">
          <small className="float-end">April 5, 2024, 9:12 AM</small>
          <h6 className="mb-0">Stacie Hall</h6>
          <small className="text-muted">from: stacie@staciehall.co</small>
        </div>
      </div>

      <div className="mx-5 my-3">
        <p>Dear Team,</p>
        <p>I hope this email finds you well.</p>
        <p>
          I'm thrilled to share some fantastic news with all of you – our
          company's quarterly earnings have surpassed expectations! This is a
          significant achievement that wouldn't have been possible without each
          and every one of your hard work, dedication, and commitment to
          excellence.
        </p>
        <p>
          To celebrate this incredible milestone, we're hosting a special
          celebratory dinner tonight at 7:00 PM. It will be an opportunity for
          us to come together, unwind, and toast to our success as a team.
        </p>
        <p>
          Please RSVP by replying to this email at your earliest convenience so
          we can finalize arrangements. If you have any dietary restrictions or
          preferences, please let us know so we can accommodate them.
        </p>
        <p>
          Let's make tonight a memorable and enjoyable evening as we celebrate
          our achievements together. Looking forward to seeing you all there!
        </p>
        <p>
          Best regards,
          <br />
          Stacie Hall
        </p>
      </div>

      <hr />

      <div className="btn-toolbar">
        <Button variant="light" className="me-2">
          <ReplyAll size={16} /> Reply to all
        </Button>
        <Button variant="light" className="me-2">
          <Reply size={16} /> Reply
        </Button>
        <Button variant="light">
          <Forward size={16} /> Forward
        </Button>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <Card>
      <Card.Body>
        <Row className="mb-3">
          <Col xs={12} xxl={8}>
            <div className="btn-toolbar">
              <ButtonGroup className="btn-group-lg me-2">
                <Button variant="light">
                  <Inbox />
                </Button>
                <Button variant="light">
                  <TriangleAlert />
                </Button>
                <Button variant="light">
                  <Trash2 />
                </Button>
              </ButtonGroup>
              <ButtonGroup className="btn-group-lg me-2">
                <DropdownButton
                  variant="light"
                  as={ButtonGroup}
                  title={<Folder />}
                  id="folder-dropdown"
                  className="position-relative"
                >
                  <Dropdown.Item href="#">Inbox</Dropdown.Item>
                  <Dropdown.Item href="#">Drafts</Dropdown.Item>
                  <Dropdown.Item href="#">Trash</Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
              <ButtonGroup className="btn-group-lg me-2">
                <DropdownButton
                  variant="light"
                  as={ButtonGroup}
                  title={<Tag />}
                  id="tag-dropdown"
                >
                  <Dropdown.Item href="#">Support</Dropdown.Item>
                  <Dropdown.Item href="#">Freelance</Dropdown.Item>
                  <Dropdown.Item href="#">Social</Dropdown.Item>
                  <Dropdown.Item href="#">Friends</Dropdown.Item>
                  <Dropdown.Item href="#">Family</Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
              <ButtonGroup className="btn-group-lg">
                <DropdownButton
                  variant="light"
                  as={ButtonGroup}
                  title="More"
                  id="more-dropdown"
                >
                  <Dropdown.Item href="#">Mark as Unread</Dropdown.Item>
                  <Dropdown.Item href="#">Mark as Important</Dropdown.Item>
                  <Dropdown.Item href="#">Add Star</Dropdown.Item>
                  <Dropdown.Item href="#">Move to Spam</Dropdown.Item>
                  <Dropdown.Item href="#">Move to Trash</Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
            </div>
          </Col>
          <Col xs={12} xxl={4} className="d-none d-xxl-block">
            <InputGroup className="input-group-search">
              <FormControl
                type="text"
                placeholder="Search emails…"
                aria-label="Search"
              />
              <Button variant="light">
                <Search className="align-middle" />
              </Button>
            </InputGroup>
          </Col>
        </Row>

        <EmailRead />
      </Card.Body>
    </Card>
  );
};

const EmailDetails = () => {
  return (
    <React.Fragment>
      <Helmet title="Email Details" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Email Details</h1>

        <Row>
          <Col xs={12} lg={4} xxl={2}>
            <Navigation />
          </Col>
          <Col xs={12} lg={8} xxl={10}>
            <Main />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default EmailDetails;
