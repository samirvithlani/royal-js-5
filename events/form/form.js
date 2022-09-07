/*
    data -->
    onject ->
    print -->
*/

function submitForm(){

    //alert("Form submitted successfully");
    var name = document.getElementById("name").value
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