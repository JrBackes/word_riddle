const defaultMessage = 'Sorteio da palavra --- Good Luck'

export function getWordOfTheDay() {
  if (location.search) {
    try {
      const query = atob(location.search.slice(1))
      if (query.length !== 5) {
        alert(`Deu ruim no tamanho pessoal. ${defaultMessage}`)
      } else {
        return query
      }
    } catch (e) {
      alert(`Deu ruim na palavra galera. ${defaultMessage}`)
    }
  }

  const now = new Date()
  const start = new Date(2022, 0, 0)
  const diff = Number(now) - Number(start)
  let day = Math.floor(diff / (1000 * 60 * 60 * 24))
  while (day > answers.length) {
    day -= answers.length
  }
  return answers[day]
}


// Palavras que serão sorteadas como resposta final
const answers = [
  'babys',
  'naval',
  'serve',
  'abate',
  'react',
  'adobe',
  'acaba'
]

export const allWords = [...answers]
