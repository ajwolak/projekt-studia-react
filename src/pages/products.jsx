import { Row, Container } from "react-bootstrap";
import img1 from "./../images/console.webp";
import img2 from "./../images/laptop.png";
import img3 from "./../images/phone.jpg";
import { ProductCart } from "../components/product/product-cart.tsx";
import { PaginationRow } from "../components/pagination/pagination-row.tsx";

export default function Products() {
  var images = [img1, img2, img3];
  var buttonsArr = [
    ["primary", "Edytuj"],
    ["danger", "Usuń"],
  ];

  return (
    <>
      <Container fluid className="mt-4 p-0 mb-4">
        <div>
          <h3>Łącznie 220 produktów</h3>
        </div>
      </Container>
      <Row className="g-4 mb-4 mt-2">
        {Array.from({ length: 8 }).map((_, key) => {
          return (
            <ProductCart
              img={images[Math.floor(Math.random() * 3)]}
              title="Tytuł"
              description="Opis"
              stock={Math.floor(Math.random() * 10)}
              order={Math.floor(Math.random() * 5)}
              key={key}
              buttons={buttonsArr}
            />
          );
        })}
      </Row>
      <PaginationRow paginationSize={20} />
    </>
  );
}
