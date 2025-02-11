let text="Hellow JavaScript Learners, Welcome to the World of JavaScript";
let searchString=/JavaScript/g;
let matches=text.match(searchString);
console.log("Matches found :"+matches);
searchString=/Submit/g;
matches=text.match(searchString);
console.log("Matches found:"+matches);