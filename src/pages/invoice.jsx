import React from "react";
import { SearchInput } from "../components/search-input/search-input.tsx";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { TableComp } from "../components/table/table.tsx";

export default function Invoice() {
  const arr = [];
  for (var i = 0; i < 20; i++) {
    arr.push("" + Math.floor(Math.random() * 10000000) + "");
  }

  const headings = [
    "Lp",
    "Id produktu",
    "Nazwa produktu",
    "Ilość",
    "J.M",
    "Cena zakupu netto",
    "VAT",
    "Cena zakupu brutto",
    "Zarządzaj",
  ];

  const orderItems = [
    ["588", "248", "488"],
    ["Iphone 15 pro", "Samsung s24", "Asus zenfone"],
    ["2", "1", "5"],
    ["szt", "szt", "szt"],
    ["5500.00 PLN", "3500.00 PLN", "2800.00 PLN"],
    ["23%", "23%", "23%"],
    ["5800.00 PLN", "4000.00 PLN", "3200.00 PLN"],
  ];
  return (
    <>
      <Container fluid className="mt-4 p-0 mb-4">
        <div>
          <h3>Wystaw fakturę</h3>
        </div>
      </Container>
      <Form className="mb-4">
        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>Imię</Form.Label>
            <Form.Control type="text" placeholder="Wpisz imię" />
          </Form.Group>

          <Form.Group as={Col} md="6">
            <Form.Label>Nazwisko</Form.Label>
            <Form.Control type="text" placeholder="Wpisz nazwisko" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Adres</Form.Label>
          <Form.Control placeholder="Wpisz adres" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" xl="4">
            <Form.Label>Miasto</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} md="6" xl="4">
            <Form.Label>Kraj</Form.Label>
            <Form.Select defaultValue="Polska">
              <option>Polska</option>
              <option>Niemcy</option>
              <option>Austria</option>
              <option>Słowacja</option>
              <option>Rumunia</option>
              <option>RPA</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} md="6" xl="4">
            <Form.Label>Kod pocztowy</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" xl="4">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Wpisz email" />
          </Form.Group>

          <Form.Group as={Col} md="6" xl="4">
            <Form.Label>Telefon</Form.Label>
            <Form.Control type="number" placeholder="000 000 000" />
          </Form.Group>

          <Form.Group as={Col} md="6" xl="4">
            <Form.Label>
              <b>Wpisz numer zamówienia</b>
            </Form.Label>
            <SearchInput items={arr} />
          </Form.Group>
        </Row>

        <Row className="mb-2 mt-4">
          <h3>Produkty w zamówieniu:</h3>
        </Row>
        <Row>
          <TableComp headings={headings} data={orderItems} />
        </Row>

        <Form.Group className="mb-3 mt-3">
          <Form.Check
            type="checkbox"
            label="Wyślij klientowi fakturę na maila"
          />
        </Form.Group>

        <Button variant="primary">Wygeneruj</Button>
      </Form>
    </>
  );
}
