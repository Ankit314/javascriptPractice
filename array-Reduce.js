let myNumber=[5,10,3,6,8,1]

let result1 = myNumber.reduce(adder);
let result2 =myNumber.reduce(adder,50);

function adder(total,value){
    return total+value;
}

console.log("myNumbers :"+myNumber);
console.log("Sum is (result 1) :"+result1);
console.log("Sum is (result 2) :"+result2);
