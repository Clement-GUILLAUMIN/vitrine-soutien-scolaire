import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const annonces = [
  { titre: "Maths – Collège/Lycée", desc: "Soutien et remise à niveau.", prix: "20 €/h", lien: "mailto:toi@mail.com" },
  { titre: "Informatique", desc: "Python, web, algorithmique.", prix: "25 €/h", lien: "mailto:toi@mail.com" },
  { titre: "Autre matière", desc: "Description courte.", prix: "20 €/h", lien: "mailto:toi@mail.com" },
];

export default function App() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: 24, fontFamily: "sans-serif" }}>
      <h1>Cours particuliers</h1>
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
        {annonces.map((a) => (
          <article key={a.titre} style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16 }}>
            <h2>{a.titre}</h2>
            <p>{a.desc}</p>
            <strong>{a.prix}</strong>
            <p><a href={a.lien}>Me contacter</a></p>
          </article>
        ))}
      </div>
    </main>
  );
}


