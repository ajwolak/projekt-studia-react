import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import BottomPagination from "../modules/pagination/pagination.tsx";
import { Row, Col, Container } from "react-bootstrap";
import img1 from "./../images/console.webp";
import img2 from "./../images/laptop.png";
import img3 from "./../images/phone.jpg";
export const Products = () => {
  var images = [img1, img2, img3];
  var cards_output = [];
  for (var i = 0; i <= 7; i++) {
    cards_output.push(
      <Col className="col-xxl-3 col-xl-4 col-sm-6" key={i}>
        <Card style={{ width: "18rem" }} className="pt-2">
          <Card.Img
            variant="top"
            style={({ width: "100%" }, { height: "auto" })}
            src={images[Math.floor(Math.random() * 3)]}
            alt=""
          />
          <Card.Body>
            <Card.Title>Nazwa produktu</Card.Title>
            <Card.Subtitle className="mb-3 text-muted">
              Krótki opis
            </Card.Subtitle>

            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                Na magazynie: <b>{Math.floor(Math.random() * 10)}</b>
              </ListGroup.Item>
              <ListGroup.Item>
                Zamówione: <b>{Math.floor(Math.random() * 5)}</b>
              </ListGroup.Item>
            </ListGroup>

            <div className=" d-flex justify-content-between mt-4">
              <Button variant="primary">Edytuj</Button>
              <Button variant="danger">Usuń</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  }
  return (
    <div>
      <Container fluid className="mt-4 p-0">
        <div>
          <h3>Łącznie 220 produktów</h3>
        </div>
      </Container>
      <Row className="g-4 mb-4 mt-2">{cards_output}</Row>
      <BottomPagination />
    </div>
  );
};
