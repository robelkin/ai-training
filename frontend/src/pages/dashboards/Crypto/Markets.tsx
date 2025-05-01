import React from "react";
import { Card, Dropdown, Table } from "react-bootstrap";

import { MoreHorizontal } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";

interface TableRowType {
  star: boolean;
  coin: string;
  price: string;
  volume: string;
  change: string;
}

const TableRow = ({ star, coin, price, volume, change }: TableRowType) => {
  return (
    <tr>
      <td>
        <FontAwesomeIcon
          icon={star ? faStarSolid : faStarRegular}
          className={`fa-sm cursor-pointer text-${star ? "warning" : "muted"}`}
        />
      </td>
      <td>{coin}</td>
      <td className="text-end">{price}</td>
      <td className="d-none d-xl-table-cell text-end">{volume}</td>
      <td
        className={`d-none d-xl-table-cell text-end text-${
          Number(change) >= 0 ? "success" : "danger"
        }`}
      >
        {change}
      </td>
    </tr>
  );
};

const Markets = () => (
  <Card className="flex-fill">
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
      <Card.Title className="mb-0">Markets</Card.Title>
    </Card.Header>
    <Table size="sm" striped className="my-0">
      <thead>
        <tr>
          <th>
            <FontAwesomeIcon
              icon={faStarSolid}
              className={`fa-sm cursor-pointer text-warning`}
            />
          </th>
          <th>Coin</th>
          <th>Price</th>
          <th className="d-none d-xl-table-cell">Volume</th>
          <th className="d-none d-xl-table-cell">Change</th>
        </tr>
      </thead>
      <tbody>
        <TableRow
          star={true}
          coin="ETH"
          price="0.02309756"
          volume="427.563"
          change="+1.91"
        />
        <TableRow
          star={true}
          coin="XRP"
          price="0.00002205"
          volume="132.691"
          change="+0.64"
        />
        <TableRow
          star={true}
          coin="ETC"
          price="0.00077779"
          volume="32.982"
          change="-6.71"
        />
        <TableRow
          star={true}
          coin="LTC"
          price="0.00485685"
          volume="31.268"
          change="+1.88"
        />
        <TableRow
          star={true}
          coin="XMR"
          price="0.00700518"
          volume="28.567"
          change="-1.26"
        />
        <TableRow
          star={false}
          coin="BSC"
          price="0.02105473"
          volume="25.960"
          change="+0.10"
        />
        <TableRow
          star={false}
          coin="ABC"
          price="0.02613303"
          volume="21.597"
          change="-3.20"
        />
        <TableRow
          star={false}
          coin="TRX"
          price="0.00000165"
          volume="14.106"
          change="-0.61"
        />
        <TableRow
          star={false}
          coin="SC"
          price="0.00000026"
          volume="9.531"
          change="+13.04"
        />
        <TableRow
          star={false}
          coin="OMG"
          price="0.00019483"
          volume="8.820"
          change="+3.67"
        />
        <TableRow
          star={false}
          coin="CHR"
          price="0.00000223"
          volume="7.428"
          change="-4.21"
        />
        <TableRow
          star={false}
          coin="AVA"
          price="0.00003667"
          volume="6.863"
          change="+13.60"
        />
        <TableRow
          star={false}
          coin="DASH"
          price="0.00825500"
          volume="6.693"
          change="-1.51"
        />
        <TableRow
          star={false}
          coin="LINK"
          price="0.00043873"
          volume="6.290"
          change="+2.44"
        />
        <TableRow
          star={false}
          coin="EOS"
          price="0.00028505"
          volume="6.144"
          change="-1.62"
        />
      </tbody>
    </Table>
  </Card>
);

export default Markets;
