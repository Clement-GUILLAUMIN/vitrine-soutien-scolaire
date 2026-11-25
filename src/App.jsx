//import { useState } from 'react'
import './App.css'
import { annonces,  competences} from './FrontendData.jsx'

const email_clem = "clement.guillaumin.dev@gmail.com"

export default function App() {
  return (
    <main style={{  width: "100%",  maxWidth: 960, margin: "0 auto", padding: 24, fontFamily: "sans-serif" }}>
      <h1>Diplômé L3 Informatique <br></br>
        Propose Soutien Scolaire</h1>

<h2>Mes compétences</h2>
<ul style={{ textAlign: "left", maxWidth: 500, margin: "0 auto 24px" }}>
  {competences.map((d) => (
    <li key={d}>{d}</li>
  ))}
</ul>


<h2>Services Proposés</h2>
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: `repeat(${annonces.length}, 1fr)` }}>
        {annonces.map((a) => (
          <article key={a.titre} style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16 }}>
  <h3>{a.titre}</h3>
  <p>{a.matieres}</p>
  {a.liste && (
    <ul style={{ textAlign: "left" }}>
      {a.liste.map((m) => (
        <li key={m}>{m}</li>
      ))}
    </ul>
  )}
  <p>
    <strong>Tarif</strong><br />
    Présentiel : {a.tarif.presentiel} €/h<br />
    Distanciel : {a.tarif.distanciel} €/h
  </p>
</article>
        ))}
      </div>

<h2>Mon contact</h2>
<ul style={{ textAlign: "left", maxWidth: 500, margin: "0 auto 24px" }}>
  <li>email : <a href={`mailto:${email_clem}`}>{email_clem}</a></li>
  <li>téléphone : 06 77 43 63 65 </li>
</ul>




    </main>
  );
}


