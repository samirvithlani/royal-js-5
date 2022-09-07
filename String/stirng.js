var data = "Hello World";
var len = data.length

var char = data.charAt(0);
console.log(len);
console.log(data);
console.log(char);


data = data.concat("Goodbye"," World ");
console.log(data);

var ser = data.lastIndexOf("W");
console.log(ser);
//indexOf

data = data.trimStart();
console.log(data);


//data  = data.substring(12)
console.log(data);


var demodata = "s,a,,m,i,,r"
console.log(demodata.length);
//var arr = demodata.split(",");
//console.log(arr);

data.includes("World");

data  = data.repeat(3);
console.log(data);