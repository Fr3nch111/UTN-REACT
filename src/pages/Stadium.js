import Navigation from "./NavBar/NavBar";
import Header from "./NavBar/Header/Header";
import { Cards } from "../Aside/Asides";
import "./Stadium.css";
import Footer from "./NavBar/Footer";

export default function Stadium() {
  return (
    <div>
      <Header />
      <Navigation />
      <Cards />
      <img
        src="https://www.bocajuniors.com.ar/rebrand/images/accesos.png"
        className="Bombonera-img"
      ></img>
      <Footer />
    </div>
  );
}
