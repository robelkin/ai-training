import React from "react";

import { Badge, Card, Dropdown, Table } from "react-bootstrap";

import { MoreHorizontal } from "lucide-react";

import brand1 from "../../../assets/img/brands/brand-1.svg";
import brand2 from "../../../assets/img/brands/brand-2.svg";
import brand3 from "../../../assets/img/brands/brand-3.svg";
import brand4 from "../../../assets/img/brands/brand-4.svg";
import brand5 from "../../../assets/img/brands/brand-5.svg";

const Products = () => (
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
      <Card.Title className="mb-0">Top Selling Products</Card.Title>
    </Card.Header>
    <Table borderless className="my-0">
      <thead>
        <tr>
          <th>Name</th>
          <th className="d-none d-xxl-table-cell">Company</th>
          <th className="d-none d-xl-table-cell">Assigned</th>
          <th className="d-none d-xl-table-cell text-end">Orders</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <div className="bg-body-tertiary rounded-2">
                  <img className="p-2" src={brand4} alt="Aurora" />
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <strong>Aurora</strong>
                <div className="text-muted">UI Kit</div>
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
          <td className="d-none d-xl-table-cell text-end">520</td>
          <td>
            <Badge bg="success">In progress</Badge>
          </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <div className="bg-body-tertiary rounded-2">
                  <img className="p-2" src={brand1} alt="Bender" />
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <strong>Bender</strong>
                <div className="text-muted">Dashboard</div>
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
          <td className="d-none d-xl-table-cell text-end">240</td>
          <td>
            <Badge bg="warning">Paused</Badge>
          </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <div className="bg-body-tertiary rounded-2">
                  <img className="p-2" src={brand5} alt="Camelot" />
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <strong>Camelot</strong>
                <div className="text-muted">Dashboard</div>
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
          <td className="d-none d-xl-table-cell text-end">180</td>
          <td>
            <Badge bg="success">In progress</Badge>
          </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <div className="bg-body-tertiary rounded-2">
                  <img className="p-2" src={brand2} alt="Edison" />
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <strong>Edison</strong>
                <div className="text-muted">UI Kit</div>
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
          <td className="d-none d-xl-table-cell text-end">410</td>
          <td>
            <Badge bg="danger">Cancelled</Badge>
          </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <div className="bg-body-tertiary rounded-2">
                  <img className="p-2" src={brand3} alt="Fusion" />
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <strong>Fusion</strong>
                <div className="text-muted">Dashboard</div>
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
          <td className="d-none d-xl-table-cell text-end">250</td>
          <td>
            <Badge bg="warning">Paused</Badge>
          </td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

export default Products;
