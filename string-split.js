let text="Hello Programming Learners-Let's Explore JavaScript";
let splitText=text.split("");
console.log("Text is :"+text);
console.log("Split text is :"+splitText);
for(let i=0;i<splitText.length;i++){
    console.log("Array="+splitText[i]+":"+i);
}

text="www.important.tips";
splitText=text.split(".");
console.log("Text is :"+text);
console.log("Split text at 0:"+splitText[0]);
console.log("Split text at 1:"+splitText[1]);
console.log("Split text at 2:"+splitText[2]);
