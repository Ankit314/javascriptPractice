let laptops=["Lenovo","Alienware","MacBook","Acer","Dell"];
console.log("Laptops :"+laptops);
laptops.copyWithin(2,0);
console.log('\n After copyWithin(2,0):');
console.log("Laptops :"+laptops);
laptops.copyWithin(2,0,3);
console.log("Laptops:"+laptops);