import {
  Card,
  Row,
  Col,
  CardBody,
  CardFooter,
  ToggleButtonGroup,
  ToggleButton,
  CardHeader,
} from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useEffect, useRef } from "react";
import { DashboardCard } from "../components/dasboard-cart/dashboard-card.tsx";

export const Dashboard = () => {
  const chartRef = useRef(null);
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);
  const chartRef3 = useRef(null);
  const chartRef4 = useRef(null);

  useEffect(() => {
    const { ApexCharts } = window;
    // Duży wykres
    const options = {
      series: [
        { data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 55, 10, 41] },
        { data: [87, 116, 99, 103, 130, 149, 52, 1, 87, 55, 87, 116] },
        { data: [37, 129, 20, 57, 21, 88, 48, 58, 14, 55, 37, 129] },
        { data: [50, 107, 54, 63, 130, 50, 134, 20, 72, 55, 50, 107] },
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: { enabled: true },
      },
      legend: { show: false },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  useEffect(() => {
    const { ApexCharts } = window;
    const createChart = (ref, data) => {
      const options = {
        colors: ["rgba(255,255,255,0.5)"],
        series: [{ data: data }],
        chart: {
          height: 150,
          type: "line",
          zoom: { enabled: false },
          toolbar: { show: false },
        },
        legend: { show: false },
        grid: { show: false },
        xaxis: {
          labels: { show: false },
          axisBorder: { show: false },
        },
        yaxis: {
          labels: { show: false },
          axisBorder: { show: false },
        },
      };

      const chart = new ApexCharts(ref.current, options);
      chart.render();

      return chart;
    };

    const data1 = [37, 129, 20, 57, 21, 88, 48, 58, 14];
    const data2 = [87, 116, 99, 103, 130, 149, 52, 1, 87];
    const data3 = [10, 41, 35, 51, 49, 62, 69, 91, 148];
    const data4 = [50, 107, 54, 63, 130, 50, 134, 20, 72];

    const chart1 = createChart(chartRef1, data1);
    const chart2 = createChart(chartRef2, data2);
    const chart3 = createChart(chartRef3, data3);
    const chart4 = createChart(chartRef4, data4);

    return () => {
      chart1.destroy();
      chart2.destroy();
      chart3.destroy();
      chart4.destroy();
    };
  }, []);

  const arr = {
    key1: {
      color: "bg-primary",
      name: "Wejścia na stronę",
      value: "20k",
      subvalue: "(-12%)",
      ref: chartRef1,
    },
    key2: {
      color: "bg-danger",
      name: "Aktywne produkty",
      value: "3500 szt",
      subvalue: "",
      ref: chartRef2,
    },
    key3: {
      color: "bg-info",
      name: "Przychód",
      value: "50000PLN",
      subvalue: "(+10%)",
      ref: chartRef3,
    },
    key4: {
      color: "bg-warning",
      name: "Sprzedane produkty",
      value: "250szt",
      subvalue: "(+50%)",
      ref: chartRef4,
    },
  };

  return (
    <>
      <Row className="g-4 mb-4 mt-4">
        {Object.keys(arr).map((key) => (
          <DashboardCard
            key={key}
            color={arr[key].color}
            name={arr[key].name}
            value={arr[key].value}
            subvalue={arr[key].subvalue}
            chartRef={arr[key].ref}
          />
        ))}
      </Row>
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
            <div id="chart" ref={chartRef}></div>
          </Row>
        </CardBody>
        <CardFooter>
          <Row className="row-cols-xl-4 row-cols-lg-4 row-cols-sm-2 row-cols-1 g-4 mb-2 text-center">
            <Col>
              <div className="text-body-secondary">XYZ</div>
              <div className="fw-semibold text-truncate">250 xyz (40%)</div>
              <ProgressBar variant="success" now={40} />
            </Col>
            <Col>
              <div className="text-body-secondary">XYZ</div>
              <div className="fw-semibold text-truncate">250 xyz (20%)</div>
              <ProgressBar variant="info" now={20} />
            </Col>
            <Col>
              <div className="text-body-secondary">XYZ</div>
              <div className="fw-semibold text-truncate">250 xyz (60%)</div>
              <ProgressBar variant="warning" now={60} />
            </Col>
            <Col>
              <div className="text-body-secondary">XYZ</div>
              <div className="fw-semibold text-truncate">250 xyz (80%)</div>
              <ProgressBar variant="danger" now={80} />
            </Col>
          </Row>
        </CardFooter>
      </Card>
      <Row>
        <Col>
          <Card className="mb-4">
            <CardHeader>Ruch i sprzedaż</CardHeader>
            <CardBody>
              <Row>
                <Col className="col-xl-12 col-md-12 col-12">
                  <Row>
                    <Col className="col-6">
                      <div
                        className="py-1 px-3"
                        style={{ borderLeft: "4px solid #0dcaf0" }}
                      >
                        <div className="text-body-secondary text-truncate small">
                          Nowi klienci
                        </div>
                        <div className="fs-5 fw-semibold">2532</div>
                      </div>
                    </Col>
                    <Col className="col-6">
                      <div
                        className="py-1 px-3 mb-3"
                        style={{ borderLeft: "4px solid red" }}
                      >
                        <div className="text-body-secondary text-truncate small">
                          Powracający klienci
                        </div>
                        <div className="fs-5 fw-semibold">8356</div>
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="text-body-secondary small">Styczeń</span>
                    </div>
                    <div className="progress-group-bars">
                      <ProgressBar
                        className="mb-2"
                        variant="info"
                        now={40}
                      ></ProgressBar>
                      <ProgressBar
                        className="mb-2"
                        variant="danger"
                        now={80}
                      ></ProgressBar>
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="text-body-secondary small">Luty</span>
                    </div>
                    <div className="progress-group-bars">
                      <ProgressBar
                        className="mb-2"
                        variant="info"
                        now={20}
                      ></ProgressBar>
                      <ProgressBar
                        className="mb-2"
                        variant="danger"
                        now={60}
                      ></ProgressBar>
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="text-body-secondary small">Marzec</span>
                    </div>
                    <div className="progress-group-bars">
                      <ProgressBar
                        className="mb-2"
                        variant="info"
                        now={50}
                      ></ProgressBar>
                      <ProgressBar
                        className="mb-2"
                        variant="danger"
                        now={55}
                      ></ProgressBar>
                    </div>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};
