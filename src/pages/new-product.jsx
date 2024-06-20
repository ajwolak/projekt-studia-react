import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { ProductCart } from "../components/product/product-cart.tsx";

export default function NewProduct() {
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState("Wprowadź tytuł");
  const [stock, setStock] = useState(0);
  const [description, setDescription] = useState("Wprowadź opis");
  const [img, setImg] = useState("");

  const zmienWartosc = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setImg(URL.createObjectURL(files[0]));
    } else {
      switch (name) {
        case "title":
          setTitle(value);
          break;
        case "stock":
          setStock(Number(value));
          break;
        case "description":
          setDescription(value);
          break;
        default:
          break;
      }
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      <Container fluid className="p-0 mt-4 mb-4">
        <h3>Dodajesz produkt na sklep</h3>
      </Container>
      <Row className="flex-md-row-reverse">
        <Col className="mb-4">
          <h3 className="mb-3">Podgląd na żywo</h3>
          <ProductCart
            img={img}
            title={title}
            description={description}
            stock={stock}
            order={-1}
            key={2222}
            buttons={[]}
          />
        </Col>
        <Col lg={8} md={12} xs={12} className="mb-4">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Wprowadź nazwę produktu</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nazwa"
                  name="title"
                  value={title}
                  onChange={zmienWartosc}
                />
                <Form.Control.Feedback>Ok.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Stan magazynowy</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ilość"
                  required
                  name="stock"
                  value={stock}
                  onChange={zmienWartosc}
                />
                <Form.Control.Feedback>Ok</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Wprowadź opis produktu</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Opis"
                  required
                  name="description"
                  value={description}
                  onChange={zmienWartosc}
                />
                <Form.Control.Feedback>Ok.</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>Wybierz zdjęcie</Form.Label>
                <Form.Control
                  type="file"
                  required
                  name="img"
                  onChange={zmienWartosc}
                />
                <Form.Control.Feedback>Ok</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit">Dodaj</Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}
