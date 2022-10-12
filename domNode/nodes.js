function addElements(){

    var element = document.getElementById("container");
    var title = document.createElement("h1");
    var link = document.createElement("a");
    title.innerHTML = "Hello World";
    link.href = "http://www.google.com";
    link.innerHTML = "Click Here";
    element.appendChild(title);

    var a = document.createElement("h6")
    a.innerHTML = "This is a new element";
    element.insertBefore(a, title);
    
    
}

function removeElemet(){

    //var element = document.getElementById("container");
    document.getElementById("text").remove();


}