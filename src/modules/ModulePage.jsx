import React, { useCallback } from 'react'
import { useQuiz } from '../hooks/useQuiz'
import SetupPanel from '../components/SetupPanel'
import ProgressBar from '../components/ProgressBar'
import QuestionCard from '../components/QuestionCard'
import ResultScreen from '../components/ResultScreen'

/**
 * ModulePage — page générique pour un module QCM (gaz, elec, termites, amiante)
 * Reçoit la config du module et gère setup → quiz → résultat
 */
export default function ModulePage({ config, onBack, onScoreUpdate }) {
  const { id, color, label, subtitle, questions, themes } = config

  const quiz = useQuiz(questions, themes)

  // Calcul du breakdown par thème pour l'écran résultat
  const themeBreakdown = React.useMemo(() => {
    if (quiz.phase !== 'result') return {}
    const map = {}
    quiz.currentQ.forEach(q => {
      const label = themes[q.theme] || q.theme
      if (!map[label]) map[label] = { ok: 0, tot: 0 }
      map[label].tot++
      if (quiz.answers[q.id] === q.ans) map[label].ok++
    })
    return map
  }, [quiz.phase, quiz.currentQ, quiz.answers, themes])

  // Notifier le parent du score en fin de session
  const handleFinish = useCallback(() => {
    quiz.finish()
    if (onScoreUpdate) onScoreUpdate(quiz.score, quiz.total)
  }, [quiz, onScoreUpdate])

  return (
    <div className="page-wrap">
      {/* HEADER */}
      <div className="mod-header">
        <button className="back-btn" onClick={onBack}>← Accueil</button>
        <div className="mod-info">
          <h2>{label}</h2>
          <p>{subtitle}</p>
        </div>
      </div>

      {/* SETUP */}
      {quiz.phase === 'setup' && (
        <SetupPanel
          color={color}
          mode={quiz.mode}
          setMode={quiz.setMode}
          themes={themes}
          activeThemes={quiz.activeThemes}
          toggleTheme={quiz.toggleTheme}
          totalQ={questions.length}
          onStart={quiz.start}
        />
      )}

      {/* QUIZ */}
      {quiz.phase === 'quiz' && (
        <>
          <ProgressBar
            score={quiz.score}
            done={quiz.done}
            total={quiz.total}
            pct={quiz.pct}
            color={color}
          />

          {quiz.currentQ.map((q, i) => (
            <QuestionCard
              key={q.id}
              question={q}
              index={i}
              color={color}
              chosenIdx={quiz.answers[q.id]}
              onAnswer={quiz.answer}
              themeLabel={themes[q.theme] || q.theme}
            />
          ))}

          {quiz.allDone && (
            <button className="finish-btn" onClick={handleFinish}>
              📊 Voir mes résultats
            </button>
          )}

          <div className="btn-row" style={{ marginBottom: 20 }}>
            <button className="btn btn-secondary" onClick={quiz.reset}>🏠 Accueil module</button>
          </div>
        </>
      )}

      {/* RÉSULTAT */}
      {quiz.phase === 'result' && (
        <ResultScreen
          score={quiz.score}
          total={quiz.total}
          wrongCount={quiz.wrongIds.length}
          color={color}
          themeBreakdown={themeBreakdown}
          onReset={quiz.reset}
          onReview={quiz.reviewWrong}
        />
      )}
    </div>
  )
}
