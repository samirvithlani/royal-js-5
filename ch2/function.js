//
function sum(){

        console.log("sum")
}
function add(a,b){

    return a + b;
}
sum()
var x = add(12,22)
console.log(x)
console.log(add(100,200))

// lambada -->arrow function
// auto add[{}]

const div = (a,b)=>{

    return a/b;
}

console.log(div(10,2))

function calling(){

    console.log("calling")

    function called(){

        console.log("called")
    }
    return called();
}

calling();


