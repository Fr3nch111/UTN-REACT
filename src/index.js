import React from "react";
import ReactDOM from "react-dom/client";
import "./NavBar/Navbar.css";
import "./NavBar/Header/Header.css";
import "./NavBar/Footer.css";
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
