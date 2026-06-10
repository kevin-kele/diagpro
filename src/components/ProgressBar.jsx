import React from 'react'

export default function ProgressBar({ score, done, total, pct, color }) {
  return (
    <div className="prog-strip">
      <div className={`prog-score ${color}`}>{score}/{total}</div>
      <div className="prog-inner">
        <div className="prog-label">Question {done}/{total}</div>
        <div className="prog-track">
          <div className={`prog-fill ${color}`} style={{ width: pct + '%' }} />
        </div>
      </div>
      <div className="prog-pct">{pct}%</div>
    </div>
  )
}
