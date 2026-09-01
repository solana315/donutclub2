import { Link } from "react-router-dom";
import Footer from "./components/footer";
import Topbar from "./components/topbar";
import mapsDonutClub from "./assets/mapsDonutClub.png";

const contactCards = [
  { icon: "bi-geo-alt", label: "Morada", value: "Centro de Viseu" },
  { icon: "bi-clock", label: "Horário", value: "Segunda a sábado · 08:00 — 20:00" },
  { icon: "bi-telephone", label: "Contacto", value: "+351 232 000 000" },
];

function Contact() {
  return (
    <div>
      <Topbar />

      {/* Page hero */}
      <section className="bg-cream pt-5 mt-5">
        <div className="container py-5">
          <div className="row align-items-end g-4">
            <div className="col-lg-7">
              <nav className="small text-ink-soft mb-2" aria-label="breadcrumb">
                <Link to="/" className="text-ink-soft">Home</Link> / <span>Como Chegar</span>
              </nav>
              <h1 className="display-title mb-0">
                Vem ter<br /><em>connosco.</em>
              </h1>
            </div>
            <div className="col-lg-5">
              <p className="text-ink-soft mb-0">
                Estamos no centro de Viseu, prontos para te receber com a
                montra cheia e o café quente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-5">
        <div className="container py-4">
          <div className="row g-5 align-items-start">
            <div className="col-lg-5">
              <span className="text-pink fw-bold text-uppercase small" style={{ letterSpacing: "0.12em" }}>
                Visita o Club
              </span>
              <h2 className="fw-bold mt-2 mb-3" style={{ letterSpacing: "-0.03em" }}>
                Uma pausa<br />a dois passos.
              </h2>
              <p className="text-ink-soft">
                Encontra-nos no coração da cidade. Se estás a passear pelo
                centro, já estás muito perto de um donut ainda morno.
              </p>

              <div className="d-grid gap-3 mt-4">
                {contactCards.map((c) => (
                  <div className="d-flex align-items-center gap-3 p-3 border rounded-4" key={c.label}>
                    <span className="contact-icon">
                      <i className={`bi ${c.icon}`} />
                    </span>
                    <div>
                      <span className="d-block text-ink-soft small">{c.label}</span>
                      <strong className="small">{c.value}</strong>
                    </div>
                  </div>
                ))}
              </div>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Centro+de+Viseu"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-pink d-inline-flex align-items-center gap-2"
                >
                  Abrir no Maps <i className="bi bi-box-arrow-up-right" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-cream d-inline-flex align-items-center gap-2"
                >
                  <i className="bi bi-instagram" /> @donutclub.viseu
                </a>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="rounded-4 overflow-hidden shadow-sm position-relative">
                <img src={mapsDonutClub} alt="Mapa com a localização do Donut Club" className="w-100 d-block" />
                <div className="position-absolute bottom-0 start-0 end-0 m-3 p-3 rounded-4 bg-white bg-opacity-90 d-flex justify-content-between align-items-center gap-3">
                  <strong className="small text-navy">Donut Club</strong>
                  <span className="small text-ink-soft">Centro de Viseu · Portugal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-5 bg-cream">
        <div className="container py-4">
          <span className="text-pink fw-bold text-uppercase small" style={{ letterSpacing: "0.12em" }}>
            Planeia a visita
          </span>
          <h2 className="fw-bold mt-2 mb-4" style={{ letterSpacing: "-0.03em" }}>
            A melhor hora<br />é agora.
          </h2>

          <div className="row g-3">
            <div className="col-md-6">
              <div className="hours-card p-4 h-100">
                <h3 className="text-uppercase mb-3">Segunda — Sábado</h3>
                <p className="fs-4 fw-bold mb-0">08:00<br />até às 20:00</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hours-card p-4 h-100">
                <h3 className="text-uppercase mb-3">Domingo</h3>
                <p className="fs-4 fw-bold mb-0">
                  Fechado<br />
                  <span className="text-pink" style={{ fontSize: "0.75em" }}>voltamos segunda</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
