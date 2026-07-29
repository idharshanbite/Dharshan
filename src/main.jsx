import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const services = [
  ['01', 'Strategy', 'A clear plan for a website that supports your goals.'],
  ['02', 'Design', 'Distinctive visual systems that feel intuitive to use.'],
  ['03', 'Cook', 'Fast, accessible React sites that work on every screen.'],
]

function App() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Bewraped"><span>✦</span>BEWRAPED.LK</a>
        <div className="nav-links">
  <a href="#about">About Us</a>
  <a href="#speciality">Speciality</a>
  <a href="#menu">Menu</a>
  <a href="#contact">Contact Us</a>
</div>
        <a className="nav-cta" href="#contact">LET'S COOK<span>↗</span></a>
      </nav>

      <section id="top" className="hero">
        <p className="eyebrow">Original waffles on town · Est. 2026</p>
        <h1>Websites with<br /><em>a little gravity.</em></h1>
        <div className="hero-bottom">
          <p>We turn ambitious ideas into elegant, memorable digital experiences.</p>
          <a className="round-button" href="#work" aria-label="Explore selected work">↓</a>
        </div>
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="star star-one">✦</div>
        <div className="star star-two">✦</div>
      </section>

      <section id="work" className="work section">
        <div className="section-heading"><p className="eyebrow">Selected work</p><p>(01—03)</p></div>
        <article className="feature-card">
          <div className="feature-art"><div className="sun" /><div className="horizon" /><p>OREN<br />STUDIO</p></div>
          <div className="feature-copy"><span>Brand &amp; digital</span><h2>Oren Studio</h2><a href="#contact">View project <span>↗</span></a></div>
        </article>
      </section>

      <section id="services" className="services section">
        <div className="section-heading"><p className="eyebrow">What we do</p><p>(A few things)</p></div>
        <div className="service-list">
          {services.map(([number, title, text]) => <article className="service" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><b>↗</b></article>)}
        </div>
      </section>

      <section className="quote section"><p className="eyebrow">Our point of view</p><h2>Good design makes people <em>feel</em> something before they need to think.</h2></section>

      <footer id="contact">
        <p className="eyebrow">Have a project in mind?</p>
        <h2>Let’s make it<br /><em>matter.</em></h2>
        <a className="email" href="mailto:idharshan.info@gmail.com">idharshan.info@gmail.com <span>↗</span></a>
        <div className="footer-bottom"><p>© 2026 BEWRAPED.lk</p><p></p><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
