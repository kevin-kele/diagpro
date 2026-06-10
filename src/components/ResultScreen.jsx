import React from 'react'

export default function ResultScreen({ score, total, wrongCount, color, themeBreakdown, onReset, onReview }) {
  const pct = total > 0 ? Math.round(score / total * 100) : 0
  const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : pct >= 40 ? '📚' : '😤'
  const title = pct >= 80 ? 'Excellent ! Niveau certif ✅' : pct >= 60 ? 'Bien, continue !' : pct >= 40 ? 'À retravailler' : 'À reprendre depuis le début'
  const btnClass = `btn btn-primary-${color}`

  return (
    <div className="result-screen">
      <div className="result-emoji">{emoji}</div>
      <div className="result-title">{title}</div>
      <div className={`result-score ${color}`}>{score}/{total}</div>
      <div className="result-sub">{pct}% de réussite — {wrongCount} erreur(s)</div>

      <div className="result-breakdown">
        {Object.entries(themeBreakdown).map(([theme, { ok, tot }]) => {
          const p = Math.round(ok / tot * 100)
          const col = p >= 80 ? 'var(--ok)' : p >= 60 ? 'var(--warn)' : 'var(--ko)'
          return (
            <div key={theme} className="result-stat">
              <div className="result-stat-val" style={{ color: col }}>{ok}/{tot}</div>
              <div className="result-stat-lbl">{theme}</div>
            </div>
          )
        })}
      </div>

      <div className="btn-row">
        <button className={btnClass} onClick={onReset}>🔄 Recommencer</button>
        {wrongCount > 0 && (
          <button className="btn btn-error" onClick={onReview}>❌ Revoir erreurs</button>
        )}
      </div>
    </div>
  )
}
