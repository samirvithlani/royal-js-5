//async await...  "loading"  "fulfilled" "rejected"

function promise1(){


    var pr =  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("error in promise")
        },2000)
    })

   pr.then((data)=>{
         console.log(data)
   }).catch((err)=>{
         console.log("erorr.....",err)
   }).finally(()=>{
            console.log("finally....")
   })


}
promise1();


function fetchData (){

    var promisedData = fetch("https://reqres.in/api/users?page=2")
    promisedData.then((data)=>{
        console.log("-----",data)
    
      console.log(data.json())
        
    })

}
fetchData();



