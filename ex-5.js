// Exercise #5: Concatenate the Alphabets
let companyName = "TechUp";
let number = 0;
// Start coding here

for (const num in companyName) {
  number = number + 1;
  //   console.log("Number " + number + " character is " + companyName[num]);
  console.log(`Number ${number} character is ${companyName[num]}`);
}
