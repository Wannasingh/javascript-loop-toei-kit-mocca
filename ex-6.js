// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
let j = companyName.length-1;
for(let i=companyName.length-1;i>=0;i--){
    
    console.log(companyName[i] + i);
    console.log(j-i)
    reversedCompanyName = reversedCompanyName + companyName[i];
}
console.log(reversedCompanyName)

