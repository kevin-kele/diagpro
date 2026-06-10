import React from 'react'
import { loadStats } from '../utils/stats'

const PAGES = [
  { id:'home',    label:'🏠 Accueil' },
  { id:'gaz',     label:'🔥 Gaz' },
  { id:'elec',    label:'⚡ Électricité' },
  { id:'term',    label:'🪵 Termites' },
  { id:'ami',     label:'🏗️ Amiante QCM' },
  { id:'cas-ami', label:'🔬 Cas pratiques' },
]

export default function Navbar({ currentPage, onNavigate, sessionScore }) {
  return (
    <nav className="nav">
      <span className="nav-brand">DiagPRO</span>
      {PAGES.map(p => (
        <button
          key={p.id}
          className={`nav-btn ${currentPage === p.id ? `active-${p.id === 'home' ? 'home' : p.id === 'cas-ami' ? 'ami' : p.id}` : ''}`}
          onClick={() => onNavigate(p.id)}
        >
          {p.label}
        </button>
      ))}
      <div className="nav-score">
        Session : <strong>{sessionScore}</strong> pts
      </div>
    </nav>
  )
}
