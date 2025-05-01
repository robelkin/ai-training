import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import dragula from "react-dragula";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Folder, MessageSquareMore } from "lucide-react";

import avatar1 from "../../assets/img/avatars/avatar.jpg";
import avatar2 from "../../assets/img/avatars/avatar-2.jpg";
import avatar3 from "../../assets/img/avatars/avatar-3.jpg";
import avatar4 from "../../assets/img/avatars/avatar-4.jpg";

const priorityClassNames = {
  high: "danger",
  medium: "primary",
  low: "success",
};

type PriorityType = keyof typeof priorityClassNames;

interface TaskType {
  title: string;
  description: string;
  avatar: string;
  comments: number;
  priority: PriorityType;
  category: string;
}

const todoTasks: TaskType[] = [
  {
    title: "Resolve billing issues",
    description:
      "In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a felis tristique",
    avatar: avatar4,
    comments: 8,
    priority: "high",
    category: "Support",
  },
  {
    title: "Brand logo design",
    description:
      "Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada",
    avatar: avatar1,
    comments: 12,
    priority: "low",
    category: "Design",
  },
  {
    title: "New landing page",
    description:
      "Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.",
    avatar: avatar2,
    comments: 7,
    priority: "medium",
    category: "Copywriting",
  },
  {
    title: "Auth flow bugfix",
    description:
      "Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis.",
    avatar: avatar3,
    comments: 3,
    priority: "low",
    category: "Development",
  },
];

const inProgressTasks: TaskType[] = [
  {
    title: "Auth flow bugfix",
    description:
      "Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis.",
    avatar: avatar3,
    comments: 3,
    priority: "low",
    category: "Development",
  },
  {
    title: "Brand logo design",
    description:
      "Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada",
    avatar: avatar1,
    comments: 12,
    priority: "low",
    category: "Design",
  },
  {
    title: "New landing page",
    description:
      "Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.",
    avatar: avatar2,
    comments: 7,
    priority: "medium",
    category: "Copywriting",
  },
];

const completedTasks: TaskType[] = [
  {
    title: "New landing page",
    description:
      "Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.",
    avatar: avatar2,
    comments: 7,
    priority: "medium",
    category: "Copywriting",
  },
  {
    title: "Resolve billing issues",
    description:
      "In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a felis tristique",
    avatar: avatar4,
    comments: 8,
    priority: "high",
    category: "Support",
  },
  {
    title: "Auth flow bugfix",
    description:
      "Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis.",
    avatar: avatar3,
    comments: 3,
    priority: "low",
    category: "Development",
  },
  {
    title: "Brand logo design",
    description:
      "Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada",
    avatar: avatar1,
    comments: 12,
    priority: "low",
    category: "Design",
  },
];

interface LaneType {
  name: string;
  children: React.ReactNode;
  onContainerLoaded: (container: any) => void;
}

const Lane = ({ name, children, onContainerLoaded }: LaneType) => {
  const handleContainerLoaded = (container: any) => {
    if (container) {
      onContainerLoaded(container);
    }
  };

  return (
    <Card>
      <Card.Header className="pb-0">
        <Card.Title>{name}</Card.Title>
      </Card.Header>
      <Card.Body>
        <div ref={handleContainerLoaded} style={{ minHeight: 180 }}>
          {children}
        </div>
        <div className="d-grid">
          <Button variant="primary" size="lg">
            Add new task
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

const Task = ({
  title,
  description,
  avatar,
  comments,
  priority,
  category,
}: TaskType) => (
  <Card className="mb-3 cursor-grab border">
    <Card.Header className="pb-0 px-3 pt-3">
      <div className="float-end">
        <span
          className={`badge badge-subtle-${priorityClassNames[priority]} text-capitalize`}
        >
          {priority}
        </span>
      </div>
      <Card.Title>{title}</Card.Title>
    </Card.Header>
    <Card.Body className="p-3">
      <p className="text-muted">{description}…</p>
      <p className="mb-0 float-end text-sm">
        <span className="d-inline-block pe-2">
          <Folder className="me-1 align-middle" />
          <span className="align-middle">{category}</span>
        </span>
        <span className="d-inline-block">
          <MessageSquareMore className="me-1 align-middle" />
          <span className="align-middle">
            <strong>{comments}</strong> Comments
          </span>
        </span>
      </p>
      <div className="mt-n1">
        <img
          src={avatar}
          width="32"
          height="32"
          className="rounded-circle"
          alt="Avatar"
        />
      </div>
    </Card.Body>
  </Card>
);

const containers: any = [];

const TasksKanban = () => {
  const onContainerReady = (container: any) => {
    containers.push(container);
  };

  useEffect(() => {
    dragula(containers);
  }, []);

  return (
    <React.Fragment>
      <Helmet title="Kanban Board" />
      <Container fluid className="p-0">
        <Button variant="primary" className="float-end mt-n1">
          <FontAwesomeIcon icon={faPlus} /> New task
        </Button>
        <h1 className="h3 mb-3">Kanban Board</h1>

        <Row>
          <Col lg={6} xl={4}>
            <Lane name="Upcoming" onContainerLoaded={onContainerReady}>
              {todoTasks.map((task, index) => (
                <Task
                  key={index}
                  avatar={task.avatar}
                  title={task.title}
                  description={task.description}
                  priority={task.priority}
                  comments={task.comments}
                  category={task.category}
                />
              ))}
            </Lane>
          </Col>
          <Col lg={6} xl={4}>
            <Lane name="In Progress" onContainerLoaded={onContainerReady}>
              {inProgressTasks.map((task, index) => (
                <Task
                  key={index}
                  avatar={task.avatar}
                  title={task.title}
                  description={task.description}
                  priority={task.priority}
                  comments={task.comments}
                  category={task.category}
                />
              ))}
            </Lane>
          </Col>
          <Col lg={6} xl={4}>
            <Lane name="Completed" onContainerLoaded={onContainerReady}>
              {completedTasks.map((task, index) => (
                <Task
                  key={index}
                  avatar={task.avatar}
                  title={task.title}
                  description={task.description}
                  priority={task.priority}
                  comments={task.comments}
                  category={task.category}
                />
              ))}
            </Lane>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default TasksKanban;
