import React, { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import ModulePage from './modules/ModulePage'
import CasPratiqueAmiante from './modules/CasPratiqueAmiante'
import { addResult } from './utils/stats'

// ── DATA ──────────────────────────────────────────────────────────────────────
import { QUESTIONS_GAZ,     GAZ_THEMES     } from './data/questions_gaz'
import { QUESTIONS_ELEC,    ELEC_THEMES    } from './data/questions_electricite'
import { QUESTIONS_TERM,    TERM_THEMES    } from './data/questions_termites'
import { QUESTIONS_AMIANTE, AMIANTE_THEMES } from './data/questions_amiante'

// ── CONFIG MODULES QCM ────────────────────────────────────────────────────────
const MODULE_CONFIG = {
  gaz: {
    id: 'gaz', color: 'gaz',
    label: '🔥 Diagnostic Gaz',
    subtitle: 'NF P 45-500 • Arrêté 23/02/2018 • Anomalies A1/A2/DGI',
    questions: QUESTIONS_GAZ,
    themes: GAZ_THEMES,
  },
  elec: {
    id: 'elec', color: 'elec',
    label: '⚡ Diagnostic Électricité',
    subtitle: 'NF C 16-600 • NF C 15-100 • Anomalies B1→B11',
    questions: QUESTIONS_ELEC,
    themes: ELEC_THEMES,
  },
  term: {
    id: 'term', color: 'term',
    label: '🪵 Termites & Bois',
    subtitle: 'NF EN 335 • Insectes xylophages • Champignons • Loi termites',
    questions: QUESTIONS_TERM,
    themes: TERM_THEMES,
  },
  ami: {
    id: 'ami', color: 'ami',
    label: '🏗️ Diagnostic Amiante',
    subtitle: 'NF X46-020 • Listes A/B/C • DAPP/DTA • Maladies • Matériaux',
    questions: QUESTIONS_AMIANTE,
    themes: AMIANTE_THEMES,
  },
}

// Pages spéciales (hors QCM)
const SPECIAL_PAGES = new Set(['cas-ami'])

export default function App() {
  const [page, setPage] = useState('home')
  const [sessionScore, setSessionScore] = useState(0)

  const handleNavigate = useCallback((id) => setPage(id), [])
  const handleBack     = useCallback(() => setPage('home'), [])
  const handleScoreUpdate = useCallback((correct, total) => {
    const s = addResult(correct, total)
    setSessionScore(s.correct)
  }, [])

  const currentModule = MODULE_CONFIG[page]

  return (
    <>
      <Navbar currentPage={page} onNavigate={handleNavigate} sessionScore={sessionScore} />

      {page === 'home' && <HomePage onNavigate={handleNavigate} />}

      {/* Cas pratiques amiante */}
      {page === 'cas-ami' && <CasPratiqueAmiante onBack={handleBack} />}

      {/* Modules QCM */}
      {currentModule && (
        <ModulePage
          key={page}
          config={currentModule}
          onBack={handleBack}
          onScoreUpdate={handleScoreUpdate}
        />
      )}
    </>
  )
}
