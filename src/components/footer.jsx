import { Link } from "react-router-dom";
import logo from "../assets/logo.fundo.png";

function Footer() {
  return (
    <footer className="site-footer pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-lg-4">
            <Link to="/" className="footer-brand-badge">
              <img src={logo} alt="Donut Club" />
            </Link>
            <p className="mt-3 mb-2 small" style={{ maxWidth: 260, opacity: 0.75 }}>
              Donuts artesanais para tornar os dias mais doces.
            </p>
            <a
              className="d-inline-flex align-items-center gap-2 fw-bold small text-pink"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-instagram" /> @donutclub.viseu
            </a>
          </div>

          <div className="col-6 col-lg-2">
            <span className="d-block fw-bold text-uppercase small mb-2" style={{ letterSpacing: "0.1em", fontSize: "0.7rem" }}>
              Explorar
            </span>
            <ul className="list-unstyled d-grid gap-2 small mb-0">
              <li><Link to="/sobrenos">A nossa história</Link></li>
              <li><Link to="/menu">Ver o menu</Link></li>
              <li><Link to="/contact">Encontrar a loja</Link></li>
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <span className="d-block fw-bold text-uppercase small mb-2" style={{ letterSpacing: "0.1em", fontSize: "0.7rem" }}>
              Visita-nos
            </span>
            <p className="small mb-0" style={{ opacity: 0.75 }}>
              Centro de Viseu<br />
              Segunda a sábado<br />
              08:00 — 20:00
            </p>
          </div>

          <div className="col-12 col-lg-3 text-lg-end d-flex flex-column justify-content-between">
            <span className="small" style={{ opacity: 0.65 }}>Feito à mão, todos os dias.</span>
            <strong className="small mt-2 mt-lg-0">© 2025 Donut Club</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
