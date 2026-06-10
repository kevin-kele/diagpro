import React from 'react'

/**
 * QuestionCard — affiche une question avec ses options
 * Après réponse : colorise ok/ko + affiche l'explication
 */
export default function QuestionCard({ question, index, color, chosenIdx, onAnswer, themeLabel }) {
  const answered = chosenIdx !== undefined

  return (
    <div className={`q-card ${answered ? (chosenIdx === question.ans ? 'answered-ok' : 'answered-ko') : ''}`}>
      
      {/* META */}
      <div className="q-meta">
        <span className={`q-num ${color}`}>Q{index + 1}</span>
        <div style={{ display:'flex', gap:5, flexWrap:'wrap' }}>
          {question.img && <span className="q-img-tag">🖼️ Schéma</span>}
          <span className="q-theme">{themeLabel}</span>
        </div>
      </div>

      {/* BLOC IMAGE ASCII */}
      {question.img && (
        <div className="img-block">
          <div className="img-block-label">📊 Situation à analyser</div>
          <div className="img-visual">{question.imgDesc}</div>
          {question.imgCap && <div className="img-caption">{question.imgCap}</div>}
        </div>
      )}

      {/* TEXTE */}
      <div className="q-text" dangerouslySetInnerHTML={{ __html: question.q }} />

      {/* OPTIONS */}
      <div className="options-list">
        {question.opts.map((opt, i) => {
          let cls = 'option-btn'
          if (answered) {
            if (i === question.ans) cls += ' correct'
            else if (i === chosenIdx) cls += ' wrong'
          }
          return (
            <button
              key={i}
              className={cls}
              disabled={answered}
              onClick={() => onAnswer(question.id, i)}
            >
              {opt}
            </button>
          )
        })}
      </div>

      {/* EXPLICATION */}
      {answered && (
        <div className="explication" dangerouslySetInnerHTML={{ __html: '💡 ' + question.exp }} />
      )}
    </div>
  )
}
