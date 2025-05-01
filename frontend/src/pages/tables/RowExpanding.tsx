import React from "react";
import { Helmet } from "react-helmet-async";
import { useTable, useExpanded, TableOptions } from "react-table";

import { Card, Container, Table } from "react-bootstrap";
import { PlusCircle, MinusCircle } from "lucide-react";

import { tableData, tableColumns } from "./data";

const RowExpandingTable = (props: TableOptions<Record<string, unknown>>) => {
  const { columns, data } = props;

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useExpanded // Use the useExpanded plugin hook
    );

  return (
    <Card>
      <Card.Header>
        <Card.Title>Row Expanding</Card.Title>
        <h6 className="card-subtitle text-muted">
          Expandable rows by react-table
        </h6>
      </Card.Header>
      <Card.Body>
        <Table striped bordered {...getTableProps()}>
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
            {rows.map((row, i) => {
              prepareRow(row);
              const { key, ...rowProps } = row.getRowProps();
              return (
                <tr key={key} {...rowProps}>
                  {row.cells.map((cell) => {
                    const { key, ...cellProps } = cell.getCellProps();
                    return (
                      <td key={key} {...cellProps}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

const tableColumnsExpandable = [
  {
    // Build our expander column
    id: "expander", // Make sure it has an ID
    Header: ({
      getToggleAllRowsExpandedProps,
      isAllRowsExpanded,
    }: {
      getToggleAllRowsExpandedProps: any;
      isAllRowsExpanded: boolean;
    }) => (
      <span {...getToggleAllRowsExpandedProps()}>
        {isAllRowsExpanded ? (
          <MinusCircle className="lucide" />
        ) : (
          <PlusCircle className="lucide" />
        )}
      </span>
    ),
    Cell: ({ row }: { row: any }) =>
      // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
      // to build the toggle for expanding a row
      row.canExpand ? (
        <span
          {...row.getToggleRowExpandedProps({
            style: {
              // We can even use the row.depth property
              // and paddingLeft to indicate the depth
              // of the row
              paddingLeft: `${row.depth * 2}rem`,
            },
          })}
        >
          {row.isExpanded ? (
            <MinusCircle className="lucide" />
          ) : (
            <PlusCircle className="lucide" />
          )}
        </span>
      ) : null,
  },
  ...tableColumns,
];

const RowExpanding = () => (
  <React.Fragment>
    <Helmet title="Row Expanding" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Row Expanding</h1>

      <RowExpandingTable
        // @ts-ignore
        columns={tableColumnsExpandable}
        data={tableData.slice(0, 10)}
      />
    </Container>
  </React.Fragment>
);

export default RowExpanding;
