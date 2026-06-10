import { useState, useCallback } from 'react'
import { shuffle, randomSubset } from '../utils/shuffle'

/**
 * useQuiz — gère tout l'état d'un module QCM
 * @param {Array}  questions  — tableau de questions du module
 * @param {Object} themes     — map themeKey → label
 */
export function useQuiz(questions, themes) {
  const [mode, setMode] = useState('all')             // 'all' | 'rand' | 'img'
  const [activeThemes, setActiveThemes] = useState(new Set(Object.keys(themes)))
  const [phase, setPhase] = useState('setup')         // 'setup' | 'quiz' | 'result'
  const [currentQ, setCurrentQ] = useState([])
  const [answers, setAnswers] = useState({})          // { id: chosenIndex }
  const [wrongIds, setWrongIds] = useState([])

  // ── DÉMARRER ────────────────────────────────────────────
  const start = useCallback((reviewMode = false) => {
    let pool
    if (reviewMode) {
      pool = questions.filter(q => wrongIds.includes(q.id))
    } else if (mode === 'img') {
      pool = questions.filter(q => q.img)
    } else if (mode === 'rand') {
      pool = randomSubset(questions, 25)
    } else {
      pool = questions.filter(q => activeThemes.has(q.theme))
      if (!pool.length) pool = [...questions]
    }
    setCurrentQ(shuffle(pool))   // ← mélange à chaque démarrage
    setAnswers({})
    setPhase('quiz')
  }, [questions, mode, activeThemes, wrongIds])

  // ── RÉPONDRE ─────────────────────────────────────────────
  const answer = useCallback((id, idx) => {
    setAnswers(prev => {
      if (prev[id] !== undefined) return prev
      return { ...prev, [id]: idx }
    })
  }, [])

  // ── RÉSULTATS ─────────────────────────────────────────────
  const finish = useCallback(() => {
    const wrong = currentQ
      .filter(q => answers[q.id] !== q.ans)
      .map(q => q.id)
    setWrongIds(wrong)
    setPhase('result')
  }, [currentQ, answers])

  // ── RESET ────────────────────────────────────────────────
  const reset = useCallback(() => {
    setPhase('setup')
    setAnswers({})
  }, [])

  // ── TOGGLE THEME ─────────────────────────────────────────
  const toggleTheme = useCallback((key) => {
    setActiveThemes(prev => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }, [])

  // ── STATS ─────────────────────────────────────────────────
  const score   = currentQ.filter(q => answers[q.id] === q.ans).length
  const done    = Object.keys(answers).length
  const total   = currentQ.length
  const pct     = total > 0 ? Math.round(done / total * 100) : 0
  const allDone = done === total && total > 0

  return {
    mode, setMode,
    activeThemes, toggleTheme,
    phase,
    currentQ, answers,
    wrongIds,
    start, answer, finish, reset,
    reviewWrong: () => start(true),
    score, done, total, pct, allDone,
  }
}
