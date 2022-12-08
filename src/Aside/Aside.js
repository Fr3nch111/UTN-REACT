import "../index.css";
import PropTypes from "prop-types";
import "../Aside/Asides.css";
import { NavLink } from "react-router-dom";

export function If({ ready }) {
  //si ready es true aplica un estilo, caso contrario, el otro ya sea para estilos en linea o clases.
  return (
    <div className="Aside-Card">
      <h1 className={ready ? "bg-yellow" : "bg-blue"}>Tarea</h1>

      <span
        style={
          ready ? { backgroundColor: "green" } : { backgroundColor: "red" }
        }
      >
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
    </div>
  );
}

export function UserCard() {
  return <h1>UserCard</h1>;
}

export function Aside({ title, imageSource, text, Nav, buttonText }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="" className="Imagenes card-img-top" />
      </div>

      <div className="card-body text-light ">
        <h4 className="card-title">{title}</h4>
        <p className="card-text ">
          {text
            ? text
            : "BOCA BOCA BOCA BOCA BOCA BOCA BOCA BOCA BOCA BOCA BOCA BOCA BOCA BOCA BOCA BOCA BOCA BOCA BOCA BOCA BOCA BOCA BOCA BOCA BOCA BOCA BOCA BOCA BOCA BOCA  "}
        </p>

        <NavLink to={Nav}> <button >
          {buttonText}
          </button>
          </NavLink>
      </div>
    </div>
  );
}

Aside.propTypes = {
  title: PropTypes.string.isRequired,
  Nav: PropTypes.any,
  imageSource: PropTypes.string.isRequired,
  text: PropTypes.string,
};
