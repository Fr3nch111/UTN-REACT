import React from "react";
import { Aside } from "./Aside";
import "../Aside/Asides.css";
import Bombonera from "./images/Bombonera.jpg";
import Inferiores from "./images/Inferiores.png";
import Tello from "./images/Tello.jpg";
import Paredes from "./images/Paredes.jpg";


const asides = [
  {
    id: 1,
    title: "Felicidades",
    image: Bombonera,
    Nav: "/ref",
    text: "Queremos mandarle una carta de felicitaciones a nuestros hinchas!",
    buttonText: "Leer",
  }
];

const cards = [
  {
    id: 1,
    title: "Datos",
    text: "Estadio: Alberto J. Armando | Direccion: Brandsen 805, Capital Federal | Fecha de inauguracion: 25 de Mayo de 1940 | Capacidad aproximada: 54.000 espectadores",
  },
  {
    id: 2,
    title: "Accesos",
    text: "Puertas de acceso por: 1 | 2 | 3 | 3 bis | 4 | 5 | 5 bis | 6                  |Puertas de acceso por calle Iberlucea: 7 | 7 bis | 8 | 9 | 9 bis | 10 | 10 bis | 11| 11 bis | 12 | 13 | 14     |  Puertas dentro del Club (ingreso por A. del Valle o Espora): 17 | 18 | 19 | 20 | 21 |",
  },
];

const news = [
  {
    id: 1,
    title: "Inferiores: Boca campeon de la general",
    text: "El Xeneize coronó un gran año al consolidarse como el mejor del país en las juveniles.",
    image: Inferiores,
    Nav: "/inf",
    buttonText: "Más información",
  },
  {
    id: 2,
    title: "No pudo ser",
    text: "Boca igualó 1-1 con Racing, sufrió un gol en el tiempo suplementario y no pudo ganar el Trofeo de Campeones. Briasco anotó el gol Xeneize en San Luis.",
    image: Tello,
    Nav: "/tdc",
    buttonText: "Resumen del partido",
  },
  {
    id: 3,
    title: "Leandro Paredes, un pibe de Boca que vive el sueño mundialista",
    text: "Debutó en la Primera del club a los 16 años, se fue muy joven y siempre dice que algún día va a volver.",
    image: Paredes,
    Nav: "/pibe",
    buttonText: "Más informacion",
  },
];

export function News() {
  return (
    <div className="Cards-container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {news.map((news) => (
          <div className="col-md-4" key={news.id}>
            <Aside
              title={news.title}
              imageSource={news.image}
              Nav={news.Nav}
              text={news.text}
              buttonText={news.buttonText}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Cards() {
  return (
    <div className="Bombonera">
    <div className="Cards-container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map((cards) => (
          <div className="col-md-4" key={cards.id}>
            <br/>
            <Aside
              title={cards.title}
              text={cards.text}
              buttonText={cards.buttonText}
            />
            
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export function Asides() {
  return (
    <div className="Inicio">
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {asides.map((aside) => (
          <div className="col-md-4" key={aside.id}>
            <Aside
              title={aside.title}
              imageSource={aside.image}
              Nav={aside.Nav}
              text={aside.text}
              buttonText={aside.buttonText}
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
