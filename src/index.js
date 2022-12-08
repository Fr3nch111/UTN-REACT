import React from "react";
import ReactDOM from "react-dom/client";
import "./pages/NavBar/Navbar.css";
import "./pages/NavBar/Header/Header.css";
import "./pages/NavBar/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "animate.css/animate.min.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="root">
    <App />
  </div>
);
