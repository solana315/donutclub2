import { NavLink } from "react-router-dom";
import logo from "../assets/logo.fundo.png";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/sobrenos", label: "Sobre Nós" },
  { to: "/menu", label: "Menu" },
  { to: "/contact", label: "Como Chegar" },
];

function Topbar() {
  return (
    <nav className="navbar navbar-expand-lg site-navbar fixed-top py-2">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Donut Club" />
        </NavLink>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Abrir menu"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4 py-3 py-lg-0">
            {navItems.map((item) => (
              <li className="nav-item" key={item.to}>
                <NavLink className="nav-link" to={item.to} end={item.end}>
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item ms-lg-2">
              <NavLink className="btn btn-pink btn-sm d-inline-flex align-items-center gap-2" to="/menu">
                Encomendar <i className="bi bi-arrow-up-right" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
