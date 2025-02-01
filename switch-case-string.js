let temp="india";
let country=temp.toLowerCase();

switch(country){
    case "india":
        console.log("country code is +91 :");
        break;
    case "us":
        console.log("Country code is +1");
        break;
    case "italy":
        console.log("Countary code is +39");
        break;
    case "spain":
        console.log("Contary code is +34");
        break;
    default:
        console.log("Invalid");                
}