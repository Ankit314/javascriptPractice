let myNumbers=[23,11,9,42,66,7,39,55];
let min= minFinder(myNumbers);
let max = maxFinder(myNumbers);
 
function minFinder(arr){
    return Math.min.apply(null,arr);
}

function maxFinder(arr){
    return Math.max.apply(null,arr);
}
console.log("myNumbers:"+myNumbers);


console.log("Smallest element is :"+min);
console.log("Largest element is :"+max);