const topics = [
  {
    number: '01',
    title: 'Personas y colaboración',
    description: 'Equipos que se comunican, comparten contexto y construyen juntos.',
    tone: 'lavender',
    icon: '✳',
  },
  {
    number: '02',
    title: 'Entregas frecuentes',
    description: 'Avances pequeños y constantes para aprender pronto y adaptarse.',
    tone: 'mint',
    icon: '↗',
  },
  {
    number: '03',
    title: 'Mejora continua',
    description: 'Inspeccionar el proceso y convertir cada iteración en aprendizaje.',
    tone: 'peach',
    icon: '⟳',
  },
];

function App() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Proyecto Metodología, inicio">
          <span className="brand-mark" aria-hidden="true">m</span>
          <span>metodología<span className="brand-dot">.</span></span>
        </a>
        <a className="top-link" href="#principios">Explorar principios <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> PROYECTO DE CLASE · MVP</p>
          <h1 id="hero-title">El progreso se construye <span>en equipo.</span></h1>
          <p className="hero-description">
            Un espacio para aprender, experimentar y poner en práctica formas de trabajo ágiles.
            Empezamos con una idea sencilla: entregar valor, aprender y mejorar en cada paso.
          </p>
          <a className="primary-button" href="#principios">Conoce los principios <span aria-hidden="true">↓</span></a>
          <div className="hero-note"><span className="sparkle" aria-hidden="true">✳</span> Pequeños pasos. Grandes aprendizajes.</div>
        </div>

        <div className="hero-art" aria-label="Ilustración abstracta de un equipo colaborando">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="art-sun" />
          <div className="art-card card-back"><span>iterar</span><i>↻</i></div>
          <div className="art-card card-front"><span className="mini-check">✓</span><div><strong>Una cosa a la vez</strong><small>El siguiente paso también cuenta</small></div></div>
          <div className="art-sticker">vamos<br />paso a<br />paso</div>
          <span className="art-star star-one" aria-hidden="true">✳</span>
          <span className="art-star star-two" aria-hidden="true">✦</span>
          <span className="art-plus" aria-hidden="true">+</span>
        </div>
      </section>

      <section className="principles" id="principios" aria-labelledby="principles-title">
        <div className="section-heading">
          <div><p className="eyebrow">UNA BASE PARA EMPEZAR</p><h2 id="principles-title">Ideas que nos mueven</h2></div>
          <p>Lo ágil no es una receta: es una manera de colaborar, responder al cambio y aprender haciendo.</p>
        </div>
        <div className="topic-grid">
          {topics.map((topic) => (
            <article className="topic-card" key={topic.number}>
              <div className={`topic-icon ${topic.tone}`} aria-hidden="true">{topic.icon}</div>
              <span className="topic-number">{topic.number} / 03</span>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer"><span>Proyecto Metodología</span><span>Hecho para aprender en cada iteración <span className="footer-heart">♥</span></span></footer>
    </main>
  );
}

export default App;
