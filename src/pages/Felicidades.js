import "./Felicidades.css";
import Header from "../NavBar/Header/Header";
import Navigation from "../NavBar/NavBar";
import Footer from "../NavBar/Footer";

export default function Fel() {
  return (
    <div className="Felicidades">
      <Header />
      <Navigation />
      <img
        src="https://diarioxeneize.com/wp-content/uploads/2018/12/navi.jpg"
        className="fel-foto"
      ></img>
      <p className="fel-text">
        Desde el Club Atletico Boca Juniors queremos desearle una feliz navidad
        y prospero 2023 a todo el pueblo boquense, se va una temporada memorable
        y con muchos aprendizajes. El 2022 se va con 2 trofeos obtenidos: La
        Copa de la LPF y el campeonato local en una de las mejores definiciones
        de la historia. No tenemos palabras de agradecimiento para con nuestra
        hinchada pues nunca nos dejaron solos, estuvieron en las buenas y en las
        malas lo cual significa mucho para nosotros. Saludos.
      </p>
      <Footer />
    </div>
  );
}
