import React from 'react';
import { Container } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';

export default function BottomPagination() {
    return <Container fluid className='d-flex justify-content-center mt-5'>
    <Pagination>
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item >{3}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
    </Pagination>
    </Container>
}