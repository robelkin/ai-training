import React from "react";
import { Table, Card, Button } from "react-bootstrap";

const SellOrders = () => {
  return (
    <Card className="flex-fill">
      <Card.Header>
        <div className="card-actions float-end">
          <Button variant="light" size="sm">
            View all
          </Button>
        </div>
        <Card.Title className="mb-0">Sell Orders</Card.Title>
      </Card.Header>
      <Table striped size="sm" className="my-0">
        <thead>
          <tr>
            <th>Price</th>
            <th className="d-none d-xl-table-cell">BTC</th>
            <th>Sum(BTC)</th>
          </tr>
        </thead>
        <tbody className="text-end">
          <tr>
            <td>0.03892501</td>
            <td className="d-none d-xl-table-cell">1.24864875</td>
            <td>1.26329659</td>
          </tr>
          <tr>
            <td>0.03893754</td>
            <td className="d-none d-xl-table-cell">0.19373225</td>
            <td>1.45702884</td>
          </tr>
          <tr>
            <td>0.03895189</td>
            <td className="d-none d-xl-table-cell">0.00011222</td>
            <td>1.45714106</td>
          </tr>
          <tr>
            <td>0.03896593</td>
            <td className="d-none d-xl-table-cell">0.05366476</td>
            <td>1.51080582</td>
          </tr>
          <tr>
            <td>0.03897932</td>
            <td className="d-none d-xl-table-cell">0.30856527</td>
            <td>1.81937109</td>
          </tr>
          <tr>
            <td>0.03897933</td>
            <td className="d-none d-xl-table-cell">0.01276398</td>
            <td>1.83213507</td>
          </tr>
          <tr>
            <td>0.03899180</td>
            <td className="d-none d-xl-table-cell">0.00029556</td>
            <td>1.83243063</td>
          </tr>
          <tr>
            <td>0.03899784</td>
            <td className="d-none d-xl-table-cell">0.08005194</td>
            <td>1.91248257</td>
          </tr>
          <tr>
            <td>0.03899998</td>
            <td className="d-none d-xl-table-cell">0.10106578</td>
            <td>2.01354835</td>
          </tr>
          <tr>
            <td>0.03899999</td>
            <td className="d-none d-xl-table-cell">0.11699997</td>
            <td>2.13054832</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};

export default SellOrders;
