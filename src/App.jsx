import { useState, useEffect, useRef } from 'react'
import './App.css'
import logo from './assets/logo_soutien_maxim.jpeg'
import { annonces, competences } from './FrontendData.jsx'

const email_clem = "clement.guillaumin.dev@gmail.com"
const tel_clem = "06 77 43 63 65"

function Accueil({ goTo }) {
  return (
    <>
      <h2>Bienvenue</h2>
      <p>Soutien scolaire du primaire au lycée, en présentiel ou en distanciel.</p>
      <button className="cta" onClick={() => goTo("services")}>
        Voir les services
      </button>
    </>
  )
}

function Competences() {
  return (
    <>
      <h2>Mes compétences</h2>
      <ul>
        {competences.map((c) => <li key={c}>{c}</li>)}
      </ul>
    </>
  )
}

function Services() {
  return (
    <>
      <h2>Services proposés</h2>
      <div className="cards">
        {annonces.map((a) => (
          <article key={a.titre} className="card">
            <h3>{a.titre}</h3>
            <p>{a.matieres}</p>
            {a.liste && (
              <ul>{a.liste.map((m) => <li key={m}>{m}</li>)}</ul>
            )}
            <p>
              <strong>Tarif</strong><br />
              Présentiel : {a.tarif.presentiel} €/h<br />
              Distanciel : {a.tarif.distanciel} €/h
            </p>
          </article>
        ))}
      </div>
    </>
  )
}

function Contact() {
  return (
    <>
      <h2>Mon contact</h2>
      <ul>
        <li>email : <a href={`mailto:${email_clem}`}>{email_clem}</a></li>
        <li>téléphone : {tel_clem} </li>
      </ul>
    </>
  )
}

const sections = [
  { id: "accueil", label: "Accueil", Component: Accueil },
  { id: "services", label: "Services", Component: Services },
  { id: "contact", label: "Contact", Component: Contact },
  { id: "competences", label: "Compétences", Component: Competences },
  
]

export default function App() {
  const [active, setActive] = useState("accueil")
  const contentRef = useRef(null)

  useEffect(() => {
    const content = contentRef.current
    content.focus({ preventScroll: true }) // pour que les touches fonctionnent dès l'arrivée

    // La section qui traverse le milieu de la zone de contenu devient "active"
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { root: content, rootMargin: "-50% 0px -50% 0px" }
    )
    content.querySelectorAll("section").forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const goTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
    contentRef.current.focus({ preventScroll: true })
  }

  return (
    <div className="layout">
      <aside className="sidebar">
        <header>Diplômé L3 Informatique <br />Propose Soutien Scolaire</header>
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          {sections.map((s) => (
            <button
              key={s.id}
              className={s.id === active ? "active" : ""}
              onClick={() => goTo(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="content" ref={contentRef} tabIndex={0}>
        {sections.map((s) => (
          <section key={s.id} id={s.id}>
            <s.Component goTo={goTo} />
          </section>
        ))}
      </main>
    </div>
  )
}