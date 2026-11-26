import { useState } from 'react'
import './App.css'
import logo from './assets/logo_soutien_maxim.jpeg'  
import { annonces, competences } from './FrontendData.jsx'

const email_clem = "clement.guillaumin.dev@gmail.com"
const tel_clem = "06 77 43 63 65"

function Competences() {
  return (
    <section>
      <h2>Mes compétences</h2>
      <ul>
        {competences.map((c) => <li key={c}>{c}</li>)}
      </ul>
    </section>
  )
}

function Services() {
  return (
    <section>
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
    </section>
  )
}

function Contact() {
  return (
    <section>
      <h2>Mon contact</h2>
      <ul>
        <li>email : <a href={`mailto:${email_clem}`}>{email_clem}</a></li>
        <li>téléphone : {tel_clem} </li>
      </ul>
    </section>
  )
}

const sections = [
  { id: "services", label: "Services", content: <Services /> },
  { id: "competences", label: "Compétences", content: <Competences /> },
  { id: "contact", label: "Contact", content: <Contact /> },
]

export default function App() {
  const [active, setActive] = useState("services")
  const current = sections.find((s) => s.id === active)

  return (
    <div className="layout">
      <aside className="sidebar">
         <header>Diplômé L3 Informatique <br></br>
Propose Soutien Scolaire</header>
<img src={logo} alt="Logo" className="logo" />
       
        <nav>
          {sections.map((s) => (
            <button
              key={s.id}
              className={s.id === active ? "active" : ""}
              onClick={() => setActive(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="content">
        <h1>Diplômé L3 Informatique<br />Propose Soutien Scolaire</h1>
        {current.content}
      </main>
    </div>
  )
}