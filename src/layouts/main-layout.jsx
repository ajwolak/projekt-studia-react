import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../modules/sidebar/sidebar";
import { Header } from "../modules/header/header";

export function MainLayout() {
  return (
    <div>
      <Sidebar />
      <div className="main-container" id="mainContainer">
        <Header />
        <Container fluid className="container-box">
          <div className="container-media-frames">
            <Outlet />
          </div>
        </Container>
      </div>
    </div>
  );
}
