async function callApi(){

    var url = "https://reqres.in/api/users?page=2"
    var res = await fetch(url);
    var data = await res.json();
    console.log(data);

    //THEN PROMISE CATCH FINALLY
    

}
async function callApi2(){

var data= 	{"name":"test","salary":"123","age":"23"}

    var url = "https://dummy.restapiexample.com/api/v1/create"

    var res = await fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });

    var data = await res.json();
    console.log(data);
}
async function getweatherData (){

    var url = "https://open-weather13.p.rapidapi.com/city/Ahmedabad"
    var res = await fetch(url,{
        "method": "GET",
        "headers": {
            'X-RapidAPI-Key': '2cc1fb7fd1msh4c4e1eb5e0cf8e5p13cfd1jsn422b10471be6',
		    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    })
    var data = await res.json();
    console.log(data);

}

callApi();
callApi2();
getweatherData();