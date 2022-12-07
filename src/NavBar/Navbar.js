import { NavLink } from "react-router-dom";

export function SocialNav() {
  return (
    <div className="SocialBar">
      <div className="teext-social">
        <ul className="social-list">
          <a href="https://www.instagram.com/bocajrsoficial/?hl=es">
            <button className="button-NB" role="button">
              Instagram
            </button>
          </a>

          <a href="https://es-la.facebook.com/BocaJuniors/">
            <button className="button-NB" role="button">
              Facebook
            </button>
          </a>

          <a href="https://twitter.com/BocaJrsOficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
            <button className="button-NB" role="button">
              Twitter
            </button>
          </a>

          <a href="https://www.youtube.com/channel/UCRtB_RAtKH72CgVAKHFgdIw">
            <button className="button-NB" role="button">
              YouTube
            </button>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default function Navigation() {
  return (
    <div className="Navbar">
      <div className="texto-nav">
        <ul className="Navbar-list">
          <NavLink to="/">
            <button className="button-NB" role="button">
              Inicio
            </button>
          </NavLink>
          <NavLink to="/socios">
            <button className="button-NB" role="button">
              Hazte socio
            </button>
          </NavLink>
          <NavLink to="/News">
            <button className="button-NB" role="button">
              Noticias
            </button>
          </NavLink>
          <NavLink to="/Stadium">
            <button className="button-NB" role="button">
              La Bombonera
            </button>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
