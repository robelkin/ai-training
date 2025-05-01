import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Container,
  Card,
  Button,
  Row,
  Col,
  Form,
  InputGroup,
  Pagination,
} from "react-bootstrap";
import { Download, Plus, Search } from "lucide-react";
import { useTable, useRowSelect, usePagination, Column } from "react-table";

// Define the data types
interface OrderData {
  id: number;
  orderId: string;
  billingName: string;
  date: string;
  total: string;
  paymentMethod: string;
  paymentStatus: string;
}

const orderData: OrderData[] = [
  {
    id: 1,
    orderId: "#SK01",
    billingName: "Tony Sheley",
    date: "July 5, 2023",
    total: "$350 USD",
    paymentMethod: "Mastercard",
    paymentStatus: "Paid",
  },
  {
    id: 2,
    orderId: "#SK02",
    billingName: "Suzanna Miller",
    date: "July 20, 2023",
    total: "$450 USD",
    paymentMethod: "Visa",
    paymentStatus: "Failed",
  },
  {
    id: 3,
    orderId: "#SK03",
    billingName: "John Doe",
    date: "August 8, 2023",
    total: "$780 USD",
    paymentMethod: "PayPal",
    paymentStatus: "Paid",
  },
  {
    id: 4,
    orderId: "#SK04",
    billingName: "Alice Johnson",
    date: "August 15, 2023",
    total: "$320 USD",
    paymentMethod: "American Express",
    paymentStatus: "In process",
  },
  {
    id: 5,
    orderId: "#SK05",
    billingName: "Emily White",
    date: "August 29, 2023",
    total: "$600 USD",
    paymentMethod: "Visa",
    paymentStatus: "Paid",
  },
  {
    id: 6,
    orderId: "#SK06",
    billingName: "Michael Brown",
    date: "September 10, 2023",
    total: "$900 USD",
    paymentMethod: "Mastercard",
    paymentStatus: "Paid",
  },
  {
    id: 7,
    orderId: "#SK07",
    billingName: "David Lee",
    date: "September 25, 2023",
    total: "$750 USD",
    paymentMethod: "Visa",
    paymentStatus: "Paid",
  },
  {
    id: 8,
    orderId: "#SK08",
    billingName: "Emma Davis",
    date: "October 4, 2023",
    total: "$520 USD",
    paymentMethod: "PayPal",
    paymentStatus: "Paid",
  },
  {
    id: 9,
    orderId: "#SK09",
    billingName: "Lisa Taylor",
    date: "October 18, 2023",
    total: "$430 USD",
    paymentMethod: "American Express",
    paymentStatus: "Paid",
  },
  {
    id: 10,
    orderId: "#SK10",
    billingName: "Matthew Clark",
    date: "November 2, 2023",
    total: "$370 USD",
    paymentMethod: "Visa",
    paymentStatus: "Failed",
  },
  {
    id: 11,
    orderId: "#SK11",
    billingName: "Sarah Martinez",
    date: "November 17, 2024",
    total: "$680 USD",
    paymentMethod: "Mastercard",
    paymentStatus: "Paid",
  },
  {
    id: 12,
    orderId: "#SK12",
    billingName: "Jason Wilson",
    date: "November 19, 2024",
    total: "$290 USD",
    paymentMethod: "American Express",
    paymentStatus: "Paid",
  },
  {
    id: 13,
    orderId: "#SK13",
    billingName: "Michelle Harris",
    date: "November 25, 2024",
    total: "$480 USD",
    paymentMethod: "Visa",
    paymentStatus: "Paid",
  },
  {
    id: 14,
    orderId: "#SK14",
    billingName: "Ryan Thompson",
    date: "December 3, 2024",
    total: "$820 USD",
    paymentMethod: "PayPal",
    paymentStatus: "Paid",
  },
  {
    id: 15,
    orderId: "#SK15",
    billingName: "Karen Moore",
    date: "December 6, 2024",
    total: "$350 USD",
    paymentMethod: "Mastercard",
    paymentStatus: "Failed",
  },
  {
    id: 16,
    orderId: "#SK16",
    billingName: "Daniel Anderson",
    date: "December 11, 2024",
    total: "$730 USD",
    paymentMethod: "Visa",
    paymentStatus: "Paid",
  },
];

