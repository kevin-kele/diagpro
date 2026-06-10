import React from 'react'
import { loadStats } from '../utils/stats'

const MODULES = [
  { id:'gaz',     icon:'🔥', title:'Diagnostic Gaz',         color:'gaz',  badge:'40 questions',    sub:'NF P 45-500 • Anomalies A1/A2/DGI\nArrêté 23/02/2018 • VASO • Étanchéité' },
  { id:'elec',    icon:'⚡', title:'Diagnostic Électricité', color:'elec', badge:'65 questions',    sub:'NF C 16-600 • Anomalies B1→B11\nSalle de bain • Tableau • DDR 30mA' },
  { id:'term',    icon:'🪵', title:'Termites & Bois',         color:'term', badge:'70 questions',    sub:'NF EN 335 • Insectes xylophages\nChampignons • Loi termites' },
  { id:'ami',     icon:'🏗️', title:'Amiante QCM',            color:'ami',  badge:'73 questions',    sub:'NF X46-020 • Listes A/B/C • DAPP/DTA\nMaladies • Matériaux • Vrai/Faux' },
  { id:'cas-ami', icon:'🔬', title:'Cas pratiques Amiante',  color:'ami',  badge:'4 cas — 27 Q',    sub:'Simulations terrain : appartement, maison,\nimmeuble collectif, local commercial' },
]

export default function HomePage({ onNavigate }) {
  const stats = loadStats()
  const pct = stats.total > 0 ? Math.round(stats.correct / stats.total * 100) : null

  return (
    <div className="page-wrap">
      <div className="home-hero">
        <h1>DiagPRO — Certif Diagnostiqueur</h1>
        <p>Plateforme de révision complète. 4 modules QCM + cas pratiques amiante. 250+ questions. Explications à chaque erreur. Ordre mélangé à chaque session.</p>
      </div>

      <div className="modules-grid">
        {MODULES.map(m => (
          <div key={m.id} className={`module-card ${m.color}`} onClick={() => onNavigate(m.id)}>
            <div className="mc-icon">{m.icon}</div>
            <div className="mc-title">{m.title}</div>
            <div className="mc-sub" style={{ whiteSpace:'pre-line' }}>{m.sub}</div>
            <div className="mc-badge">{m.badge}</div>
            <button className="mc-start" onClick={e => { e.stopPropagation(); onNavigate(m.id) }}>
              Commencer →
            </button>
          </div>
        ))}
      </div>

      <div className="stats-box">
        <h3>📊 Tes statistiques</h3>
        <div className="stats-grid">
          <div className="stat-item"><div className="stat-val">{stats.total}</div><div className="stat-lbl">Questions répondues</div></div>
          <div className="stat-item"><div className="stat-val">{stats.correct}</div><div className="stat-lbl">Bonnes réponses</div></div>
          <div className="stat-item"><div className="stat-val">{pct !== null ? pct + '%' : '—'}</div><div className="stat-lbl">Taux de réussite</div></div>
        </div>
      </div>

      <div className="info-box">
        <strong>💡 Conseils :</strong><br />
        • Lis les explications même quand tu as bon — elles approfondissent<br />
        • <strong>Cas pratiques</strong> → simule une vraie mission terrain amiante<br />
        • Mode <strong>Revoir erreurs</strong> = refaire uniquement tes fautes<br />
        • Les anomalies B1→B11, A1/A2/DGI et les listes A/B/C tombent souvent à l'exam
      </div>
    </div>
  )
}
