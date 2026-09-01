import { Link } from "react-router-dom";
import heroImg from "./assets/Donuts.png";
import classicImg from "./assets/donutsmenu/Classic Glaze.png";
import Footer from "./components/footer";
import Topbar from "./components/topbar";

function Home() {
  return (
    <div>
      <Topbar />

      {/* Hero */}
      <section className="pt-5 mt-5">
        <div className="container py-4 py-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="badge bg-beige text-navy fw-semibold hero-eyebrow px-3 py-2">
                Feitos à mão diariamente
              </span>
              <h1 className="display-title mt-3 mb-3">
                Os melhores<br />donuts <em>da cidade.</em>
              </h1>
              <p className="text-ink-soft fs-6 lh-lg" style={{ maxWidth: 480 }}>
                Receitas artesanais, glaze delicado e uma seleção de sabores pensada
                para transformar qualquer pausa num pequeno ritual doce.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link to="/menu" className="btn btn-pink d-inline-flex align-items-center gap-2">
                  Ver o menu <i className="bi bi-arrow-right" />
                </Link>
                <Link to="/sobrenos" className="btn btn-cream">
                  Conhecer o Club
                </Link>
              </div>
              <div className="d-flex flex-wrap gap-4 mt-4 text-ink-soft small">
                <span className="d-inline-flex align-items-center gap-2">
                  <i className="bi bi-clock text-sage" style={{ color: "#6e8d5d" }} /> 08:00 — 20:00
                </span>
                <span className="d-inline-flex align-items-center gap-2">
                  <i className="bi bi-geo-alt" style={{ color: "#6e8d5d" }} /> Centro de Viseu
                </span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="position-relative mx-auto" style={{ maxWidth: 380 }}>
                <div className="hero-image-wrap">
                  <img src={heroImg} alt="Seleção de donuts artesanais do Donut Club" />
                </div>
                <div className="hero-sticker d-flex flex-column align-items-center justify-content-center">
                  <span>100%</span>feito com<br />carinho
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="py-5">
        <div className="container">
          <div className="row g-3">
            {[
              { n: "01", t: "Artesanal", d: "Massa fresca preparada todos os dias, com tempo e atenção a cada detalhe." },
              { n: "02", t: "Premium", d: "Ingredientes de qualidade e combinações elegantes, mas sempre descontraídas." },
              { n: "03", t: "Acessível", d: "Um visual premium, um ambiente leve e donuts feitos para voltar sempre." },
            ].map((f) => (
              <div className="col-md-4" key={f.n}>
                <div className="card h-100 border rounded-4 shadow-sm p-2">
                  <div className="card-body">
                    <span className="feature-number">{f.n}</span>
                    <h3 className="h5 mt-2 mb-2">{f.t}</h3>
                    <p className="text-ink-soft small mb-0">{f.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story split */}
      <section className="py-5 bg-cream">
        <div className="container py-4">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <div className="editorial-image">
                <img src={classicImg} alt="Donut Classic Glaze" style={{ objectFit: "contain", background: "#fff" }} />
                <div className="editorial-badge d-flex align-items-center justify-content-center">
                  desde 2021
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <span className="text-pink fw-bold text-uppercase small" style={{ letterSpacing: "0.12em" }}>
                O nosso ritual
              </span>
              <h2 className="fw-bold mt-2 mb-3" style={{ letterSpacing: "-0.03em" }}>
                Um donut nunca é só um donut.
              </h2>
              <p className="text-ink-soft" style={{ maxWidth: 540 }}>
                É o cheiro da massa acabada de fazer, o primeiro brilho do glaze e
                aquele momento em que a conversa abranda. No Donut Club, fazemos
                tudo para que cada visita saiba a pausa bem merecida.
              </p>

              <div className="d-grid gap-3 mt-4">
                <div className="d-flex gap-3">
                  <span className="story-icon d-flex align-items-center justify-content-center">
                    <i className="bi bi-stars" />
                  </span>
                  <div>
                    <h3 className="h6 mb-1">Receitas com personalidade</h3>
                    <p className="text-ink-soft small mb-0">Clássicos reconfortantes e sabores inesperados para descobrir.</p>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <span className="story-icon d-flex align-items-center justify-content-center">02</span>
                  <div>
                    <h3 className="h6 mb-1">Uma loja para ficar</h3>
                    <p className="text-ink-soft small mb-0">Passa para levar ou senta-te um pouco. Aqui, não há pressa.</p>
                  </div>
                </div>
              </div>

              <Link to="/sobrenos" className="btn btn-pink d-inline-flex align-items-center gap-2 mt-4">
                A nossa história <i className="bi bi-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section className="py-5 bg-sage text-white">
        <div className="container text-center py-4" style={{ maxWidth: 760 }}>
          <span className="quote-mark d-block">&ldquo;</span>
          <p className="quote-text mb-3">Há dias que pedem café. Há dias que pedem um donut.</p>
          <span className="small" style={{ opacity: 0.75 }}>— Donut Club, Viseu</span>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
