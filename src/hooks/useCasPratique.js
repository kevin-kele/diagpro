import { useState, useCallback } from 'react'

/**
 * useCasPratique — gère l'état d'un cas pratique
 * Phase : 'select' → 'briefing' → 'quiz' → 'result'
 */
export function useCasPratique(casList) {
  const [phase, setPhase]     = useState('select')   // 'select' | 'briefing' | 'quiz' | 'result'
  const [selectedCas, setSelectedCas] = useState(null)
  const [answers, setAnswers] = useState({})          // { questionId: chosenIndex }
  const [wrongIds, setWrongIds] = useState([])

  const selectCas = useCallback((cas) => {
    setSelectedCas(cas)
    setAnswers({})
    setWrongIds([])
    setPhase('briefing')
  }, [])

  const startQuiz = useCallback(() => setPhase('quiz'), [])

  const answer = useCallback((qId, idx) => {
    setAnswers(prev => {
      if (prev[qId] !== undefined) return prev
      return { ...prev, [qId]: idx }
    })
  }, [])

  const finish = useCallback(() => {
    if (!selectedCas) return
    const wrong = selectedCas.questions
      .filter(q => answers[q.id] !== q.ans)
      .map(q => q.id)
    setWrongIds(wrong)
    setPhase('result')
  }, [selectedCas, answers])

  const reset = useCallback(() => {
    setPhase('select')
    setSelectedCas(null)
    setAnswers({})
  }, [])

  const score = selectedCas
    ? selectedCas.questions.filter(q => answers[q.id] === q.ans).length
    : 0
  const total = selectedCas ? selectedCas.questions.length : 0
  const done  = Object.keys(answers).length
  const allDone = done === total && total > 0

  return {
    phase, selectedCas,
    answers, wrongIds,
    selectCas, startQuiz, answer, finish, reset,
    score, total, done, allDone,
  }
}
