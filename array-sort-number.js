let myNumber=[2,1,5,3,6,7,8,9,0];
console.log("myNumbers (Unsorted):");
console.log(myNumber);
sortFunction=function(a,b){
    return a-b
};
myNumber.sort(sortFunction);
console.log("myNumbers (Sorted):");
console.log(myNumber);


sortFunction=function(a,b){
    return b-a
};
myNumber.sort(sortFunction);
console.log("myNumbers (Sorted-decreasing order):");
console.log(myNumber);
