let myNumber1=[12,45,36,11,65];
let myNumber2=[21,52,66,18,42];
let myNumber3=[1,5,3,9,4];

let result1=myNumber1.some(checker)
let result2=myNumber2.some(checker)
let result3= myNumber3.some(checker)

function checker(value){
    return value>=10;
}

console.log("myNumber1 :"+myNumber1);
console.log("myNumber2 :"+myNumber2);
console.log("myNumber3 :"+myNumber3);

console.log("myNumber1 some elements >=10:"+result1)
console.log("myNumber2 some elements >=10:"+result2)
console.log("myNumber3 some elements >=10:"+result3)