let text="Hellow JavaScript Learners, Welcome to the World of JavaScript";
let searchString=/JavaScript/g;
let match= text.matchAll(searchString);
console.log("Matches found:");
for(const matches of match){
    console.log(match[0]+":at index"+matches.index);

}