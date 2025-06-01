let myNumbers=[23,11,9,42,66,7,39,55];
let min= myNumbers[0];
let max = myNumbers[0];
console.log("myNumbers :"+myNumbers);
for(let i=1; i<myNumbers.length; i++){
    if(max<myNumbers[i]){
        max=myNumbers[i];
    }

    if(min>myNumbers[i]){
        min=myNumbers[i];
    }
}

console.log("Smallest element is :"+min);
console.log("Largest element is :"+max);