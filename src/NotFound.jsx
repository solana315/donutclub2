import { Link } from "react-router-dom";
import Footer from "./components/footer";
import Topbar from "./components/topbar";

function NotFound() {
  return (
    <div>
      <Topbar />
      <section className="bg-cream pt-5 mt-5">
        <div className="container py-5 text-center d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "55vh" }}>
          <span className="text-pink fw-bold text-uppercase small" style={{ letterSpacing: "0.12em" }}>
            Ups, esta página não está na montra
          </span>
          <h1 className="display-title mt-2 mb-4">
            Nada por<br /><em>aqui.</em>
          </h1>
          <Link to="/" className="btn btn-pink d-inline-flex align-items-center gap-2">
            <i className="bi bi-arrow-left" /> Voltar ao início
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default NotFound;