const orderColumns: Column<OrderData>[] = [
  {
    Header: "Order ID",
    accessor: "orderId",
  },
  {
    Header: "Billing Name",
    accessor: "billingName",
  },
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Total",
    accessor: "total",
  },
  {
    Header: "Payment Method",
    accessor: "paymentMethod",
  },
  {
    Header: "Payment Status",
    accessor: "paymentStatus",
  },
  {
    Header: "Actions",
  },
];

const Orders: React.FC = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns: orderColumns,
      data: orderData,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => {
            const { indeterminate, ...rest } = getToggleAllRowsSelectedProps();
            return (
              <div className="form-check fs-4" style={{ marginBottom: -2 }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  ref={(input) => {
                    if (input) input.indeterminate = indeterminate || false;
                  }}
                  {...rest}
                />
                <label className="form-check-label"></label>
              </div>
            );
          },
          Cell: ({ row }: { row: any }) => {
            const { indeterminate, ...rest } = row.getToggleRowSelectedProps();
            return (
              <div className="form-check fs-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  ref={(input) => {
                    if (input) input.indeterminate = indeterminate || false;
                  }}
                  {...rest}
                />
                <label className="form-check-label"></label>
              </div>
            );
          },
        },
        ...columns,
      ]);
    }
  );

  return (
    <React.Fragment>
      <Helmet title="Orders" />
      <Container fluid>
        <h1 className="h3 mb-3">Orders</h1>
        <Card>
          <Card.Body>
            <Row className="mb-3">
              <Col md={6} xl={4}>
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
              <Col md={6} xl={8}>
                <div className="text-sm-end">
                  <Button variant="light" className="btn-lg me-2">
                    <Download /> Export
                  </Button>
                  <Button variant="primary" className="btn-lg">
                    <Plus /> New Order
                  </Button>
                </div>
              </Col>
            </Row>
            <table {...getTableProps()} className="table w-100">
              <thead>
                {headerGroups.map((headerGroup) => {
                  const { key, ...headerGroupProps } =
                    headerGroup.getHeaderGroupProps();

                  return (
                    <tr key={key} {...headerGroupProps}>
                      {headerGroup.headers.map((column) => {
                        const { key, ...headerProps } = column.getHeaderProps();

                        return (
                          <th key={key} {...headerProps}>
                            {column.render("Header")}
                          </th>
                        );
                      })}
                    </tr>
                  );
                })}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  const { key, ...rowProps } = row.getRowProps();

                  return (
                    <tr key={key} {...rowProps}>
                      {row.cells.map((cell, index) => {
                        const { key, ...cellProps } = cell.getCellProps();

                        if (index === 6) {
                          return (
                            <td key={cell.column.id} {...cellProps}>
                              <span
                                className={`badge ${
                                  row.original.paymentStatus === "Paid"
                                    ? "badge-subtle-success"
                                    : row.original.paymentStatus === "Failed"
                                    ? "badge-subtle-danger"
                                    : "badge-subtle-warning"
                                }`}
                              >
                                {row.original.paymentStatus}
                              </span>
                            </td>
                          );
                        } else if (index === 7) {
                          return (
                            <td key={cell.column.id} {...cellProps}>
                              <Button variant="light">View</Button>
                            </td>
                          );
                        } else {
                          return (
                            <td key={cell.column.id} {...cellProps}>
                              {cell.render("Cell")}
                            </td>
                          );
                        }
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Row>
              <Col md={6}>
                <span className="mx-2 pt-1 d-block">
                  Page{" "}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>
                </span>
              </Col>
              <Col md={6}>
                <Pagination className="justify-content-end">
                  <Pagination.First
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                  />
                  <Pagination.Prev
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                  />
                  {pageOptions.map((pageNum) => (
                    <Pagination.Item
                      key={pageNum}
                      onClick={() => gotoPage(pageNum)}
                      active={pageNum === pageIndex}
                    >
                      {pageNum + 1}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                  />
                  <Pagination.Last
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                  />
                </Pagination>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default Orders;
