import React from "react";
import { Container, NavLink } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../modules/sidebar/sidebar";
import { Header } from "../modules/header/header";

export function MainLayout() {
  return (
    <div>
      <Sidebar />
      <div className="main-container" id="mainContainer">
        <Header />
        <div className="container-box">
          <Container fluid>
            <Outlet />
          </Container>
        </div>
      </div>
    </div>
  );
}
