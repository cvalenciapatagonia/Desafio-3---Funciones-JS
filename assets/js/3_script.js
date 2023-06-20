//? EJERCICIO 3

function pintar(color = "green") {
  const parrafo = document.getElementById("ele1");
  parrafo.style.backgroundColor = color;
}

pintar(); 

document.addEventListener("click", function () {
  pintar("yellow");
});
