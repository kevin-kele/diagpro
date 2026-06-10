const KEY = 'diagpro_stats_v1'
export function loadStats() {
  try { return JSON.parse(localStorage.getItem(KEY)) || { total: 0, correct: 0 } }
  catch { return { total: 0, correct: 0 } }
}
export function saveStats(stats) {
  try { localStorage.setItem(KEY, JSON.stringify(stats)) } catch {}
}
export function addResult(correct, total) {
  const s = loadStats()
  s.total += total
  s.correct += correct
  saveStats(s)
  return s
}
