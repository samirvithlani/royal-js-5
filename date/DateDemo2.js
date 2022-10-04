var date  = new Date();
console.log(Date.now());

var date2 = new Date("2017-12-24");
console.log(date2);
date.setDate(1);

var date3 = new Date(date)
console.log(date3);



//parse date
///dd-mm-yyyy
var date1 = Date.parse("02-03-2017 10:33:30");
console.log(date1);


date.setFullYear(2017);
date.setMonth(11);
date.setDate(24);
date.setHours(10);
date.setMinutes(33);
date.setSeconds(30);
date.setMilliseconds(0);
console.log(date);










