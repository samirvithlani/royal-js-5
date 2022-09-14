document.getElementById("btn").addEventListener("click", () => {
  console.log("Hello World");
});
document.getElementById("tag").addEventListener("mouseover", () => {
  document.getElementById("tag").style.backgroundColor = "red";
});
document
  .getElementsByClassName("header")[0]
  .addEventListener("mouseover", () => {
    document.getElementsByClassName("header")[0].style.backgroundColor = "red";
    document.getElementsByClassName("header")[1].style.backgroundColor = "red";
    document.getElementsByClassName("header")[2].style.backgroundColor = "red";
  });

//document.getElementsByTagName("p")[0].addEventListener("mouseover",()=>{change()});
document.getElementsByTagName("p")[0].addEventListener("mouseover", change);

function change() {
  document.getElementsByTagName("p")[0].style.backgroundColor = "red";
}
document.getElementById("clk").addEventListener("click", () => {
  //   setTimeout(() => {
  //     alert("Hello World");
  //   }, 5000);
//   setInterval(() => {
//     alert("Hello World");
//   },,3);
     //var x = confirm("Are you sure?");
     //alert(x)
     close();
    
});
