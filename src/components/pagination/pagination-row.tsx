import React from "react";
import { Container } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { PaginationProps } from "./pagination-props";
export const PaginationRow = (props: PaginationProps) => {
  const { paginationSize } = props;
  var forSize = paginationSize > 3 ? 2 : paginationSize - 1;
  return (
    <Container fluid className="d-flex justify-content-center mt-5">
      <Pagination>
        {paginationSize > 3 && <Pagination.Prev />}

        <Pagination.Item active>{1}</Pagination.Item>
        {paginationSize > 1 && (
          <>
            {Array.from({ length: forSize }).map((_, i) => {
              return <Pagination.Item key={i + 1}>{i + 2}</Pagination.Item>;
            })}
          </>
        )}
        {paginationSize > 3 && (
          <>
            <Pagination.Ellipsis />
            <Pagination.Item>{paginationSize}</Pagination.Item>
            <Pagination.Next />
          </>
        )}
      </Pagination>
    </Container>
  );
};
