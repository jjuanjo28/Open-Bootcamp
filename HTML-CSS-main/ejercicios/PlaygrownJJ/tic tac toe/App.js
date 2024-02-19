

let cuadrado = document.querySelectorAll(".cuadrado");
let circulo = document.querySelectorAll(".circulo");
let cruz = document.querySelectorAll(".cruz");
var contador = 1;
var cantidad = document.getElementById("cantidad");

cuadrado.forEach((cuadrado) => {
  cuadrado.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  cuadrado.addEventListener("drop", (event) => {
    let ubicacion = event.target.attributes.id.nodeValue;

    console.log("soy la ubicacion: ", ubicacion);

    if (ubicacion == "cuadrado-uno") {
      var cuadradoNoPosibleUno = document.querySelector("#cuadrado-tres");
      cuadradoNoPosibleUno.classList.add("no_posible");
      var cuadradoNoPosibleDos = document.querySelector("#cuadrado-seis");
      cuadradoNoPosibleDos.classList.add("no_posible");
      var cuadradoNoPosibleTres = document.querySelector("#cuadrado-siete");
      cuadradoNoPosibleTres.classList.add("no_posible");
      var cuadradoNoPosibleCuatro = document.querySelector("#cuadrado-ocho");
      cuadradoNoPosibleCuatro.classList.add("no_posible");
      var cuadradoNoPosibleCinco = document.querySelector("#cuadrado-nueve");
      cuadradoNoPosibleCinco.classList.add("no_posible");
    }

    if (cuadrado.classList.length > 1) {
      if (cuadrado.children.length == 0) {
        drop(event);
        event.target.classList.remove("ocupado");
        limpiaTablero();
        return;
      }
      limpiaTablero();
      cuadrado.classList.add("ocupado");
      return;
    }
    limpiaTablero();
    drop(event);
    cuadrado.classList.add("ocupado");
  });
  limpiaTablero();
});

function limpiaTablero() {
  cuadrado.forEach((cuadrado) => {
    cuadrado.classList.remove("no_posible");
  });
}
circulo.forEach((circulo) => {
  circulo.setAttribute("draggable", "true");
  circulo.addEventListener("dragstart", (event) => {
    drag(event);
  });
});

cruz.forEach((cruz) => {
  cruz.setAttribute("draggable", "true");
  cruz.addEventListener("dragstart", (event) => {
    drag(event);
  });
  cruz.addEventListener("dragend", () => {});
});

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  if (event.target.classList.contains("no_posible")) {
    return;
  }
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
  if (contador == 1) {
    cantidad.innerHTML = `<h2>Llevamos ${contador} movimiento</h2>`;
  } else {
    cantidad.innerHTML = `<h2>Llevamos ${contador} movimientos</h2>`;
  }
  contador++;
  controlGanador();
}

