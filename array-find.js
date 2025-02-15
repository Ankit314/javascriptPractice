let myNumber =[2,3,4,5,6,7];
let result=myNumber.find(myFunction);
function myFunction(value,index,array){
    return value >5;

}
console.log("First Value greater than 5 found in the array is :"+result);
