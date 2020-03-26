const scores = [50, 25, 0, 30, 100]
scores.forEach((score) => {
  score === 100 ? console.log('High Score 🎆') : console.log('You do not have the high score try again')
})

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    console.log(`score: ${scores[i]}`)
    continue
  }

  console.log(`Your score was: ${scores[i]}`)

  if (scores[i] === 100) {
    console.log(`🎆 you have the high score`)
    break
  }
}
