import {
  Container,
  Card,
  Row,
  Col,
  CardBody,
  CardFooter,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import chart1 from "./../images/icons/chart-1.png";
import chart2 from "./../images/icons/chart-2.png";
import chart3 from "./../images/icons/chart-3.png";
import chart4 from "./../images/icons/chart-4.png";
import bigChart from "./../images/icons/big-chart.png";

import "./../css/dashboard.css";
export const Dashboard = () => {
  const arr = {
    key1: {
      color: "bg-primary",
      name: "Wejścia na stronę",
      value: "20k",
      subvalue: "(-12%)",
      img: chart1,
    },
    key2: {
      color: "bg-danger",
      name: "Aktywne produkty",
      value: "3500 szt",
      subvalue: "",
      img: chart2,
    },
    key3: {
      color: "bg-info",
      name: "Przychód",
      value: "50000PLN",
      subvalue: "(+10%)",
      img: chart3,
    },
    key4: {
      color: "bg-warning",
      name: "Sprzedane produkty",
      value: "250szt",
      subvalue: "(+50%)",
      img: chart4,
    },
  };
  var cards_output = [];

  for (var key in arr) {
    const { color, name, value, subvalue, img } = arr[key];
    cards_output.push(
      <Col className="col-xxl-3 col-xl-4 col-sm-6">
        <Card className={`text-white ${color}`}>
          <CardBody className="pb-0 d-flex justify-content-between flex-wrap align-items-start">
            <div>
              <div className="fs-4 fw-semibold">
                {value}
                <span className="fs-6 fw-normal"> {subvalue}</span>
              </div>
              <div>{name}</div>
            </div>
            <div className="chart-wrapper mt-3" style={{ width: "100%" }}>
              <img src={img} style={{ width: "100%" }} />
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  }

  return (
    <div>
      <Row className="g-4 mb-4 mt-2">{cards_output}</Row>
      <Card className="mb-4">
        <CardBody>
          <Row>
            <div className="col-sm-5">
              <h4 className=" card-title mb-0">Ruch na sklepie</h4>
              <div className=" small text-body-secondary">
                Styczeń - Lipiec 2024
              </div>
            </div>
            <div className="col-sm-7 d-none d-md-block">
              <ToggleButtonGroup
                type="radio"
                name="options"
                defaultValue={2}
                className="float-end"
              >
                <ToggleButton id="tbg-radio-1" value={1}>
                  Dzień
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" value={2}>
                  Miesiąc
                </ToggleButton>
                <ToggleButton id="tbg-radio-3" value={3}>
                  Rok
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </Row>
          <Row className="mt-4">
            <img src={bigChart} style={{ width: "100%" }} />
          </Row>
        </CardBody>
        <CardFooter>
          <Row className="row-cols-xl-5 row-cols-lg-4 row-cols-sm-2 row-cols-1 g-4 mb-2 text-center">
            <Col>
              <div class="text-body-secondary">XYZ</div>
              <div class="fw-semibold text-truncate">250 xyz (40%)</div>
              <ProgressBar variant="success" now={40} />
            </Col>
            <Col>
              <div class="text-body-secondary">XYZ</div>
              <div class="fw-semibold text-truncate">250 xyz (20%)</div>
              <ProgressBar variant="info" now={20} />
            </Col>
            <Col>
              <div class="text-body-secondary">XYZ</div>
              <div class="fw-semibold text-truncate">250 xyz (60%)</div>
              <ProgressBar variant="warning" now={60} />
            </Col>
            <Col>
              <div class="text-body-secondary">XYZ</div>
              <div class="fw-semibold text-truncate">250 xyz (80%)</div>
              <ProgressBar variant="danger" now={40} />
            </Col>
          </Row>
        </CardFooter>
      </Card>
    </div>
  );
};
