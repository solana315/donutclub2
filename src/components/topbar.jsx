import { Link } from "react-router-dom";
import logo from "../assets/logo.fundo.png";
import "../App.css";

function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link className="brand" to="/">
          <img src={logo} alt="Donut Club" />
        </Link>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/sobrenos">About Us</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Topbar;