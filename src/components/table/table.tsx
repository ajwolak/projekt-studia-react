import React from "react";
import { TableProps } from "./table-props";
import { Button, Table } from "react-bootstrap";

export const TableComp = ({ headings, data }: TableProps) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          {headings.map((value, index) => (
            <th key={index}>{value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 10 }).map((_, index) => {
          const random = Math.floor(Math.random() * 3);

          return (
            <tr key={index}>
              <td>{index + 1}</td>
              {data.map((c_value, c_index) => (
                <td key={c_index}>{c_value[random]}</td>
              ))}
              <td style={{ minWidth: "200px" }}>
                <Button
                  variant="danger"
                  style={{ float: "left", marginRight: "10px" }}
                >
                  Usuń
                </Button>
                <Button variant="primary" style={{ float: "left" }}>
                  Zobacz
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
