let myNumber= [10,50,1000];
let ansReduce= myNumber.reduce(myFunctions);
let ansReduceRight= myNumber.reduceRight(myFunctions)

function myFunctions(result, value){
    return result/value;
}

console.log("myNumber :"+myNumber);
console.log("Answer reduce() :"+ansReduce);
console.log("Answer reduceRight() :"+ansReduceRight);
