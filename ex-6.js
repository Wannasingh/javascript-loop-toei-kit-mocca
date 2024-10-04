// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here

// for (let num = companyNameLength; num >= 0; num--) {
//   console.log(companyName[num]);
//   reversedCompanyName = reversedCompanyName + companyName[num];
// }
// console.log(reversedCompanyName);

for (const num in companyName) {
  reversedCompanyName = companyName[num] + reversedCompanyName;
}
console.log(reversedCompanyName);
