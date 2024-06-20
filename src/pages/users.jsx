import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { TableComp } from "../components/table/table.tsx";
import { SearchInput } from "../components/search-input/search-input.tsx";
import { PaginationRow } from "../components/pagination/pagination-row.tsx";

export default function Users() {
  const searchItems = [
    "Mariusz",
    "Zbyszek",
    "Szymon",
    "Kowalski",
    "Nowak",
    "Biel",
    "mkowalski@interia.pl",
    "znowak@gmail.com",
    "sbiel@onet.pl",
  ];
  const headings = [
    "Lp.",
    "Id użytkownika",
    "Imię",
    "Nazwisko",
    "Email",
    "Telefon",
    "Stanowisko",
    "Uprawnienia",
    "Dział",
    "Zarządzaj",
  ];
  const usersData = [
    [157, 758, 469],
    ["Mariusz", "Zbyszek", "Szymon"],
    ["Kowalski", "Nowak", "Biel"],
    ["mkowalski@interia.pl", "znowak@gmail.com", "sbiel@onet.pl"],
    ["858 999 466", "879 966 385", "777 888 213"],
    ["Sprzedawca", "Magazynier", "Kierownik"],
    ["Sprzedawca", "Magazynier", "Administrator"],
    ["Sprzedawcy", "Magazynierzy", "IT"],
  ];
  return (
    <>
      <Container fluid className="p-0 mt-4 mb-4">
        <Form className="d-flex justify-content-end mb-3 gap-2 flex-wrap">
          <SearchInput items={searchItems} />
          <Button variant="primary">Szukaj</Button>
          <Button variant="success">Dodaj użytkownika</Button>
        </Form>
        <TableComp headings={headings} data={usersData} />
      </Container>
      <PaginationRow paginationSize={4} />
    </>
  );
}
