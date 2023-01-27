var x = document.getElementById("boton");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  document.getElementById("boton").style.color = "blue";  
}

function mySecondFunction() {
  document.getElementById("boton").style.color = "yellow";
  
}

function myThirdFunction() {
  document.getElementById("boton").style.color = "black";  
}