let amount=50;
console.log("Bill Amount :"+amount);

if(amount>=1000){
    amount=amount-200;
    console.log("Discount of 200");
}
else if(amount>=500){
    amount=amount-100;
    console.log("Discount of 100");
}

else if (amount>=100){
    amount=amount-10;
    console.log("Discount of 10");
}

else{
    console.log("No Discount");
}

console.log("Bill to pay after discount :"+amount)