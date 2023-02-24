import React, { useState } from "react";
import "./index.css";
import Employee from "./components/employee";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/AddEmployees";
import EditEmployee from "./components/EditEmployees";
import Header from "./components/Header";
import Employees from "./pages/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dictionary from "./pages/Dictionary";
import Customers from "./pages/Customers";
import Customer from "./pages/Customer";
import Definition from "./pages/Definition";
import NotFound from "./components/NotFound";
import Login from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customer/:id" element={<Customer />} />
          <Route path="/dictionary/:search" element={<Definition />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
