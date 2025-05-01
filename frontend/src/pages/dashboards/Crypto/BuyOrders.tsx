import React from "react";
import { Table, Card, Button } from "react-bootstrap";

const BuyOrders = () => {
  return (
    <Card className="flex-fill">
      <Card.Header>
        <div className="card-actions float-end">
          <Button variant="light" size="sm">
            View all
          </Button>
        </div>
        <Card.Title className="mb-0">Buy Orders</Card.Title>
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
            <td>0.03892000</td>
            <td className="d-none d-xl-table-cell">0.00873616</td>
            <td>0.00873616</td>
          </tr>
          <tr>
            <td>0.03890500</td>
            <td className="d-none d-xl-table-cell">2.58305468</td>
            <td>2.59179084</td>
          </tr>
          <tr>
            <td>0.03890132</td>
            <td className="d-none d-xl-table-cell">2.19999989</td>
            <td>4.79179073</td>
          </tr>
          <tr>
            <td>0.03890053</td>
            <td className="d-none d-xl-table-cell">0.00322305</td>
            <td>4.79501378</td>
          </tr>
          <tr>
            <td>0.03889706</td>
            <td className="d-none d-xl-table-cell">0.60738409</td>
            <td>5.40239787</td>
          </tr>
          <tr>
            <td>0.03888117</td>
            <td className="d-none d-xl-table-cell">0.49926179</td>
            <td>5.90165966</td>
          </tr>
          <tr>
            <td>0.03885500</td>
            <td className="d-none d-xl-table-cell">0.03877729</td>
            <td>5.94043695</td>
          </tr>
          <tr>
            <td>0.03884325</td>
            <td className="d-none d-xl-table-cell">0.00798318</td>
            <td>5.94842013</td>
          </tr>
          <tr>
            <td>0.03883474</td>
            <td className="d-none d-xl-table-cell">0.29455407</td>
            <td>6.24297420</td>
          </tr>
          <tr>
            <td>0.03881616</td>
            <td className="d-none d-xl-table-cell">0.00970404</td>
            <td>6.25267824</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};

export default BuyOrders;
