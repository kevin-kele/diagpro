import React from 'react'

/**
 * SetupPanel — sélection du mode et des thèmes avant de démarrer
 */
export default function SetupPanel({ color, mode, setMode, themes, activeThemes, toggleTheme, totalQ, onStart }) {
  const modes = [
    { id: 'all',  label: `📚 Tout (${totalQ} Q)` },
    { id: 'rand', label: '🎲 25 aléatoires' },
    { id: 'img',  label: '🖼️ Sur images' },
  ]

  return (
    <div className="setup-card">
      {/* Modes */}
      <div className="mode-bar">
        {modes.map(m => (
          <button
            key={m.id}
            className={`mode-btn ${mode === m.id ? `on-${color}` : ''}`}
            onClick={() => setMode(m.id)}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Thèmes (uniquement en mode "tout") */}
      {mode === 'all' && (
        <div className="theme-row">
          {Object.entries(themes).map(([key, label]) => (
            <button
              key={key}
              className={`theme-chip ${activeThemes.has(key) ? 'on' : ''}`}
              onClick={() => toggleTheme(key)}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      <button className={`start-big ${color}`} onClick={() => onStart(false)}>
        Démarrer →
      </button>
    </div>
  )
}
