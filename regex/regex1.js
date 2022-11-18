//var exp = /^a..m/
//var exp = /..m/
//var exp = /[0-9]/

//a(?=b) // a followed by b
//a(?!b) // a not followed by b
//a(?<=b) // a preceded by b
//a(?<!b) // a not preceded by b
var exp1 = /^(?=.*[0-9])(?=.*[@#$])[a-zA-Z0-9@#$]{8}$/
var data = "Sam@1231"
if(data.match(exp1)){
    console.log("valid")
}
else{
    console.log("invalid")
}