function controlGanador() {
  // tomo el id de cada uno de los cuadrados
  let cuadradoUno = document.querySelector("#cuadrado-uno");
  let cuadradoDos = document.querySelector("#cuadrado-dos");
  let cuadradoTres = document.querySelector("#cuadrado-tres");
  let cuadradoCuatro = document.querySelector("#cuadrado-cuatro");
  let cuadradoCinco = document.querySelector("#cuadrado-cinco");
  let cuadradoSeis = document.querySelector("#cuadrado-seis");
  let cuadradoSiete = document.querySelector("#cuadrado-siete");
  let cuadradoOcho = document.querySelector("#cuadrado-ocho");
  let cuadradoNueve = document.querySelector("#cuadrado-nueve");
  // creo un array con los datos anteriores tomados x id
  let array = [
    cuadradoUno,
    cuadradoDos,
    cuadradoTres,
    cuadradoCuatro,
    cuadradoCinco,
    cuadradoSeis,
    cuadradoSiete,
    cuadradoOcho,
    cuadradoNueve,
  ];
  // hago un for para que recorra el array y lo cargue con los datos
  for (let i = 0; i < array.length; i++) {
    // si la posicion del array es diferente a 0 significa que tiene algo adentro y capturo su valor, asi me evito el error
    if (array[i].children.length != 0) {
      array[i] = array[i].children[0].classList.value;
    } else {
      // caso contrario, lo asigno como null
      array[i] = null;
    }
  }
  // genero un switch que te revise las convinaciones ganadoras
  switch (array.length > 0) {
    // todas son similares y deben verificar que ningun campo sea null y sean iguales al value asignado (circulo o cruz)
    case array[0] == array[1] &&
      array[1] == array[2] &&
      array[0] != null &&
      array[1] != null &&
      array[2] != null:
      if (array[0] == "cruz") {
        // se les asigna un setTimeout de 550 ms para mejorar la experiencia de jueso
        setTimeout(() => {
          location.href = "./pantalla_gandora/pantalla_ganadora_cruz.html";
        }, 550);
      } else {
        setTimeout(() => {
          location.href = "./pantalla_gandora/pantalla_ganadora_circulo.html";
        }, 550);
      }
      break;
    case array[3] == array[4] &&
      array[4] == array[5] &&
      array[3] != null &&
      array[4] != null &&
      array[5] != null:
      if (array[3] == "cruz") {
        setTimeout(() => {
          location.href = "./pantalla_gandora/pantalla_ganadora_cruz.html";
        }, 550);
      } else {
        setTimeout(() => {
          location.href = "./pantalla_gandora/pantalla_ganadora_circulo.html";
        }, 550);
      }
      break;
    case array[6] == array[7] &&
      array[7] == array[8] &&
      array[6] != null &&
      array[7] != null &&
      array[8] != null:
      if (array[6] == "cruz") {
        setTimeout(() => {
          location.href = "./pantalla_gandora/pantalla_ganadora_cruz.html";
        }, 550);
      } else {
        setTimeout(() => {
          location.href = "./pantalla_gandora/pantalla_ganadora_circulo.html";
        }, 550);
      }
      break;
    case array[0] == array[3] &&
      array[3] == array[6] &&
      array[0] != null &&
      array[3] != null &&
      array[6] != null:
      if (array[0] == "cruz") {
        setTimeout(() => {
          location.href = "./pantalla_gandora/pantalla_ganadora_cruz.html";
        }, 550);
      } else {
        setTimeout(() => {
          location.href = "./pantalla_gandora/pantalla_ganadora_circulo.html";
        }, 550);
      }
      break;
    case array[1] == array[4] &&
      array[4] == array[7] &&
      array[1] != null &&
      array[4] != null &&
      array[7] != null:
      if (array[1] == "cruz") {
        setTimeout(() => {
          location.href = "./pantalla_gandora/pantalla_ganadora_cruz.html";
        }, 550);
      } else {
        setTimeout(() => {
          location.href = "./pantalla_gandora/pantalla_ganadora_circulo.html";
        }, 550);
      }
      break;
    case array[2] == array[5] &&
      array[5] == array[8] &&
      array[2] != null &&
      array[5] != null &&
      array[8] != null:
      if (array[2] == "cruz") {
        setTimeout(() => {
          location.href = "./pantalla_gandora/pantalla_ganadora_cruz.html";
        }, 550);
      } else {
        setTimeout(() => {
          location.href = "./pantalla_gandora/pantalla_ganadora_circulo.html";
        }, 550);
      }
      break;
    case array[0] == array[4] &&
      array[4] == array[8] &&
      array[0] != null &&
      array[4] != null &&
      array[8] != null:
      if (array[0] == "cruz") {
        setTimeout(() => {
          location.href = "./pantalla_gandora/pantalla_ganadora_cruz.html";
        }, 550);
      } else {
        setTimeout(() => {
          location.href = "./pantalla_gandora/pantalla_ganadora_circulo.html";
        }, 550);
      }
      break;
    case array[2] == array[4] &&
      array[4] == array[6] &&
      array[2] != null &&
      array[4] != null &&
      array[6] != null:
      if (array[2] == "cruz") {
        setTimeout(() => {
          location.href = "./pantalla_gandora/pantalla_ganadora_cruz.html";
        }, 550);
      } else {
        setTimeout(() => {
          location.href = "./pantalla_gandora/pantalla_ganadora_circulo.html";
        }, 550);
      }
      break;
    // no se le asigna un caso default pq no hace falta ya que se verifica que gane alguien y si no gana nadie se sigue el juego
  }
}
var conta = function(contador){
  return contador
}
//let cont = conta.bind(contador)
export {
  conta,
  contador
  
 } 
