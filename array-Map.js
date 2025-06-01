let myNumber=[1,2,3,4,5,6,7,8,9]

let myNumbersq=myNumber.map(square);

console.log("myNumber: ")
console.log(myNumber)
console.log("myNumbersq :")
console.log(myNumbersq)

function square(value){
    return value*value;

}