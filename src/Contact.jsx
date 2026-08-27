import Footer from './components/footer'
import Topbar from './components/topbar'
import mapsDonutClub from './assets/mapsDonutClub.png'

function Contact() {
  return (
    <div className="page">
      <Topbar />

      <main style={{ padding: '24px' }}>
        <h1>Contactos</h1>

        <section style={{ maxWidth: 720 }}>
          <h2>Morada</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
            <p style={{
              margin: 0,
              flex: '0 0 260px',
              fontSize: '1.1rem',
              lineHeight: 1.6,
              color: '#333',
            }}>
              Centro de Viseu, 3100-550 Viseu, Portugal
            </p>

            <img
              src={mapsDonutClub}
              alt="Mapa com a localização"
              style={{
                width: '600px',
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
                flexShrink: 0,
              }}
            />
          </div>


          <h2>Telefone & Email</h2>
          <p>Telefone: +351 912 345 678</p>
          <p>Email: hello@donutclub.pt</p>

          <h2>Horário</h2>
          <p>Segunda — Sábado: 08:00 — 19:00</p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Contact
