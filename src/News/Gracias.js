import "./Gracias.css";
import Header from "../NavBar/Header/Header";
import Navigation from "../NavBar/NavBar";
import Footer from "../NavBar/Footer";

export default function Tdc() {
  return (
    <div className="TFD">
      <Header />
      <Navigation />
      <div className="TFD-DIV">
      <img
        src="https://media.tycsports.com/files/2022/11/06/502161/rojo-tello_416x234.webp?v=5"
        className="tdc-foto"
      ></img>
     </div>
      <p className="tdc-text">
        Una hermosa tarde de domingo en Villa Mercedes sería el momento y el
        lugar de la definición del Trofeo de Campeones. El equipo dirigido por
        el Negro Ibarra abrió el marcador gracias a una linda definición de
        Briasco, pero pocos minutos después lo igualó Rojas y las cosas quedaron
        igualadas de cara a la etapa final. Sin goles en el segundo tiempo, el
        título se definió en el tiempo suplementario. Cuando parecía que
        llegarían los penales, Alcaraz anotó el tanto que sentenció el partido.
        Sin compromisos oficiales en lo que queda del 2022, el Xeneize cierra el
        año habiendo ganado 2 títulos oficiales (Copa de la Liga y torneo
        local).
      </p>
     
      <Footer />
    </div>
  );
}
