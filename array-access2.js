let laptops=["Lenovo","Alienware","MacBook"];
console.log("Using for loop :");

for(let i=0;i<laptops.length;i++){
    console.log(laptops[i]);
}

console.log("Using for-in loop :");

for(let i in laptops){
    console.log(laptops[i]);
}
console.log("Using for-of loop :");

for(let i of laptops){
    console.log(i)
}

console.log("Using ForEach:");
laptops.forEach(show);

function show(value){
    console.log(value);
}