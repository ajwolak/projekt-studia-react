import React from "react";
import { ProductProp } from "./product-props";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Col } from "react-bootstrap";

export const ProductCart = ({
  img,
  title,
  description,
  stock,
  order,
  buttons,
  colKey,
}: ProductProp) => {
  return (
    <Col className="col-xxl-3 col-xl-4 col-sm-6" key={colKey}>
      <Card style={{ width: "18rem" }} className="pt-2">
        {img ? (
          <Card.Img
            variant="top"
            style={{ width: "100%", height: "auto" }}
            src={img}
            alt=""
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "auto",
              textAlign: "center",
              padding: "1rem",
              border: "1px dashed #ccc",
              borderRadius: "0.25rem",
              color: "#777",
            }}
          >
            Wybierz zdjęcie
          </div>
        )}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-3 text-muted">
            {description}
          </Card.Subtitle>

          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              Na magazynie: <b>{stock}</b>
            </ListGroup.Item>
            {order !== -1 && (
              <ListGroup.Item>
                Zamówione: <b>{order}</b>
              </ListGroup.Item>
            )}
          </ListGroup>

          <div className="d-flex justify-content-between mt-4">
            {buttons.map((value, index) => (
              <Button key={index} variant={value[0]}>
                {value[1]}
              </Button>
            ))}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
