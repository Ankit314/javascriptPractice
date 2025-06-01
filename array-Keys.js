let company = ["Google","Microsoft","Apple","Samsung"]

let cKeys= company.keys();
let cValue=company.values();
let cEntries=company.entries();

for(let ck of cKeys){
    console.log(ck)

}
for(let cV of cValue){
    console.log(cV)

}

for(let cE of cEntries){
    console.log(cE)

}