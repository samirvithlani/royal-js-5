var tech = ["java", "python", "c++", "c#","javascript", "php", "Ruby"];
console.log(tech);

var len = tech.length;
console.log(len);
// for(var i=0;i<tech.length;i++){
//     console.log(tech[i]);
// }

var r = tech.push("c");
console.log(tech);
console.log(r);

console.log(tech.pop());
console.log(tech);
//////////////////////////////////////////////////////////////

//sort


//const s = 
//var ntech = tech.sort(sortbyLen);
var ntech = tech.sort((a,b)=>a.length - b.length);
console.log("tech....",ntech);

var numbers = [1000,1000000,20000000,1545454,8561651,45,10,25,36,7856595]
var snumbers = numbers.sort((a,b)=>a-b);

console.log("numbers....",snumbers);
