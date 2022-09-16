document.getElementById("btn1").addEventListener("click",()=>{

    localStorage.setItem("name","John");
    localStorage.setItem("name1","John");
    sessionStorage.setItem("name","jaya");

    console.log(localStorage.getItem("name"));

});

document.getElementById("btn2").addEventListener("click",()=>{

    localStorage.removeItem("name");
    sessionStorage.removeItem("name");
    //localStorage.clear();
    //sessionStorage.clear();
})