
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
import Index from "views/Index.js";
import Login from "views/register/Login.js";
import Register from "views/register/Register.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/index" replace />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);
