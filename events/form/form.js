/*
    data -->
    onject ->
    print -->
*/

function submitForm(){

    //alert("Form submitted successfully");
    var name = document.getElementById("name").value
    if(name == ""){
        document.getElementById("name").style.border = "1px solid red"
        document.getElementById("namevalidation").innerHTML = "Please enter your name"
    }
    //console.log("Form submitted successfully");
    var gender = document.getElementById("gender").value
    var email = document.getElementById("email").value
    var age = document.getElementById("age").value
    console.log(typeof(age))
    console.log(typeof(email))
    console.log(typeof(name))
    var user = {
        name: name,
        gender:gender,
        email:email,
        age:age
    }
    console.log(user);
    document.getElementById("data").innerHTML = JSON.stringify(user);
}
function searchData(){

    var x = document.getElementById("search").value
    console.log("searching data",x);
}

function demo(){
    console.log("demo function");
}
//validation
//null ->



function bluring(){

    var email = document.getElementById("email").value
    if(email == ""){

        document.getElementById("emailvalidation").innerHTML = "Please enter your email"
    }
    

}