import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./components/footer";
import Topbar from "./components/topbar";
import heroImg from "./assets/Donuts.png";
import cinnamon from "./assets/donutsmenu/Cinnamon Sugar.png";
import classic from "./assets/donutsmenu/Classic Glaze.png";
import choco from "./assets/donutsmenu/Double Choco.png";
import herb from "./assets/donutsmenu/Herb & Cheese.png";
import matcha from "./assets/donutsmenu/Matcha Dream.png";
import pistachio from "./assets/donutsmenu/Pistachio Vegan.png";
import strawberry from "./assets/donutsmenu/Strawberry Fix.png";
import vanilla from "./assets/donutsmenu/Vanilla Bomb.png";

const categories = ["Todos", "Clássicos", "Especiais", "Vegan"];

const donuts = [
  { name: "Classic Glaze", description: "Massa leve, glaze de açúcar e o clássico que nunca falha.", price: "2,20€", category: "Clássicos", image: classic, tag: "O clássico" },
  { name: "Cinnamon Sugar", description: "Aconchego em forma de donut, com açúcar e canela.", price: "2,20€", category: "Clássicos", image: cinnamon, tag: "Conforto" },
  { name: "Double Choco", description: "Chocolate intenso na massa e uma cobertura sedosa.", price: "2,70€", category: "Especiais", image: choco, tag: "Intenso" },
  { name: "Strawberry Fix", description: "Morangos, glaze rosa e um toque ácido irresistível.", price: "2,70€", category: "Especiais", image: strawberry, tag: "Da estação" },
  { name: "Vanilla Bomb", description: "Recheio cremoso de baunilha em cada dentada.", price: "2,90€", category: "Especiais", image: vanilla, tag: "Recheado" },
  { name: "Matcha Dream", description: "Glaze de matcha e uma doçura vegetal muito equilibrada.", price: "2,70€", category: "Vegan", image: matcha, tag: "Vegan" },
  { name: "Pistachio Vegan", description: "Pistácio torrado e massa vegan, sem comprometer o sabor.", price: "2,90€", category: "Vegan", image: pistachio, tag: "Vegan" },
  { name: "Herb & Cheese", description: "A nossa surpresa salgada para quem gosta de sair do doce.", price: "2,70€", category: "Especiais", image: herb, tag: "Salgado" },
];

export default function Menu() {
  const [category, setCategory] = useState("Todos");

  const filtered = useMemo(
    () => (category === "Todos" ? donuts : donuts.filter((d) => d.category === category)),
    [category]
  );

  return (
    <div>
      <Topbar />

      {/* Page hero */}
      <section className="bg-cream pt-5 mt-5">
        <div className="container py-5">
          <div className="row align-items-end g-4">
            <div className="col-lg-7">
              <nav className="small text-ink-soft mb-2" aria-label="breadcrumb">
                <Link to="/" className="text-ink-soft">Home</Link> / <span>Menu</span>
              </nav>
              <h1 className="display-title mb-0">
                Escolhe o teu<br /><em>favorito.</em>
              </h1>
            </div>
            <div className="col-lg-5">
              <p className="text-ink-soft mb-0">
                Uma coleção de massas fofas, coberturas generosas e combinações
                para todos os apetites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="py-5">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
            <div className="d-flex flex-wrap gap-2" role="tablist" aria-label="Filtrar menu">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`menu-tab btn ${category === item ? "active" : ""}`}
                  onClick={() => setCategory(item)}
                  role="tab"
                  aria-selected={category === item}
                >
                  {item}
                </button>
              ))}
            </div>
            <span className="text-ink-soft small">
              {filtered.length} {filtered.length === 1 ? "sabor disponível hoje" : "sabores disponíveis hoje"}
            </span>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3">
            {filtered.map((donut) => (
              <div className="col" key={donut.name}>
                <article className="menu-card h-100">
                  <div className="menu-card-image">
                    <img src={donut.image} alt={donut.name} loading="lazy" />
                  </div>
                  <div className="card-body bg-white">
                    <div className="d-flex justify-content-between align-items-start gap-2">
                      <h3 className="h6 text-navy mb-0">{donut.name}</h3>
                      <span className="text-pink fw-bold small text-nowrap">{donut.price}</span>
                    </div>
                    <p className="text-ink-soft small my-2" style={{ minHeight: "2.5em" }}>
                      {donut.description}
                    </p>
                    <span className="badge bg-beige text-navy fw-semibold">{donut.tag}</span>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mt-5 p-4 rounded-4 bg-navy text-white">
            <p className="mb-0 small">
              <strong className="text-pink d-block d-sm-inline">Queres levar uma caixa?</strong>{" "}
              Passa pela loja ou fala connosco para prepararmos a tua seleção.
            </p>
            <Link to="/contact" className="btn btn-pink d-inline-flex align-items-center gap-2 text-nowrap">
              Encontrar a loja <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      {/* Café pairing */}
      <section className="py-5 bg-cream">
        <div className="container py-4">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <span className="text-pink fw-bold text-uppercase small" style={{ letterSpacing: "0.12em" }}>
                Para acompanhar
              </span>
              <h2 className="fw-bold mt-2 mb-3" style={{ letterSpacing: "-0.03em" }}>
                Café quente.<br />Donut fresco.
              </h2>
              <p className="text-ink-soft" style={{ maxWidth: 480 }}>
                A combinação oficial do Donut Club. Pergunta pela nossa seleção de
                cafés e deixa a pausa acontecer.
              </p>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="editorial-image">
                <img src={heroImg} alt="Donuts artesanais para partilhar" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
