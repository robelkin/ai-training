import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import { Bar } from "react-chartjs-2";

import usePalette from "../../hooks/usePalette";

import avatar1 from "../../assets/img/avatars/avatar.jpg";
import avatar2 from "../../assets/img/avatars/avatar-2.jpg";
import avatar3 from "../../assets/img/avatars/avatar-3.jpg";
import avatar4 from "../../assets/img/avatars/avatar-4.jpg";
import avatar5 from "../../assets/img/avatars/avatar-5.jpg";

const Statistics = () => {
  return (
    <Row>
      <Col lg={6} xl={3} className="d-flex">
        <Card className="flex-fill">
          <Card.Header>
            <h5 className="card-title mb-0 mt-2">Income</h5>
          </Card.Header>
          <Card.Body className="my-0 pt-0">
            <Row className="d-flex align-items-center mb-3">
              <Col xs={8}>
                <h3 className="d-flex align-items-center mb-0 fw-light">
                  $37.500
                </h3>
              </Col>
              <Col xs={4} className="text-end">
                <span className="text-muted">57%</span>
              </Col>
            </Row>
            <ProgressBar
              variant="primary"
              now={57}
              className="progress progress-sm shadow-sm mb-1"
            />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={3} className="d-flex">
        <Card className="flex-fill">
          <Card.Header>
            <h5 className="card-title mb-0 mt-2">Orders</h5>
          </Card.Header>
          <Card.Body className="my-0 pt-0">
            <Row className="d-flex align-items-center mb-3">
              <Col xs={8}>
                <h3 className="d-flex align-items-center mb-0 fw-light">
                  3.282
                </h3>
              </Col>
              <Col xs={4} className="text-end">
                <span className="text-muted">82%</span>
              </Col>
            </Row>
            <ProgressBar
              variant="warning"
              now={82}
              className="progress progress-sm shadow-sm mb-1"
            />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={3} className="d-flex">
        <Card className="flex-fill">
          <Card.Header>
            <h5 className="card-title mb-0 mt-2">Activity</h5>
          </Card.Header>
          <Card.Body className="my-0 pt-0">
            <Row className="d-flex align-items-center mb-3">
              <Col xs={8}>
                <h3 className="d-flex align-items-center mb-0 fw-light">
                  19.312
                </h3>
              </Col>
              <Col xs={4} className="text-end">
                <span className="text-muted">64%</span>
              </Col>
            </Row>
            <ProgressBar
              variant="info"
              now={64}
              className="progress progress-sm shadow-sm mb-1"
            />
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={3} className="d-flex">
        <Card className="flex-fill">
          <Card.Header>
            <h5 className="card-title mb-0 mt-2">Revenue</h5>
          </Card.Header>
          <Card.Body className="my-0 pt-0">
            <Row className="d-flex align-items-center mb-3">
              <Col xs={8}>
                <h3 className="d-flex align-items-center mb-0 fw-light">
                  $82.400
                </h3>
              </Col>
              <Col xs={4} className="text-end">
                <span className="text-muted">32%</span>
              </Col>
            </Row>
            <ProgressBar
              variant="success"
              now={32}
              className="progress progress-sm shadow-sm mb-1"
            />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

const Description = () => {
  return (
    <Card>
      <Card.Header>
        <h5 className="card-title mb-0">Upgrade CRM software</h5>
        <div className="badge bg-info my-2">In progress</div>
      </Card.Header>
      <Card.Body className="pt-0">
        <h5>Description</h5>
        <p className="text-muted">
          Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
          quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam
          nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
        </p>
        <p className="text-muted">
          Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet
          nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer
          ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.
        </p>
        <div>
          <h5>Assignee</h5>
          <img
            src={avatar3}
            className="rounded-circle me-1"
            alt="Avatar"
            width="34"
            height="34"
          />
          <img
            src={avatar2}
            className="rounded-circle me-1"
            alt="Avatar"
            width="34"
            height="34"
          />
          <img
            src={avatar1}
            className="rounded-circle me-1"
            alt="Avatar"
            width="34"
            height="34"
          />
        </div>
      </Card.Body>
    </Card>
  );
};

const Comments = () => {
  return (
    <Card>
      <Card.Header>
        <h5 className="card-title mb-0">Comments (4)</h5>
      </Card.Header>
      <Card.Body>
        <div className="d-flex align-items-start">
          <img
            src={avatar5}
            width="56"
            height="56"
            className="rounded-circle me-3"
            alt="Ashley Briggs"
          />
          <div className="flex-grow-1">
            <small className="float-end">5m ago</small>
            <p className="mb-2">
              <strong>Ashley Briggs</strong>
            </p>
            <p>
              Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
              sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
              Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
              Maecenas nec odio et ante tincidunt tempus.
            </p>
            <small className="text-muted">Today 7:51 pm</small>
            <br />
            <div className="d-flex align-items-start mt-3">
              <div className="pe-2">
                <img
                  src={avatar4}
                  width="36"
                  height="36"
                  className="rounded-circle me-2"
                  alt="Stacie Hall"
                />
              </div>
              <div className="flex-grow-1">
                <p className="text-muted">
                  <strong>Stacie Hall</strong>: Nam pretium turpis et arcu. Duis
                  arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis,
                  ipsum. Sed aliquam ultrices mauris. Integer ante arcu,
                  accumsan a, consectetuer eget, posuere ut, mauris.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex align-items-start">
          <img
            src={avatar1}
            width="56"
            height="56"
            className="rounded-circle me-3"
            alt="Chris Wood"
          />
          <div className="flex-grow-1">
            <small className="float-end">30m ago</small>
            <p className="mb-2">
              <strong>Chris Wood</strong>
            </p>
            <p>
              Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
              sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
              Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
            </p>
            <small className="text-muted">Today 7:26 pm</small>
            <br />
          </div>
        </div>
        <hr />
        <div className="d-flex align-items-start">
          <img
            src={avatar4}
            width="56"
            height="56"
            className="rounded-circle me-3"
            alt="Stacie Hall"
          />
          <div className="flex-grow-1">
            <small className="float-end">45m ago</small>
            <p className="mb-2">
              <strong>Stacie Hall</strong>
            </p>
            <p>
              Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
              imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
              mauris.
            </p>
            <small className="text-muted">Today 7:11 pm</small>
            <br />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

const Information = () => {
  return (
    <Card>
      <Card.Header>
        <h5 className="card-title mb-0">Information</h5>
      </Card.Header>
      <Card.Body>
        <Row className="mb-3">
          <Col xs={4} xxl={3}>
            <strong>Assignee</strong>
          </Col>
          <Col xs={8} xxl={9}>
            <img
              src={avatar3}
              className="rounded-circle me-1 mt-n1"
              alt="Avatar"
              width="28"
              height="28"
            />
            <img
              src={avatar2}
              className="rounded-circle me-1 mt-n1"
              alt="Avatar"
              width="28"
              height="28"
            />
            <img
              src={avatar1}
              className="rounded-circle me-1 mt-n1"
              alt="Avatar"
              width="28"
              height="28"
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={4} xxl={3}>
            <strong>Reporter</strong>
          </Col>
          <Col xs={8} xxl={9}>
            <img
              src={avatar4}
              className="rounded-circle me-1 mt-n1"
              alt="Avatar"
              width="28"
              height="28"
            />
          </Col>
        </Row>

        <hr />

        <Row className="mb-3">
          <Col xs={4} xxl={3}>
            <strong>Created</strong>
          </Col>
          <Col xs={8} xxl={9}>
            <p className="mb-1">2 February 2024</p>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={4} xxl={3}>
            <strong>Start</strong>
          </Col>
          <Col xs={8} xxl={9}>
            <p className="mb-1">23 February 2024</p>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={4} xxl={3}>
            <strong>End</strong>
          </Col>
          <Col xs={8} xxl={9}>
            <p className="mb-0">22 November 2024</p>
          </Col>
        </Row>

        <hr />

        <Row className="mb-3">
          <Col xs={4} xxl={3}>
            <strong>Budget</strong>
          </Col>
          <Col xs={8} xxl={9}>
            <p className="mb-0">$28,300</p>
          </Col>
        </Row>

        <hr />

        <Row className="mb-1">
          <Col xs={4} xxl={3}>
            <strong>Status</strong>
          </Col>
          <Col xs={8} xxl={9}>
            <span className="badge bg-info mb-1">In progress</span>
          </Col>
        </Row>
        <Row className="mb-1">
          <Col xs={4} xxl={3}>
            <strong>Logged</strong>
          </Col>
          <Col xs={8} xxl={9}>
            <p className="mb-1">63h</p>
          </Col>
        </Row>
        <Row className="mb-0">
          <Col xs={4} xxl={3}>
            <strong>Estimated</strong>
          </Col>
          <Col xs={8} xxl={9}>
            <p className="mb-0">120h</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

const Chart = () => {
  const palette = usePalette();

  const data = {
    labels: [
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
    ],
    datasets: [
      {
        label: "Last year",
        backgroundColor: palette.primary,
        borderColor: palette.primary,
        hoverBackgroundColor: palette.primary,
        hoverBorderColor: palette.primary,
        data: [6700, 4100, 5500, 6200, 4500, 5500, 7300, 6000, 7600, 4800],
        barPercentage: 0.75,
        categoryPercentage: 0.5,
      },
      {
        label: "This year",
        backgroundColor: "#E8EAED",
        borderColor: "#E8EAED",
        hoverBackgroundColor: "#E8EAED",
        hoverBorderColor: "#E8EAED",
        data: [6600, 2400, 4800, 5200, 5100, 4400, 5300, 6200, 7900, 5100],
        barPercentage: 0.75,
        categoryPercentage: 0.5,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        stacked: false,
        ticks: {
          stepSize: 1000,
        },
      },
      x: {
        stacked: false,
        grid: {
          color: "transparent",
        },
      },
    },
  };

  return (
    <Card>
      <Card.Header>
        <h5 className="card-title mb-0">Earnings</h5>
      </Card.Header>
      <Card.Body>
        <div className="chart">
          <Bar data={data} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
};

const ProjectsDetails = () => {
  return (
    <React.Fragment>
      <Helmet title="Project Details" />
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Project Details</h1>

        <Statistics />

        <Row>
          <Col lg={6} xxl={8}>
            <Description />
            <Comments />
          </Col>
          <Col lg={6} xxl={4}>
            <Information />
            <Chart />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ProjectsDetails;
