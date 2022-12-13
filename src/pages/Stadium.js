import Navigation from "./NavBar/NavBar";
import Header from "./NavBar/Header/Header";
import { Cards } from "../Aside/Asides";
import "./Stadium.css";
import Footer from "./NavBar/Footer";

export default function Stadium() {
  return (
    <div className="Stadium-container">
      <Header />
      <Navigation />
      <div className="Stadium-cards">
      <Cards />
      </div>
      <img
        src="https://www.bocajuniors.com.ar/rebrand/images/accesos.png"
        className="Bombonera-img"
      ></img>
      <Footer />
    </div>
  );
}
