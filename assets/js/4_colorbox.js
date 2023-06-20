// DECLARACION DE VARIABLES Y ALMACENAMIENTO DE COLOR

const color1 = "red";
const color2 = "blue";
const color3 = "green";
let selectedColor = "";

// ASIGNACION DE COLOR DE CONTENEDORES POR TECLA
document.addEventListener('keydown', function (event) {
  if (event.key === 'a' || event.key === 'A') {
    selectedColor = color1;

  } else if (event.key === 's' || event.key === 'S') {
    selectedColor = color2;

  } else if (event.key === 'd' || event.key === 'D') {
    selectedColor = color3;
  }
});

// FUNCION QUE RECIBE COMO ARGUMENTO EL CONTENEDOR Y LA APLICACION DE CAMBIO DE COLOR
function changeColor(divId) {
  const div = document.getElementById(divId);
  div.style.backgroundColor = selectedColor;
}

// EVENTO QUE PERMITE EL CAMBIO DE COLOR MEDIANTE "CLICK" A LOS DIV
document.getElementById("div1").addEventListener("click", function() {
  changeColor("div1");
});

document.getElementById("div2").addEventListener("click", function() {
  changeColor("div2");
});

document.getElementById("div3").addEventListener("click", function() {
  changeColor("div3");
});

document.getElementById("div4").addEventListener("click", function() {
  changeColor("div4");
});