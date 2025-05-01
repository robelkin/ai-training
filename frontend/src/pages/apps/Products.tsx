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
import { useTable, useRowSelect, usePagination, Column } from "react-table";
import { Download, Plus, Search } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import product1 from "../../assets/img/products/product-1.png";
import product2 from "../../assets/img/products/product-2.png";
import product3 from "../../assets/img/products/product-3.png";
import product4 from "../../assets/img/products/product-4.png";
import product5 from "../../assets/img/products/product-5.png";
import product6 from "../../assets/img/products/product-6.png";
import product7 from "../../assets/img/products/product-7.png";
import product8 from "../../assets/img/products/product-8.png";
import product9 from "../../assets/img/products/product-9.png";
import product10 from "../../assets/img/products/product-10.png";
import product11 from "../../assets/img/products/product-11.png";
import product12 from "../../assets/img/products/product-12.png";

interface Product {
  id: number;
  itemName: string;
  color: string;
  price: string;
  stock: number;
  category: string;
  rating: string;
  reviews: number;
  image: string;
}

const data: Product[] = [
  {
    id: 1,
    itemName: "Apple iPad Pro",
    color: "Silver",
    price: "$ 1,399.00",
    stock: 48,
    category: "Tablets",
    rating: "4.6",
    reviews: 55,
    image: product9,
  },
  {
    id: 2,
    itemName: "Apple iPad Pro",
    color: "Space Gray",
    price: "$ 1,399.00",
    stock: 48,
    category: "Tablets",
    rating: "4.3",
    reviews: 25,
    image: product8,
  },
  {
    id: 3,
    itemName: "Apple iPhone 15 Pro Max",
    color: "Blue Titanium",
    price: "$ 1499.00",
    stock: 38,
    category: "Smartphones",
    rating: "4.6",
    reviews: 40,
    image: product4,
  },
  {
    id: 4,
    itemName: "Apple iPhone 15 Pro Max",
    color: "Natural Titanium",
    price: "$ 1499.00",
    stock: 30,
    category: "Smartphones",
    rating: "4.8",
    reviews: 50,
    image: product3,
  },
  {
    id: 5,
    itemName: "Apple iPhone 15 Pro Max",
    color: "White Titanium",
    price: "$ 1499.00",
    stock: 45,
    category: "Smartphones",
    rating: "4.9",
    reviews: 60,
    image: product5,
  },
  {
    id: 6,
    itemName: 'Apple MacBook Pro 16"',
    color: "Silver",
    price: "$ 2,399.00",
    stock: 55,
    category: "Notebooks",
    rating: "4.7",
    reviews: 45,
    image: product7,
  },
  {
    id: 7,
    itemName: 'Apple MacBook Pro 16"',
    color: "Space Black",
    price: "$ 2,399.00",
    stock: 50,
    category: "Notebooks",
    rating: "4.4",
    reviews: 30,
    image: product6,
  },
  {
    id: 8,
    itemName: "Apple Watch SE",
    color: "Midnight",
    price: "$ 299.00",
    stock: 49,
    category: "Smartwatches",
    rating: "4.7",
    reviews: 40,
    image: product11,
  },
  {
    id: 9,
    itemName: "Apple Watch SE",
    color: "Silver",
    price: "$ 299.00",
    stock: 30,
    category: "Smartwatches",
    rating: "4.7",
    reviews: 40,
    image: product12,
  },
  {
    id: 10,
    itemName: "Apple Watch SE",
    color: "Starlight",
    price: "$ 299.00",
    stock: 54,
    category: "Smartwatches",
    rating: "4.5",
    reviews: 35,
    image: product10,
  },
  {
    id: 11,
    itemName: "Apple Watch Series 9",
    color: "Midnight",
    price: "$ 349.00",
    stock: 42,
    category: "Smartwatches",
    rating: "4.2",
    reviews: 20,
    image: product1,
  },
  {
    id: 12,
    itemName: "Apple Watch Series 9",
    color: "Starlight",
    price: "$ 349.00",
    stock: 54,
    category: "Smartwatches",
    rating: "4.5",
    reviews: 35,
    image: product2,
  },
];

const columns: Column<Product>[] = [
  {
    Header: "Item Name",
    accessor: "itemName",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Category",
    accessor: "category",
  },
  {
    Header: "Rating",
    accessor: "rating",
  },
  {
    Header: "Actions",
  },
];

const Products: React.FC = () => {
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
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 6 },
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
      <Helmet title="Products" />
      <Container fluid>
        <h1 className="h3 mb-3">Products</h1>
        <Card>
          <Card.Body>
            <Row className="mb-3">
              <Col md={6} xl={4}>
                <InputGroup className="input-group-search">
                  <Form.Control
                    placeholder="Search products…"
                    aria-label="Search products"
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
                    <Plus /> New Product
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

                        if (index === 1) {
                          // Render image for the first column (Item Name)
                          return (
                            <td key={cell.column.id} {...cellProps}>
                              <div className="d-flex align-items-center">
                                <div className="p-2 rounded bg-body-tertiary d-flex justify-content-center align-items-center me-2 w-50px h-50px">
                                  <img
                                    src={row.original.image}
                                    className="mw-100 mh-100"
                                    alt={row.original.itemName}
                                  />
                                </div>
                                <p className="mb-0">
                                  {cell.render("Cell")}
                                  <br />{" "}
                                  <span className="text-muted">
                                    {row.original.color}
                                  </span>
                                </p>
                              </div>
                            </td>
                          );
                        } else if (index === 5) {
                          return (
                            <td key={cell.column.id} {...cellProps}>
                              <div className="d-flex align-items-center">
                                <FontAwesomeIcon
                                  icon={faStar}
                                  className="text-warning me-1"
                                />{" "}
                                {row.original.rating}
                                <span className="text-muted ms-1">
                                  out of {row.original.reviews} reviews
                                </span>
                              </div>
                            </td>
                          );
                        } else if (index === 6) {
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

export default Products;
