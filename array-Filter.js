let age =[12,45,36,10,50,5,78,65,20]

let eligibleForVoting=age.filter(ageFilter)

function ageFilter(value){
    return value>=18;

}
console.log("Ages:");
console.log(age);
console.log("Eligible for Voting")
console.log(eligibleForVoting)