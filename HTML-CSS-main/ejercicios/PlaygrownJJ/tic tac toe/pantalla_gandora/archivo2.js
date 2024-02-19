import  {contador, conta}  from "../App.js";
var cantidad = document.getElementById("cantidad");
if (contador == 1) {
    cantidad.innerHTML = `<h2>La partida tuvo ${conta(contador)} movimiento</h2>`;
  } else {
    cantidad.innerHTML = `<h2>La partida tuvo ${conta(contador)} movimientos</h2>`;
  }
  console.log(contador)


