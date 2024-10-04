// Exercise #1: Decrease the Student Scores
let scores = [89, 70, 60, 50, 100, 71];
let newScore = [];
// Start coding here

for (const num in scores) {
  newScore.push(scores[num] - 10);
}

console.log(newScore);
