let laptops=["Lenovo","Alienware","MacBook","Acer","Dell"];
console.log("Laptops :"+laptops);
laptops.splice(2,0,'ROG','Moto');
console.log("\n After splice :");
console.log("Laptops :"+laptops);
laptops.splice(1,2,"Apple","Google");
console.log("\n After splice :");
console.log("Laptops :"+laptops);
