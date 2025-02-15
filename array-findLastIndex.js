let myNumber =[2,3,8,9,6];
let result = myNumber.findLastIndex(myFunction);

function myFunction (value, index , array){
    return value>5;
}
console.log("Last Value greater than 5 found at index :"+result);
