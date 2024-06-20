import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { TableComp } from "../components/table/table.tsx";
import { SearchInput } from "../components/search-input/search-input.tsx";
import { PaginationRow } from "../components/pagination/pagination-row.tsx";

export default function Orders() {
  const searchItems = [
    "Jan Kowalski",
    "Beata Szydło",
    "Grzegorz Braun",
    "jkowalski@interia.pl",
    "bszydlo@gmail.com",
    "strazakSam@onet.pl",
    "1579358",
    "7612058",
    "7803469",
  ];
  const headings = [
    "Lp.",
    "Dane klienta",
    "Numer zamówienia",
    "Mail kupującego",
    "Data zakupu",
    "Wartość zamówienia",
    "Przypisany sprzedawca",
    "Status płatności",
    "Zarządzaj",
  ];

  const clientData = [
    ["Jan Kowalski", "Beata Szydło", "Grzegorz Braun"],
    [1579358, 7612058, 7803469],
    ["jkowalski@interia.pl", "bszydlo@gmail.com", "strazakSam@onet.pl"],
    ["20.06.2024", "15.05.2024", "06.05.2024"],
    ["1 580.00 PLN", "855.25 PLN", "4 549.99 PLN"],
    ["Szymon", "Michał", "Zbyszek"],
    ["Zapłacono", "Oczekuje na przelew", "Anulowano"],
  ];
  return (
    <>
      <Container fluid className="p-0">
        <div className="mt-4 mb-4 p-0 d-flex justify-content-between flex-wrap">
          <h3>Łącznie 150 zamówień</h3>
          <Form className="d-flex gap-2">
            <SearchInput items={searchItems} />
            <Button variant="primary">Szukaj</Button>
          </Form>
        </div>
        <TableComp headings={headings} data={clientData}></TableComp>
      </Container>
      <PaginationRow paginationSize={10} />
    </>
  );
}
