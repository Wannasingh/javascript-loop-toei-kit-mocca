// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore = scores[0];
// Start coding here

for (const num in scores) {
  console.log(scores[num]);
  if (scores[num] < minScore) {
    minScore = scores[num];
  }
}

console.log(minScore);
