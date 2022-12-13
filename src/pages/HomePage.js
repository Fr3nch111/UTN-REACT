import Navigation, { SocialNav } from "./NavBar/NavBar";
import Header from "./NavBar/Header/Header";
import { Asides } from "../Aside/Asides";
import Footer from "./NavBar/Footer";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="root">
      <Header className="Header"/>
      <Navigation className="Nav"/>
      <SocialNav className="Social-nav"/>
      <Asides className="Asides" />
      <Footer className="foot"/>
    </div>
  );
}
