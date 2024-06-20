import "./css/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { MainLayout } from "./layouts/main-layout.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/products.jsx";
import { Dashboard } from "./pages/dashboard.jsx";
import Login from "./pages/login.jsx";
import Orders from "./pages/order.jsx";
import NewProduct from "./pages/new-product.jsx";
import Users from "./pages/users.jsx";
import Invoice from "./pages/invoice.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/new-product" element={<NewProduct />} />
          <Route path="/invoice" element={<Invoice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
