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
  Star,
} from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import avatar2 from "../../assets/img/avatars/avatar-2.jpg";
import avatar3 from "../../assets/img/avatars/avatar-3.jpg";
import avatar4 from "../../assets/img/avatars/avatar-4.jpg";

interface Email {
  name: string;
  subject: string;
  tag?: string;
  date: string;
  favorite: boolean;
}

const emailData: Email[] = [
  {
    name: "John Doe",
    subject:
      "Invitation: Join us for the annual company picnic at Central Park this Saturday. We'll have games, food, and fun for everyone!",
    tag: "Freelance",
    date: "Apr 10",
    favorite: true,
  },
  {
    name: "Jane Smith, me (2)",
    subject:
      "Regarding your inquiry about the upcoming project deadline – We're working diligently to meet the timeline. I'll provide you with a progress update by tomorrow.",
    tag: undefined,
    date: "Apr 9",
    favorite: false,
  },
  {
    name: "Michael Rodriguez",
    subject:
      "Weekend getaway plans – Hey, I've booked a cabin in the mountains for next weekend. Are you in?",
    tag: "Friends",
    date: "Apr 8",
    favorite: false,
  },
  {
    name: "Sophia Williams",
    subject:
      "New job offer – Congratulations! You've been selected for the position at our company. Please confirm your acceptance by the end of the week.",
    tag: undefined,
    date: "Apr 7",
    favorite: true,
  },
  {
    name: "William Martinez, me (3)",
    subject:
      "Reminder: Team meeting tomorrow at 10:00 AM sharp. Don't forget to bring your progress reports.",
    tag: undefined,
    date: "Apr 6",
    favorite: false,
  },
  {
    name: "Stacie Hall",
    subject:
      "Exciting news! Our company's quarterly earnings have exceeded expectations. Celebratory dinner tonight at 7:00 PM.",
    tag: undefined,
    date: "Apr 5",
    favorite: false,
  },
  {
    name: "James Brown",
    subject:
      "Need your input – Could you review the latest draft of the marketing campaign and provide feedback by EOD?",
    tag: "Support",
    date: "Apr 4",
    favorite: false,
  },
  {
    name: "Ava Jones",
    subject:
      "Travel update – Flight to Paris confirmed for next Monday. Can't wait to explore the city of lights!",
    tag: "Family",
    date: "Apr 3",
    favorite: false,
  },
  {
    name: "Benjamin Taylor",
    subject:
      "Important: Don't forget to submit your timesheets for the current pay period by Friday.",
    tag: undefined,
    date: "Apr 2",
    favorite: false,
  },
  {
    name: "Emma Garcia",
    subject:
      "Congratulations on your promotion! Your hard work and dedication have paid off. Let's celebrate this milestone over lunch tomorrow.",
    tag: "Social",
    date: "Apr 1",
    favorite: false,
  },
  {
    name: "Alex Johnson",
    subject:
      "Emergency meeting called – Please join the Zoom call ASAP to address the unexpected issue with the server.",
    tag: undefined,
    date: "Mar 31",
    favorite: false,
  },
  {
    name: "Sarah Lee",
    subject:
      "Family reunion this weekend – Looking forward to seeing everyone at Grandma's house on Sunday.",
    tag: "Family",
    date: "Mar 30",
    favorite: false,
  },
  {
    name: "Marketing Team, me (3)",
    subject:
      "Reminder: Annual performance reviews scheduled for next week. Prepare your self-assessment and goals beforehand.",
    tag: "Freelance",
    date: "Mar 29",
    favorite: false,
  },
  {
    name: "Jane Smith",
    subject:
      "Regarding the budget proposal – I've reviewed your suggestions and have some ideas to discuss. Let's meet tomorrow to brainstorm.",
    tag: undefined,
    date: "Mar 28",
    favorite: false,
  },
  {
    name: "John Doe, me (5)",
    subject:
      "Good news – The client loved our presentation! Let's keep up the great work.",
    tag: "Support",
    date: "Mar 27",
    favorite: false,
  },
];

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

interface EmailTableRowProps {
  data: Email;
}

const EmailTableRow: React.FC<EmailTableRowProps> = ({ data }) => {
  const getTagColor = (tag: string | undefined) => {
    switch (tag) {
      case "Freelance":
        return "text-bg-info";
      case "Friends":
        return "text-bg-primary";
      case "Support":
        return "text-bg-danger";
      case "Family":
        return "text-bg-success";
      case "Social":
        return "text-bg-warning";
      default:
        return "";
    }
  };

  return (
    <tr>
      <td className="text-truncate col-checkbox">
        <input className="form-check-input" type="checkbox" value="" />
      </td>
      <td className="text-truncate col-favorite">
        <Star className={data.favorite ? "text-warning" : ""} />
      </td>
      <td className="text-truncate col-name">
        <span className={`badge ${getTagColor(data.tag)} me-2`}>
          {data.tag}
        </span>
        {data.name}
      </td>
      <td className="text-truncate w-75 col-subject">{data.subject}</td>
      <td className="d-none d-xl-table-cell text-end text-truncate col-date">
        {data.date}
      </td>
    </tr>
  );
};

const EmailTable = () => {
  return (
    <table id="datatables-email-inbox" className="table table-email my-0 w-100">
      <thead className="d-none">
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {emailData.map((email, index) => (
          <EmailTableRow key={index} data={email} />
        ))}
      </tbody>
    </table>
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

        <EmailTable />
      </Card.Body>
    </Card>
  );
};

const EmailInbox = () => {
  return (
    <React.Fragment>
      <Helmet title="Inbox" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Inbox</h1>

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

export default EmailInbox;
