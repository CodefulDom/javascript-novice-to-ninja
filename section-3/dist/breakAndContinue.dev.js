"use strict";

var scores = [50, 25, 0, 30, 100];
scores.forEach(function (score) {
  score === 100 ? console.log('High Score 🎆') : console.log('You do not have the high score try again');
});

for (var i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    console.log("score: ".concat(scores[i]));
    continue;
  }

  console.log("Your score was: ".concat(scores[i]));

  if (scores[i] === 100) {
    console.log("\uD83C\uDF86 you have the high score");
    break;
  }
}