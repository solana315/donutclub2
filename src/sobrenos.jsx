import { Link } from "react-router-dom";
import Footer from "./components/footer";
import Topbar from "./components/topbar";
import vanilla from "./assets/donutsmenu/Vanilla Bomb.png";

const values = [
  { icon: "bi-heart", t: "Feito com intenção", d: "Da massa ao último fio de glaze, cada etapa é cuidada para que o resultado seja leve, fresco e memorável." },
  { icon: "bi-leaf", t: "Ingredientes honestos", d: "Escolhemos bons ingredientes e deixamo-los falar. Menos artifício, mais sabor e textura." },
  { icon: "bi-people", t: "Uma mesa para todos", d: "O Donut Club é para encontros rápidos, conversas demoradas e todos os que gostam de um momento doce." },
];

function Sobrenos() {
  return (
    <div>
      <Topbar />

      {/* Page hero */}
      <section className="bg-cream pt-5 mt-5">
        <div className="container py-5">
          <div className="row align-items-end g-4">
            <div className="col-lg-7">
              <nav className="small text-ink-soft mb-2" aria-label="breadcrumb">
                <Link to="/" className="text-ink-soft">Home</Link> / <span>Sobre Nós</span>
              </nav>
              <h1 className="display-title mb-0">
                Mais do que<br /><em>um donut.</em>
              </h1>
            </div>
            <div className="col-lg-5">
              <p className="text-ink-soft mb-0">
                Somos uma pequena equipa com uma grande vontade: tornar os dias
                de Viseu um bocadinho mais doces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-5">
        <div className="container py-4">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <div className="editorial-image">
                <img src={vanilla} alt="Donut Vanilla Bomb com recheio" style={{ objectFit: "contain", background: "#f7efe7" }} />
              </div>
            </div>
            <div className="col-lg-7">
              <span className="text-pink fw-bold text-uppercase small" style={{ letterSpacing: "0.12em" }}>
                A nossa história
              </span>
              <h2 className="fw-bold mt-2 mb-3" style={{ letterSpacing: "-0.03em" }}>
                Começou com uma massa, um forno e uma ideia.
              </h2>
              <p className="text-ink-soft">
                Em 2021, abrimos a porta do Donut Club com uma bancada pequena e
                um caderno cheio de receitas. Desde então, continuamos a fazer
                tudo como no primeiro dia: de forma próxima, curiosa e com as
                mãos na massa.
              </p>
              <p className="text-ink-soft">
                O resultado são donuts que respeitam o clássico, mas não têm
                medo de experimentar. Uma coleção que muda com as estações, com
                os apetites e com as ideias que nascem na nossa cozinha.
              </p>
              <Link to="/menu" className="btn btn-pink d-inline-flex align-items-center gap-2 mt-3">
                Provar a coleção <i className="bi bi-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-5 bg-cream">
        <div className="container py-4">
          <span className="text-pink fw-bold text-uppercase small" style={{ letterSpacing: "0.12em" }}>
            O que nos move
          </span>
          <h2 className="fw-bold mt-2 mb-4" style={{ letterSpacing: "-0.03em", maxWidth: 520 }}>
            Pequenos detalhes.<br />Grande diferença.
          </h2>

          <div className="row g-3">
            {values.map((v) => (
              <div className="col-md-4" key={v.t}>
                <div className="card h-100 border-0 rounded-4 shadow-sm p-2">
                  <div className="card-body">
                    <span className="value-icon">
                      <i className={`bi ${v.icon}`} />
                    </span>
                    <h3 className="h6 mt-3 mb-2">{v.t}</h3>
                    <p className="text-ink-soft small mb-0">{v.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section className="py-5 bg-sage text-white">
        <div className="container text-center py-4" style={{ maxWidth: 760 }}>
          <span className="quote-mark d-block">&ldquo;</span>
          <p className="quote-text mb-3">
            A melhor parte de fazer donuts é ver o momento em que alguém dá a primeira dentada.
          </p>
          <span className="small" style={{ opacity: 0.75 }}>— A equipa Donut Club</span>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Sobrenos;
