import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  ProgressBar,
  Row,
  Table,
} from "react-bootstrap";

import {
  Archive,
  BookType,
  CircleDollarSign,
  Clock,
  Code,
  Computer,
  Database,
  File,
  FileAudio,
  FileCode,
  FileJson,
  FileSpreadsheet,
  FileText,
  FileVideo,
  Folder,
  Hexagon,
  Inbox,
  LayoutGrid,
  Luggage,
  Paintbrush2,
  Search,
  Share,
  Star,
  Trash,
  Upload,
} from "lucide-react";

const Navigation = () => {
  return (
    <Card>
      <Card.Body>
        <div className="d-grid mb-3">
          <Button variant="primary" size="lg">
            <Upload size={24} /> Upload File
          </Button>
        </div>

        <ul className="list-group list-group-flush mb-3">
          <li className="list-group-item px-2">
            <Upload size={24} className="me-2" />
            My Files
          </li>
          <li className="list-group-item px-2">
            <Folder size={24} className="me-2" />
            My Drive
          </li>
          <li className="list-group-item px-2">
            <Computer size={24} className="me-2" />
            Computer
          </li>
          <li className="list-group-item px-2">
            <Share size={24} className="me-2" />
            Shared with me
          </li>
          <li className="list-group-item px-2">
            <Clock size={24} className="me-2" />
            Recent
          </li>
          <li className="list-group-item px-2">
            <Star size={24} className="me-2" />
            Starred
          </li>
        </ul>

        <ul className="list-group list-group-flush mb-5">
          <li className="list-group-item px-2">
            <Inbox size={24} className="me-2" />
            Spam
          </li>
          <li className="list-group-item px-2">
            <Archive size={24} className="me-2" />
            Archive
          </li>
          <li className="list-group-item px-2">
            <Trash size={24} className="me-2" />
            Bin
          </li>
          <li className="list-group-item px-2">
            <Database size={24} className="me-2" />
            Storage
          </li>
        </ul>

        <h6 className="text-uppercase">Storage</h6>
        <ProgressBar variant="danger" now={73} label="73%" />
        <p className="text-muted font-12 mb-0">72.6 GB (73%) of 100 GB used</p>
      </Card.Body>
    </Card>
  );
};

interface MyFilesCategoryProps {
  name: string;
  files: string;
  gb: string;
  icon: any;
  color: string;
}

const MyFilesCategory = ({
  name,
  files,
  gb,
  icon: Icon,
  color,
}: MyFilesCategoryProps) => {
  return (
    <Col xs={6} xxl={3}>
      <Card className="shadow-none border">
        <Card.Body className="p-3">
          <Icon className={`align-middle fs-1 mb-3 text-${color}`} />
          <div className="d-flex w-100">
            <div className="overflow-hidden me-auto">
              <h5 className="mb-1">
                <span className="text-body text-truncate">{name}</span>
              </h5>
              <p className="text-muted mb-0 text-truncate">{files} Files</p>
            </div>
            <div className="align-self-end ms-2">
              <p className="text-muted mb-0">{gb}GB</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

const MyFiles = () => {
  return (
    <Card>
      <Card.Header className="pb-0">
        <h5 className="card-title mt-2">My Files</h5>
      </Card.Header>
      <Card.Body className="pb-0">
        <Row>
          <MyFilesCategory
            icon={Paintbrush2}
            color="warning"
            name="Design"
            files="12"
            gb="8"
          />
          <MyFilesCategory
            icon={Code}
            color="success"
            name="Development"
            files="108"
            gb="12"
          />
          <MyFilesCategory
            icon={Hexagon}
            color="primary"
            name="Branding"
            files="34"
            gb="2"
          />
          <MyFilesCategory
            icon={LayoutGrid}
            color="danger"
            name="Applications"
            files="8"
            gb="26"
          />
          <MyFilesCategory
            icon={CircleDollarSign}
            color="info"
            name="Finance"
            files="50"
            gb="9"
          />
          <MyFilesCategory
            icon={BookType}
            color="primary"
            name="Translations"
            files="40"
            gb="2"
          />
          <MyFilesCategory
            icon={Luggage}
            color="success"
            name="Travel"
            files="60"
            gb="5"
          />
          <MyFilesCategory
            icon={Archive}
            color="secondary"
            name="Backups"
            files="320"
            gb="16"
          />
        </Row>
      </Card.Body>
    </Card>
  );
};

const RecentFiles = () => {
  return (
    <Card>
      <Card.Header className="pb-0">
        <Row>
          <Col md={7}>
            <h5 className="card-title mt-2">Recent Files</h5>
          </Col>
          <Col md={5} className="mb-md-0">
            <InputGroup className="input-group-search">
              <Form.Control
                placeholder="Search orders…"
                aria-label="Search orders"
              />
              <Button variant="">
                <Search className="lucide" />
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Table>
          <thead>
            <tr>
              <th className="w-50">Name</th>
              <th>Date Modified</th>
              <th>Size</th>
              <th className="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <FileCode className="me-1" /> app.js
              </td>
              <td>April 15, 2024</td>
              <td>25 KB</td>
              <td className="text-end">
                <Button variant="light">View</Button>
              </td>
            </tr>
            <tr>
              <td>
                <FileJson className="me-1" /> styles.css
              </td>
              <td>February 28, 2024</td>
              <td>12 KB</td>
              <td className="text-end">
                <Button variant="light">View</Button>
              </td>
            </tr>
            <tr>
              <td>
                <FileSpreadsheet className="me-1" /> data.xlsx
              </td>
              <td>March 12, 2024</td>
              <td>1 MB</td>
              <td className="text-end">
                <Button variant="light">View</Button>
              </td>
            </tr>
            <tr>
              <td>
                <FileAudio className="me-1" /> audio.mp3
              </td>
              <td>May 1, 2024</td>
              <td>3 MB</td>
              <td className="text-end">
                <Button variant="light">View</Button>
              </td>
            </tr>
            <tr>
              <td>
                <FileVideo className="me-1" /> video.mp4
              </td>
              <td>December 18, 2023</td>
              <td>50 MB</td>
              <td className="text-end">
                <Button variant="light">View</Button>
              </td>
            </tr>
            <tr>
              <td>
                <File className="me-1" /> report.pdf
              </td>
              <td>November 20, 2023</td>
              <td>5 MB</td>
              <td className="text-end">
                <Button variant="light">View</Button>
              </td>
            </tr>
            <tr>
              <td>
                <File className="me-1" /> presentation.pptx
              </td>
              <td>September 3, 2023</td>
              <td>10 MB</td>
              <td className="text-end">
                <Button variant="light">View</Button>
              </td>
            </tr>
            <tr>
              <td>
                <FileText className="me-1" /> index.html
              </td>
              <td>August 8, 2023</td>
              <td>9 KB</td>
              <td className="text-end">
                <Button variant="light">View</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

const FileManager = () => {
  return (
    <React.Fragment>
      <Helmet title="File Manager" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">File Manager</h1>

        <Row>
          <Col md={5} xl={3}>
            <Navigation />
          </Col>
          <Col md={7} xl={9}>
            <MyFiles />
            <RecentFiles />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default FileManager;
