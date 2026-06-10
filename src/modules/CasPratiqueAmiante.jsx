import React from 'react'
import { CAS_PRATIQUES_AMIANTE } from '../data/cas_pratiques_amiante'
import { useCasPratique } from '../hooks/useCasPratique'

// ── SOUS-COMPOSANTS ──────────────────────────────────────────────────────────

/** Grille de sélection des cas */
function CasSelect({ onSelect }) {
  return (
    <div>
      <div className="cas-intro">
        <h3>🏗️ Cas pratiques — Diagnostic Amiante</h3>
        <p>Mets-toi dans la peau d'un opérateur de repérage. Analyse le bien, étudie le rapport de labo, et réponds aux questions de diagnostic.</p>
      </div>
      <div className="cas-grid">
        {CAS_PRATIQUES_AMIANTE.map(cas => (
          <div key={cas.id} className="cas-card" onClick={() => onSelect(cas)}>
            <div className="cas-card-top">
              <span className="cas-num">Cas {cas.id}</span>
              <span className="cas-diff">{cas.difficulte}</span>
            </div>
            <div className="cas-card-title">{cas.titre}</div>
            <div className="cas-card-meta">
              📅 Construction : {cas.bien.anneeConstruction} &nbsp;|&nbsp;
              🏠 {cas.bien.type} &nbsp;|&nbsp;
              ❓ {cas.questions.length} questions
            </div>
            <button className="cas-start-btn">Commencer ce cas →</button>
          </div>
        ))}
      </div>
    </div>
  )
}

