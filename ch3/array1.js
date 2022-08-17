var names = ["John", "Paul", "George", "Ringo","a","amit","ajay"];


function filter1 (arr,q){

    function a(elem){
    
        return elem.startsWith(q);
    }
    return arr.filter(a);
}


var employees = [
    {
        id:101,
        name:"raj",
        salary:10000,
    },
    {
        id:102,
        name:"jay",
        salary:20000,
    },
    {
        id:103,
        name:"ajay",
        salary:30000,
    }
]

//var newar =names.filter(x=>x.startsWith("a")&&x.endsWith("y"));
//var newar = filter1(names,"a");


var newar =employees.filter(x=>x.salary>=15000);

var aftrremove = employees.filter(x=>x.id!=103);
console.log(aftrremove);





