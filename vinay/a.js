var data =[
    {
        name:"samir",
        age:20,
        salary:25000
    },
    {
        name:"raj",
        age:25,
        salary:15000
    },
    {
        name:"mihit",
        age:45,
        salary:45000
    }
]
var max=-1;
function ans1(x)
{
    if(max<x.salary)
    {
        max=x.salary
    }
}
data.filter(x=>ans1(x))
var ans=data.filter(x=>x.salary==max)
console.log(ans);

var data1=data.sort((a,b)=>b.salary-a.salary)
console.log(data1)

function df(c)
{
    c.name=c.name.toUpperCase();
    c.salary=c.salary*2;
}


var ans3=data.map(x=>df(x))
console.log(data)

