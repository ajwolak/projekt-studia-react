import React from "react";
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar-container">
      <CDBSidebar
        textColor="#fff"
        backgroundColor="#323a49"
        id="mainSidebar"
        toggled
      >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
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
              to="/dashboard"
              className={
                location.pathname === "/dashboard" ? "activeClicked" : ""
              }
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
              to="/new-product"
              className={
                location.pathname === "/new-product" ? "activeClicked" : ""
              }
            >
              <CDBSidebarMenuItem icon="fa-solid fa-plus">
                Dodaj produkt
              </CDBSidebarMenuItem>
            </Link>
            <Link
              to="/users"
              className={location.pathname === "/users" ? "activeClicked" : ""}
            >
              <CDBSidebarMenuItem icon="user">Użytkownicy</CDBSidebarMenuItem>
            </Link>
            <Link
              to="/orders"
              className={location.pathname === "/orders" ? "activeClicked" : ""}
            >
              <CDBSidebarMenuItem icon="fa-solid fa-store">
                Zamówienia
              </CDBSidebarMenuItem>
            </Link>
            <Link
              to="/invoice"
              className={
                location.pathname === "/invoice" ? "activeClicked" : ""
              }
            >
              <CDBSidebarMenuItem icon="fa-solid fa-file-invoice-dollar">
                Wystaw fakturę
              </CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};
