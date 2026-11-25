import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { annonces } from './Annonces.jsx'


export default function App() {
  return (
    <main style={{  width: "100%",  maxWidth: 960, margin: "0 auto", padding: 24, fontFamily: "sans-serif" }}>
      <h1>Diplômé L3 Informatique Propose Soutien Scolaire</h1>
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: `repeat(${annonces.length}, 1fr)` }}>
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


