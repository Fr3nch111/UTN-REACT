import Navigation from "./NavBar/NavBar";
import Header from "./NavBar/Header/Header";
import { News } from "../Aside/Asides";
import Footer from "./NavBar/Footer";
import "./News.css";

export default function Noticias() {
  return (
    <div className="News-container">
      <Header />
      <Navigation />
      <div className="Notis">
      <News />
      </div>
      <Footer />
      </div>
  );
}
