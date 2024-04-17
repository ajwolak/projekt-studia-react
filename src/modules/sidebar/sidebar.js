import React from "react";
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from "cdbreact";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();

  const resizePanel = () => {
    if (document.getElementById("mainSidebar").classList.contains("toggled")) {
      document
        .getElementById("mainContainer")
        .classList.remove("long-container");
    } else {
      document.getElementById("mainContainer").classList.add("long-container");
    }
  };

  return (
    <div className="sidebar-container">
      <CDBSidebar
        textColor="#fff"
        backgroundColor="#323a49"
        id="mainSidebar"
        toggled
      >
        <CDBSidebarHeader
          prefix={<i onClick={resizePanel} className="fa fa-bars fa-large"></i>}
        >
          <Link
            to="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Panel
          </Link>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link
              to="/"
              className={location.pathname === "/" ? "activeClicked" : ""}
            >
              <CDBSidebarMenuItem icon="columns">
                Strona główna
              </CDBSidebarMenuItem>
            </Link>
            <Link
              to="/products"
              className={
                location.pathname === "/products" ? "activeClicked" : ""
              }
            >
              <CDBSidebarMenuItem icon="list">Produkty</CDBSidebarMenuItem>
            </Link>
            <Link
              to="/users"
              className={location.pathname === "/users" ? "activeClicked" : ""}
            >
              <CDBSidebarMenuItem icon="user">Użytkownicy</CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};
