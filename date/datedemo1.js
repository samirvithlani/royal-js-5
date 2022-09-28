date = new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getMinutes());
console.log(date.getMonth());
console.log(date.getSeconds());
console.log("time",date.getTime());
console.log("offset",date.getTimezoneOffset());
console.log(date.getUTCDate());
console.log(date.getUTCDay());
console.log(date.getUTCFullYear());
console.log(date.getUTCHours());
console.log(date.getUTCMilliseconds());
console.log(date.getUTCMinutes());
console.log(date.getUTCMonth());
console.log(date.getUTCSeconds());

console.log("year",date.getYear());
console.log(date.toDateString());
console.log(date.toGMTString());
console.log(date.toISOString());

console.log("json",date.toJSON());
//var json = date.toJSON();

console.log(date.toLocaleDateString());

console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());

console.log(date.toTimeString());
console.log(date.toUTCString());
console.log(date.valueOf());
date1 = new Date(2017, 11, 24, 10, 33, 30, 0);
var x = date - date1;
date2 = new Date(x)







