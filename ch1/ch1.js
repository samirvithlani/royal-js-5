//c printf //c cout // 
//log,info,error  -->console
console.log("Hello World");
console.info("Hello World");
console.error("Hello World") 
console.warn("Hello World");

var a = 100 
var b = 100.25
var flag = true
var userName = "raj"

console.log(a+100)
console.log(b+25.25)
console.log(flag)
console.log(userName+100)

const age = 50
console.log(age)
//age = 15
console.log(age)
console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(flag))
console.log(typeof(userName))

//object JSON javascript object notation <--> key value pair $usd

var employee ={

    name:"raj",
    age:50,
    salary:25000,
    isActive:false,
    address:{
        city:"pune",
        state:"maharashtra",
        pincode:411041
    }
}
employee.name = "jaya"
console.warn(employee)
//console.log(employee.address.city)
var employees =[
    {

        name:"raj",
        age:50,
        salary:25000,
        isMarried:false,
        address:{
            city:"pune",
            state:"maharashtra",
            pincode:411041
        }
    },
    {

        name:"jay",
        age:45,
        salary:45645,
        isMarried:true,
        address:{
            city:"Ahmedabad",
            state:"gujarat",
            pincode:380052
        }
    }
]
for(var i=0;i<employees.length;i++){
    
    if(employees[i].isMarried){
        console.log(employees[i].name)
    }
    //console.log(employees[i].isMarried)
    //console.log(employees[i].address.city)
    
}
///[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
var student = [
    {
        name:"parth",
        age:50,
        courses :[
            {
                cname:"java",
                fees:45000
            },
            {
                cname:"python",
                fees:45000
            }
        ]
    },
    {
        name:"kenil",
        age:50,
        courses :[
            {
                cname:"java",
                fees:45000
            }
        ]
    },
]


console.log(student)

