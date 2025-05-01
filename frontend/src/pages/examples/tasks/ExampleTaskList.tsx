import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  Container,
  Button,
  Table,
  Badge,
  Row,
  Col,
  Card,
  Spinner,
  Alert,
} from "react-bootstrap";
import { Plus } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

// Import backend types (adjust path if needed, or define locally/shared)
// Assuming types might be manually defined or generated elsewhere if not directly importable
// For demonstration, let's define simplified versions inline or assume they exist
// import { ExampleTask, TaskStatus, TaskPriority } from "../../../../../backend/src/types/prisma-types"; // Keep commented out

import { fetchApi } from "../../../utils/apiClient"; // CORRECTED relative path

// UNCOMMENTED: Manual type definitions based on Prisma schema:
enum TaskStatus {
  UPCOMING = 'UPCOMING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED'
}
enum TaskPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}
interface ExampleTask {
  id: string;
  name: string;
  description: string | null;
  status: TaskStatus;
  priority: TaskPriority;
  createdAt: string; // Dates will be strings from JSON
  updatedAt: string;
}

const priorityVariantMap: Record<TaskPriority, string> = {
  [TaskPriority.LOW]: "success",
  [TaskPriority.MEDIUM]: "warning",
  [TaskPriority.HIGH]: "danger",
};

const statusMap: Record<TaskStatus, string> = {
  [TaskStatus.UPCOMING]: "Upcoming",
  [TaskStatus.IN_PROGRESS]: "In Progress",
  [TaskStatus.COMPLETED]: "Completed",
};

interface TaskTableProps {
  tasks: ExampleTask[];
}

const TaskTable = ({ tasks }: TaskTableProps) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th className="align-middle w-25px">
          </th>
          <th className="align-middle w-50">Name</th>
          <th className="align-middle d-none d-xl-table-cell">Description</th>
          <th className="align-middle d-none d-xxl-table-cell">Created</th>
          <th className="align-middle">Priority</th>
          <th className="align-middle text-end">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>
            </td>
            <td>
              <strong>{task.name}</strong>
            </td>
            <td className="d-none d-xl-table-cell">{task.description || '-'}</td>
            <td className="d-none d-xxl-table-cell">{new Date(task.createdAt).toLocaleDateString()}</td>
            <td>
              <Badge bg="" className={`badge-subtle-${priorityVariantMap[task.priority]}`}>
                {task.priority}
              </Badge>
            </td>
            <td className="text-end">
              {" "}
              <Button variant="light" size="sm">View</Button>{" "}
            </td>
          </tr>
        ))}
        {tasks.length === 0 && (
            <tr>
                <td colSpan={6} className="text-center p-3">No tasks in this category.</td>
            </tr>
        )}
      </tbody>
    </Table>
  );
};

interface TaskBoardProps {
  title: string;
  tasks: ExampleTask[];
}

const TaskBoard = ({ title, tasks }: TaskBoardProps) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Row className="mb-2">
          <Col xs={6}>
            <Card.Title as="h5">{title}</Card.Title>
          </Col>
          <Col xs={6}>
            <div className="text-sm-end">
              <Button
                variant="primary"
                size="sm"
              >
                <Plus size={18} /> New Task
              </Button>
            </div>
          </Col>
        </Row>
        <TaskTable tasks={tasks} />
      </Card.Body>
    </Card>
  );
};

const ExampleTaskList = () => {
  const [tasks, setTasks] = useState<ExampleTask[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showIntroAlert, setShowIntroAlert] = useState<boolean>(true);

  useEffect(() => {
    const loadTasks = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const fetchedTasks = await fetchApi<ExampleTask[]>('/examples/tasks');
        setTasks(fetchedTasks || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch tasks');
        setTasks([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadTasks();
  }, []);

  const upcomingTasks = tasks.filter((task) => task.status === TaskStatus.UPCOMING);
  const inProgressTasks = tasks.filter((task) => task.status === TaskStatus.IN_PROGRESS);
  const completedTasks = tasks.filter((task) => task.status === TaskStatus.COMPLETED);

  return (
    <React.Fragment>
      <Helmet title="Example Task List" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Example Task List</h1>

        {/* Introductory Blurb - Outline Style (matching example) */}
        {showIntroAlert && (
          <Alert 
            variant="primary" 
            className="alert-outline"
            onClose={() => setShowIntroAlert(false)}
            dismissible
          >
            <div className="alert-icon">
              <FontAwesomeIcon icon={faBell} fixedWidth />
            </div>
            <div className="alert-message">
              <strong>Welcome to the Task Example!</strong>
              <p className="mb-2">
                This page demonstrates a basic task list connected to a backend API. 
                The tasks you see below are fetched live from the database via 
                <code>/api/examples/tasks</code>.
              </p>
              <p className="mb-1">
                While the read functionality is complete, there are still features 
                to implement as outlined in the project plan (
                <a href="/docs/plans/01-Task-Example-API.md" target="_blank" rel="noopener noreferrer"><code>docs/plans/01-Task-Example-API.md</code></a>).
                Your next steps are to implement the following, ideally using AI assistance:
              </p>
              <ul>
                <li>Connect the 'New Task' button to the POST endpoint.</li>
                <li>Implement functionality to update task status (mark complete/incomplete) via the PUT endpoint.</li>
                <li>Implement functionality to delete tasks via the DELETE endpoint.</li>
                <li>Replace the 'View' button with an 'Edit' button and implement task editing functionality.</li>
              </ul>
            </div>
          </Alert>
        )}

        {isLoading && (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}

        {error && (
          <Alert variant="danger">
            <strong>Error:</strong> {error}
          </Alert>
        )}

        {!isLoading && !error && (
          <>
            <TaskBoard title={statusMap[TaskStatus.UPCOMING]} tasks={upcomingTasks} />
            <TaskBoard title={statusMap[TaskStatus.IN_PROGRESS]} tasks={inProgressTasks} />
            <TaskBoard title={statusMap[TaskStatus.COMPLETED]} tasks={completedTasks} />
          </>
        )}
      </Container>
    </React.Fragment>
  );
};

export default ExampleTaskList; 