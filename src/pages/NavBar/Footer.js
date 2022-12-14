import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <img
        src={require("./Header/Boca.png")}
        alt="Boca-foot"
        className="Boca-foot"
      />
      <h1 className="footer-text"> © Copyright 2022 Boca Juniors</h1>
    </div>
  );
}
