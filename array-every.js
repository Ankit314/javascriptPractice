let ageGroup1=[12,45,36,11,65];
let ageGroup2=[21,52,66,18,42];

let ageGroup1Eligible=ageGroup1.every(ageChecker)
let ageGroup2Eligible= ageGroup2.every(ageChecker)

function ageChecker(value){
    return value>=18;
}

console.log("Age Group 1 :"+ageGroup1)
console.log("Age Group 2 :"+ageGroup2)

console.log("Age Group 1 Eligble :"+ageGroup1Eligible)
console.log("Age Group 2 Eligble :"+ageGroup2Eligible)