/** Briefing — descriptif du bien et du rapport de labo */
function CasBriefing({ cas, onStart }) {
  return (
    <div className="cas-briefing">
      <div className="cas-briefing-header">
        <h3>📋 Cas {cas.id} — {cas.titre}</h3>
        <span className="cas-diff">{cas.difficulte}</span>
      </div>

      {/* CONTEXTE */}
      <div className="cas-section">
        <div className="cas-section-title">📌 Contexte de la mission</div>
        <div className="cas-context" style={{ whiteSpace: 'pre-line' }}>{cas.contexte}</div>
      </div>

      {/* DESCRIPTIF DU BIEN */}
      <div className="cas-section">
        <div className="cas-section-title">🏠 Descriptif du bien</div>
        <div className="cas-table-wrap">
          <table className="cas-table">
            <thead>
              <tr>
                <th>Local</th><th>Sol</th><th>Mur</th><th>Plafond</th><th>Divers</th>
              </tr>
            </thead>
            <tbody>
              {cas.locaux.map((l, i) => (
                <tr key={i} className={l.divers?.includes('INACCESSIBLE') ? 'row-warn' : ''}>
                  <td className="td-local"><strong>{l.local}</strong></td>
                  <td>{l.sol}</td>
                  <td>{l.mur}</td>
                  <td>{l.plafond}</td>
                  <td className="td-divers">{l.divers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* RAPPORT LABO */}
      <div className="cas-section">
        <div className="cas-section-title">🔬 Rapport d'analyses laboratoire</div>
        <div className="cas-labo-info">
          <span>🏛️ {cas.rapportLabo.laboratoire}</span>
          <span>📋 Accréditation {cas.rapportLabo.accreditation}</span>
        </div>
        <div className="cas-table-wrap">
          <table className="cas-table">
            <thead>
              <tr><th>Lieu de prélèvement</th><th>Composant</th><th>Présence / Absence</th><th>Type amiante</th></tr>
            </thead>
            <tbody>
              {cas.rapportLabo.resultats.map((r, i) => (
                <tr key={i}>
                  <td>{r.lieu}</td>
                  <td>{r.composant}</td>
                  <td className={r.presence === 'Présence' ? 'td-presence' : 'td-absence'}>
                    {r.presence === 'Présence' ? '⚠️ PRÉSENCE' : '✅ Absence'}
                  </td>
                  <td>{r.typeAmiante}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {cas.rapportLabo.note && (
          <div className="cas-labo-note">💡 {cas.rapportLabo.note}</div>
        )}
      </div>

      <button className="cas-quiz-btn" onClick={onStart}>
        🎯 Démarrer les questions ({cas.questions.length} Q) →
      </button>
    </div>
  )
}

/** Question de cas pratique */
function CasQuestion({ question, index, chosenIdx, onAnswer }) {
  const answered = chosenIdx !== undefined
  return (
    <div className={`q-card ${answered ? (chosenIdx === question.ans ? 'answered-ok' : 'answered-ko') : ''}`}>
      <div className="q-meta">
        <span className="q-num ami">Q{index + 1}</span>
        <span className="q-theme">🏗️ Cas pratique</span>
      </div>
      <div className="q-text" dangerouslySetInnerHTML={{ __html: question.q }} />
      <div className="options-list">
        {question.opts.map((opt, i) => {
          let cls = 'option-btn'
          if (answered) {
            if (i === question.ans) cls += ' correct'
            else if (i === chosenIdx) cls += ' wrong'
          }
          return (
            <button key={i} className={cls} disabled={answered}
              onClick={() => onAnswer(question.id, i)}>{opt}</button>
          )
        })}
      </div>
      {answered && (
        <div className="explication" dangerouslySetInnerHTML={{ __html: '💡 ' + question.exp }} />
      )}
    </div>
  )
}

// ── COMPOSANT PRINCIPAL ───────────────────────────────────────────────────────
export default function CasPratiqueAmiante({ onBack }) {
  const cp = useCasPratique(CAS_PRATIQUES_AMIANTE)
  const pct = cp.total > 0 ? Math.round(cp.score / cp.total * 100) : 0

  return (
    <div className="page-wrap">
      {/* HEADER */}
      <div className="mod-header">
        <button className="back-btn"
          onClick={cp.phase === 'select' ? onBack : cp.reset}>
          ← {cp.phase === 'select' ? 'Accueil' : 'Choisir un cas'}
        </button>
        <div className="mod-info">
          <h2>🏗️ Cas pratiques Amiante</h2>
          <p>Simulations de missions terrain — 4 cas — {CAS_PRATIQUES_AMIANTE.reduce((a, c) => a + c.questions.length, 0)} questions</p>
        </div>
      </div>

      {/* SÉLECTION */}
      {cp.phase === 'select' && <CasSelect onSelect={cp.selectCas} />}

      {/* BRIEFING */}
      {cp.phase === 'briefing' && cp.selectedCas && (
        <CasBriefing cas={cp.selectedCas} onStart={cp.startQuiz} />
      )}

      {/* QUIZ */}
      {cp.phase === 'quiz' && cp.selectedCas && (
        <>
          {/* Barre de progression */}
          <div className="prog-strip">
            <div className="prog-score ami">{cp.score}/{cp.total}</div>
            <div className="prog-inner">
              <div className="prog-label">Question {cp.done}/{cp.total}</div>
              <div className="prog-track">
                <div className="prog-fill ami"
                  style={{ width: (cp.total > 0 ? Math.round(cp.done/cp.total*100) : 0) + '%' }} />
              </div>
            </div>
            <div className="prog-pct">{cp.total > 0 ? Math.round(cp.done/cp.total*100) : 0}%</div>
          </div>

          {cp.selectedCas.questions.map((q, i) => (
            <CasQuestion key={q.id} question={q} index={i}
              chosenIdx={cp.answers[q.id]} onAnswer={cp.answer} />
          ))}

          {cp.allDone && (
            <button className="finish-btn" onClick={cp.finish}>📊 Voir mes résultats</button>
          )}
        </>
      )}

      {/* RÉSULTAT */}
      {cp.phase === 'result' && (
        <div className="result-screen">
          <div className="result-emoji">{pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚'}</div>
          <div className="result-title">
            {pct >= 80 ? 'Excellent diagnostic !' : pct >= 60 ? 'Bien, continue !' : 'À retravailler'}
          </div>
          <div className="result-score ami">{cp.score}/{cp.total}</div>
          <div className="result-sub">{pct}% de réussite — {cp.wrongIds.length} erreur(s)</div>
          <div className="btn-row" style={{ marginTop: 16 }}>
            <button className="btn btn-primary-ami" onClick={cp.reset}>🔄 Choisir un autre cas</button>
          </div>
        </div>
      )}
    </div>
  )
}
