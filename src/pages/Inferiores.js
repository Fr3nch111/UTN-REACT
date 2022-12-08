import "./Inferiores.css";
import Header from "./NavBar/Header/Header";
import Navigation from "./NavBar/NavBar";
import Footer from "./NavBar/Footer";

export default function Inf() {
  return (
    <div className="Inferiores">
      <Header />
      <Navigation />
      <div className="info-photo"> 
      <img
        src="https://e00-ar-marca.uecdn.es/claro/assets/multimedia/imagenes/2022/10/21/16663661736320.jpg"
        className="inf-foto"
      ></img>
      </div>
      <p className="inf-text">
        Las inferiores de Boca Juniors cerraron un gran 2022.
        <br />
        Los chicos se midieron este sábado contra Racing por la última fecha del
        Torneo de Juveniles, jornada en la que sumaron tres triunfos, un empate
        y dos derrotas. Con los 10 puntos acumulados se consiguió superar a
        River Plate y mantener la costumbre de ser el club campeón de la tabla
        general. En cuanto a títulos por categoría, el único conseguido fue en
        la cuarta, vuelta olímpica que le permite a la institución poder
        representar al país en la Copa Libertadores Sub-20 que se disputará en
        el 2023
      </p>
      <Footer />
    </div>
  );
}
