import Navigation, { SocialNav } from "../NavBar/NavBar";
import Header from "../NavBar/Header/Header";
import { Asides } from "../Aside/Asides";
import Footer from "../NavBar/Footer";

export default function HomePage() {
  return (
    <div className="root">
      <Header className="Header"/>
      <Navigation />
      <SocialNav />
      <Asides className="Asides" />
      <Footer />
    </div>
  );
}
