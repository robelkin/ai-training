import React from "react";

import { Button, Card, Dropdown, Table, ProgressBar } from "react-bootstrap";
import { MoreHorizontal } from "lucide-react";

import brand1 from "../../../assets/img/brands/brand-1.svg";
import brand2 from "../../../assets/img/brands/brand-2.svg";
import brand3 from "../../../assets/img/brands/brand-3.svg";
import brand4 from "../../../assets/img/brands/brand-4.svg";
import brand5 from "../../../assets/img/brands/brand-5.svg";

const Projects = () => (
  <Card className="flex-fill w-100">
    <Card.Header>
      <div className="card-actions float-end">
        <Dropdown align="end">
          <Dropdown.Toggle as="a" bsPrefix="-">
            <MoreHorizontal />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another Action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Card.Title className="mb-0">Latest Projects</Card.Title>
    </Card.Header>
    <Table borderless className="my-0">
      <thead>
        <tr>
          <th>Name</th>
          <th className="d-none d-xxl-table-cell">Company</th>
          <th className="d-none d-xl-table-cell">Author</th>
          <th>Status</th>
          <th className="d-none d-xl-table-cell text-end">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <div className="bg-body-tertiary rounded-2">
                  <img className="p-2" src={brand1} alt="Project Apollo" />
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <strong>Project Apollo</strong>
                <div className="text-muted">Web, UI/UX Design</div>
              </div>
            </div>
          </td>
          <td className="d-none d-xxl-table-cell">
            <strong>Gantos</strong>
            <div className="text-muted">Real Estate</div>
          </td>
          <td className="d-none d-xl-table-cell">
            <strong>Carl Jenkins</strong>
            <div className="text-muted">HTML, JS, React</div>
          </td>
          <td>
            <div className="d-flex flex-column w-100">
              <span className="me-2 mb-1 text-muted">65%</span>
              <ProgressBar variant="success" className="progress-sm" now={65} />
            </div>
          </td>
          <td className="d-none d-xl-table-cell text-end">
            <Button variant="light" href="#">
              View
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <div className="bg-body-tertiary rounded-2">
                  <img className="p-2" src={brand2} alt="Project Bongo" />
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <strong>Project Bongo</strong>
                <div className="text-muted">Web</div>
              </div>
            </div>
          </td>
          <td className="d-none d-xxl-table-cell">
            <strong>Adray Transportation</strong>
            <div className="text-muted">Transportation</div>
          </td>
          <td className="d-none d-xl-table-cell">
            <strong>Bertha Martin</strong>
            <div className="text-muted">HTML, JS, Vue</div>
          </td>
          <td>
            <div className="d-flex flex-column w-100">
              <span className="me-2 mb-1 text-muted">33%</span>
              <ProgressBar variant="danger" className="progress-sm" now={33} />
            </div>
          </td>
          <td className="d-none d-xl-table-cell text-end">
            <Button variant="light" href="#">
              View
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <div className="bg-body-tertiary rounded-2">
                  <img className="p-2" src={brand3} alt="Project Canary" />
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <strong>Project Canary</strong>
                <div className="text-muted">Web, UI/UX Design</div>
              </div>
            </div>
          </td>
          <td className="d-none d-xxl-table-cell">
            <strong>Evans</strong>
            <div className="text-muted">Insurance</div>
          </td>
          <td className="d-none d-xl-table-cell">
            <strong>Stacie Hall</strong>
            <div className="text-muted">HTML, JS, Laravel</div>
          </td>
          <td>
            <div className="d-flex flex-column w-100">
              <span className="me-2 mb-1 text-muted">50%</span>
              <ProgressBar variant="warning" className="progress-sm" now={50} />
            </div>
          </td>
          <td className="d-none d-xl-table-cell text-end">
            <Button variant="light" href="#">
              View
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <div className="bg-body-tertiary rounded-2">
                  <img className="p-2" src={brand4} alt="Project Edison" />
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <strong>Project Edison</strong>
                <div className="text-muted">UI/UX Design</div>
              </div>
            </div>
          </td>
          <td className="d-none d-xxl-table-cell">
            <strong>Monsource Investment Group</strong>
            <div className="text-muted">Finance</div>
          </td>
          <td className="d-none d-xl-table-cell">
            <strong>Carl Jenkins</strong>
            <div className="text-muted">HTML, JS, React</div>
          </td>
          <td>
            <div className="d-flex flex-column w-100">
              <span className="me-2 mb-1 text-muted">80%</span>
              <ProgressBar variant="success" className="progress-sm" now={80} />
            </div>
          </td>
          <td className="d-none d-xl-table-cell text-end">
            <Button variant="light" href="#">
              View
            </Button>
          </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <div className="bg-body-tertiary rounded-2">
                  <img className="p-2" src={brand5} alt="Project Indigo" />
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <strong>Project Indigo</strong>
                <div className="text-muted">Web, UI/UX Design</div>
              </div>
            </div>
          </td>
          <td className="d-none d-xxl-table-cell">
            <strong>Edwards</strong>
            <div className="text-muted">Retail</div>
          </td>
          <td className="d-none d-xl-table-cell">
            <strong>Ashley Briggs</strong>
            <div className="text-muted">HTML, JS, Vue</div>
          </td>
          <td>
            <div className="d-flex flex-column w-100">
              <span className="me-2 mb-1 text-muted">78%</span>
              <ProgressBar variant="primary" className="progress-sm" now={78} />
            </div>
          </td>
          <td className="d-none d-xl-table-cell text-end">
            <Button variant="light" href="#">
              View
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

export default Projects;
