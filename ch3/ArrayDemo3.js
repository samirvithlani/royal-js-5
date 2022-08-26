var data = ["amit","raj","neha","jay","niraj","parth"];
var x = [
    {
        name:"amit",
    },
    {
        name:"raj",
    }
]

var index = data.indexOf("amit",2);
var index1 = data.lastIndexOf("amit");
console.log(index);
console.log(index1);

console.log(data.join(","))

//console.log(data.reverse());

//data = data.fill("#",0,2);
//data.splice(2,0,"Abhishek","abc");
//data.splice(-10)
// copy
// 2nd positiin
//data.copyWithin(2,0,1);
data.map(x=>x.toUpperCase()).forEach(x=>console.log(x));
data.flatMap(x=>x.toUpperCase()).forEach(x=>console.log(x));

//console.log(res2);
data.forEach(x=>console.log(x.toUpperCase()));
var res = data.every(x=>x.length>3);
var res1 = data.some(x=>x.length>7);
console.log(res);
console.log(res1);





//console.log(data.keys());

//console.log(data);






