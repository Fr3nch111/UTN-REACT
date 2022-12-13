import React, { Fragment, useState } from "react";
import Navigation from "./NavBar/NavBar";
import "./Socio.css";
import Header from "./NavBar/Header/Header";
import Footer from "./NavBar/Footer";

const Formulario = () => {
  const [datos, setDatos] = useState({
    tarjeta: {},
    nombre: "",
    email: "",
    clave: "",
    provincia: "",
  });

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    alert(
      "Felicidades, te haz asociado al Club Atletico Boca Juniors. A la brevedad estara recibiendo a traves de su Email las instrucciones de como retirar su carnet."
    );
  };

  return (
    <Fragment>
      <Header />
      <Navigation />
      <div className="container mt-5">
        <h1>Formulario</h1>
        <form className="row" onSubmit={enviarDatos}>
          <div className="col-md-3">
            <input
              placeholder="Numero de tarjeta"
              type="number"
              className="form-control"
              name="tarjeta"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-md-3">
            <input
              placeholder="Nombre del titular"
              type="text"
              className="form-control"
              name="nombre"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              placeholder="Inserte su Email"
              type="email"
              className="form-control"
              name="email"
              onChange={handleInputChange}
              required
            />
          </div>
          <label className="region-label">Provincia/Region</label>
          <div className="col-md-3">
            <select
              name="provincia"
              id="cars"
              multiple
              className="form-control"
              onChange={handleInputChange}
            >
              <option value="BSAS">BSAS</option>
              <option value="CABA">CABA</option>
              <option value="Cordoba">Cordoba</option>
              <option value="Neuquen">Neuquen</option>
              <option value="Catamarca">Catamarca</option>
              <option value="Chaco">Chaco</option>
              <option value="Chubut">Chubut</option>
              <option value="Corrientes">Corrientes</option>
              <option value="Entre Rios">Entre Rios</option>
              <option value="Formosa">Formosa</option>
              <option value="Jujuy">Jujuy</option>
              <option value="La Rioja">La Rioja</option>
              <option value="La Pampa">La Pampa</option>
              <option value="Mendoza">Mendoza</option>
              <option value="Misiones">Misiones</option>
              <option value="Rio Negro">Rio Negro</option>
              <option value="Salta">Salta</option>
              <option value="San Juan">San Juan</option>
              <option value="San Luis">San Luis</option>
              <option value="Santa Cruz">Santa Cruz</option>
              <option value="Santa Fe">Santa Fe</option>
              <option value="Saniago del Estero">Santiago del Estero</option>
              <option value="Tierra del Fuego">Tierra del Fuego</option>
              <option value="Tucuman">Tucuman</option>
            </select>
          </div>
          <div className="col-md-3">
            <input
              placeholder="Clave"
              type="password"
              className="form-control"
              name="clave"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary" type="submit" name="redirect">
              QUIERO SER SOCIO
            </button>
          </div>
        </form>
      </div>
      <div className="Result">
        <h3 className="Result-text">
          Nombre: {datos.nombre} - Socio Nº: 295432 - Provincia/Region:{" "}
          {datos.provincia}
        </h3>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Formulario;
