let laptops=["Lenovo","Alienware","MacBook","Acer","Dell"];
console.log("Laptops :"+laptops);
let newLaptops= laptops.toSpliced(2,0,"ROG","Moto");
console.log("\n Afterm toSpliced :");
console.log("Mobiles :"+laptops);
console.log("NEW Mobiles :"+newLaptops);