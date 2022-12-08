import "./Paredes.css";
import Header from "../pages/NavBar/Header/Header";
import Navigation from "../pages/NavBar/NavBar";
import Footer from "../pages/NavBar/Footer";

export default function Pibe() {
  return (
    <div className="Paredes">
      <Header />
      <Navigation />
      <div className="Pibe-img">
      <img
        src="https://img.asmedia.epimg.net/resizer/_ryHYdsamedep_w8_J-AEMhvst4=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/B7JBXSYM5BPOXP2XS4ITTJQVWQ.jpg"
        className="Wall-foto"
      ></img>
      </div>
      <div className="Pibe-text">
      <p className="Wall-text">
        En vísperas de su primera Copa del Mundo, que ojalá no sea la única,
        Leandro Daniel Paredes sabe que tendrá hinchada propia. Además de la
        admiración que genera su juego de clásico enganche devenido volante
        central, goza del respaldo firme de millones de boquenses que lo vieron
        debutar muy joven, lo disfrutaron bastante poco y sufrieron su partida
        demasiado temprano. Hoy, ya maduro a los 28 años, Leandro puede
        enorgullecerse de haber sido compañero de Juan Román Riquelme y Martín
        Palermo, sus ídolos de la infancia humilde entre San Justo y Mataderos,
        con la camiseta que aprendió a querer desde muy chiquito.
      </p>
      </div>
      <Footer />
    </div>
  );
}
