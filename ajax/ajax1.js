function call(){

    let request = new XMLHttpRequest();
    //open a connection
    request.open("GET","https://reqres.in/api/users?page=2",true)
    request.send()
    request.onload = function(){
        
        var data  = request.responseText;
        console.log(data);
    }
    

}

function call1(){

    let req = new XMLHttpRequest()

    req.open("POST","https://reqres.in/api/users",true)
    req.setRequestHeader("Content-Type","application/json")
    req.send(JSON.stringify({
        name:"morpheus",
        job:"leader"
    }))

    req.onload = function(){
        var data = req.responseText;
        console.log(data);
    }

}
function delete1(){

    let delreq =    new XMLHttpRequest();
    delreq.open("DELETE","https://reqres.in/api/users/2",true)
    delreq.send()
    delreq.onload = function(){
        var data = delreq.responseText;
        var status = delreq.status;
        console.log(data);
        console.log(status);
    }

}
//call()
//call1()
delete1()