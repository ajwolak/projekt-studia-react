import React, { useEffect, useRef } from "react";
import { Card, Col, CardBody } from "react-bootstrap";
import { DashboardCardProps } from "./dashboar-card-props.ts";

export const DashboardCard = ({
  color,
  name,
  value,
  subvalue,
  chartRef,
}: DashboardCardProps) => {
  const internalChartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef && internalChartRef.current) {
      chartRef.current = internalChartRef.current;
    }
  }, [chartRef]);

  return (
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
            <div ref={internalChartRef}></div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
