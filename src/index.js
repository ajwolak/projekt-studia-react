import "./css/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { MainLayout } from "./layouts/main-layout.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./pages/products.js";
import { Dashboard } from "./pages/dashboard.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/products" element={<MainLayout />}>
          <Route index element={<Products />} />
        </Route>
        <Route path="/users" element={<MainLayout />}>
          <Route index element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
