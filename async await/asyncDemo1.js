async function demo(){

    let response = await fetch("https://reqres.in/api/users?delay=3");
    //////////////////
    let data =   await response.json();

    console.log(data);

            
}

demo();