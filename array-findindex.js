let myNumber=[2,3,6,4,8];
let result =myNumber.findIndex(myFunction);
function myFunction(value , index ,array){
    return value >5;
}

console.log("First Value greater than 5 found at index :"+result);