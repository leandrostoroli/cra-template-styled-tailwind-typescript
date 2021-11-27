import React from "react";
import "./App.css";
import Title from "@components/Title";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Title></Title>
      <Outlet />
      <Link to="/invoices">Invoices</Link>
    </div>
  );
}

export default App;
