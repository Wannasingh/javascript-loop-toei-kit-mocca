// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";
let companyNameLength = companyName.length - 1;
// Start coding here

for (let num = companyNameLength; num >= 0; num--) {
  console.log(companyName[num]);
  reversedCompanyName = reversedCompanyName + companyName[num];
}
console.log(reversedCompanyName);
