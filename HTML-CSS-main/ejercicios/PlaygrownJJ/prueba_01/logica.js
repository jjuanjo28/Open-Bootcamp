//buscando los colores
let blanco = document.querySelector(".blanco");
blanco.addEventListener("click", () => {
  blanco.classList.add("soy-blanco-y-seleccionado");
});

let negro = document.querySelector(".negro");
negro.addEventListener("click", () => {
  negro.classList.add("soy-negro-y-seleccionado");
});

let rojo = document.querySelector(".rojo");
rojo.addEventListener("click", () => {
  rojo.classList.add("soy-rojo-y-seleccionado");
});

let azul = document.querySelector(".azul");
azul.addEventListener("click", () => {
  azul.classList.add("soy-azul-y-seleccionado");
});

let verde = document.querySelector(".verde");
verde.addEventListener("click", () => {
  verde.classList.add("soy-verde-y-seleccionado");
});

// capturo los cubos

let primero = document.getElementById("primero");
primero.addEventListener("click", () => {
  primero.classList.add("estoy-marcado");

  if (rojo.classList == "rojo soy-rojo-y-seleccionado") {
    primero.style.backgroundColor = "#FF0000";
    primero.classList.remove("estoy-marcado");

    rojo.classList.remove("soy-rojo-y-seleccionado");
    return;
  }
  if (negro.classList == "negro soy-negro-y-seleccionado") {
    primero.style.backgroundColor = "#000000";
    primero.classList.remove("estoy-marcado");
    negro.classList.remove("soy-negro-y-seleccionado");

    return;
  }
  if (blanco.classList == "blanco soy-blanco-y-seleccionado") {
    primero.style.backgroundColor = "#FFFFFF";
    primero.classList.remove("estoy-marcado");
    blanco.classList.remove("soy-blanco-y-seleccionado");

    return;
  }
  if (azul.classList == "azul soy-azul-y-seleccionado") {
    primero.style.backgroundColor = "#0000FF";
    primero.classList.remove("estoy-marcado");
    azul.classList.remove("soy-azul-y-seleccionado");

    return;
  }
  if (verde.classList == "verde soy-verde-y-seleccionado") {
    primero.style.backgroundColor = "#008000";
    primero.classList.remove("estoy-marcado");
    azul.classList.remove("soy-verde-y-seleccionado");

    return;
  }
  return;
});

let segundo = document.getElementById("segundo");
segundo.addEventListener("click", () => {
  segundo.classList.add("estoy-marcado");

  if (rojo.classList == "rojo soy-rojo-y-seleccionado") {
    segundo.style.backgroundColor = "#FF0000";
    segundo.classList.remove("estoy-marcado");
    rojo.classList.remove("soy-rojo-y-seleccionado");
    return;
  }
  if (negro.classList == "negro soy-negro-y-seleccionado") {
    segundo.style.backgroundColor = "#000000";
    segundo.classList.remove("estoy-marcado");
    negro.classList.remove("soy-negro-y-seleccionado");

    return;
  }
  if (blanco.classList == "blanco soy-blanco-y-seleccionado") {
    segundo.style.backgroundColor = "#FFFFFF";
    segundo.classList.remove("estoy-marcado");
    blanco.classList.remove("soy-blanco-y-seleccionado");

    return;
  }
  if (azul.classList == "azul soy-azul-y-seleccionado") {
    segundo.style.backgroundColor = "#0000FF";
    segundo.classList.remove("estoy-marcado");
    azul.classList.remove("soy-azul-y-seleccionado");

    return;
  }
  if (verde.classList == "verde soy-verde-y-seleccionado") {
    segundo.style.backgroundColor = "#008000";
    segundo.classList.remove("estoy-marcado");
    verde.classList.remove("soy-verde-y-seleccionado");
    return;
  }
});

let tercero = document.getElementById("tercero");
tercero.addEventListener("click", () => {
  tercero.classList.add("estoy-marcado");

  if (rojo.classList == "rojo soy-rojo-y-seleccionado") {
    tercero.style.backgroundColor = "#FF0000";
    tercero.classList.remove("estoy-marcado");

    rojo.classList.remove("soy-rojo-y-seleccionado");
    return;
  }
  if (negro.classList == "negro soy-negro-y-seleccionado") {
    tercero.style.backgroundColor = "#000000";
    tercero.classList.remove("estoy-marcado");
    negro.classList.remove("soy-negro-y-seleccionado");

    return;
  }
  if (blanco.classList == "blanco soy-blanco-y-seleccionado") {
    tercero.style.backgroundColor = "#FFFFFF";
    tercero.classList.remove("estoy-marcado");
    blanco.classList.remove("soy-blanco-y-seleccionado");

    return;
  }
  if (azul.classList == "azul soy-azul-y-seleccionado") {
    tercero.style.backgroundColor = "#0000FF";
    tercero.classList.remove("estoy-marcado");
    azul.classList.remove("soy-azul-y-seleccionado");

    return;
  }
  if (verde.classList == "verde soy-verde-y-seleccionado") {
    tercero.style.backgroundColor = "#008000";
    tercero.classList.remove("estoy-marcado");
    verde.classList.remove("soy-verde-y-seleccionado");
    return;
  }
});

let cuarto = document.getElementById("cuarto");
cuarto.addEventListener("click", () => {
  cuarto.classList.add("estoy-marcado");

  if (rojo.classList == "rojo soy-rojo-y-seleccionado") {
    cuarto.style.backgroundColor = "#FF0000";
    cuarto.classList.remove("estoy-marcado");

    rojo.classList.remove("soy-rojo-y-seleccionado");
    return;
  }
  if (negro.classList == "negro soy-negro-y-seleccionado") {
    cuarto.style.backgroundColor = "#000000";
    cuarto.classList.remove("estoy-marcado");
    negro.classList.remove("soy-negro-y-seleccionado");

    return;
  }
  if (blanco.classList == "blanco soy-blanco-y-seleccionado") {
    cuarto.style.backgroundColor = "#FFFFFF";
    cuarto.classList.remove("estoy-marcado");
    blanco.classList.remove("soy-blanco-y-seleccionado");

    return;
  }
  if (azul.classList == "azul soy-azul-y-seleccionado") {
    cuarto.style.backgroundColor = "#0000FF";
    cuarto.classList.remove("estoy-marcado");
    azul.classList.remove("soy-azul-y-seleccionado");

    return;
  }
  if (verde.classList == "verde soy-verde-y-seleccionado") {
    cuarto.style.backgroundColor = "#008000";
    cuarto.classList.remove("estoy-marcado");
    verde.classList.remove("soy-verde-y-seleccionado");
    return;
  }
});

let quinto = document.getElementById("quinto");
quinto.addEventListener("click", () => {
  quinto.classList.add("estoy-marcado");

  if (rojo.classList == "rojo soy-rojo-y-seleccionado") {
    quinto.style.backgroundColor = "#FF0000";
    quinto.classList.remove("estoy-marcado");

    rojo.classList.remove("soy-rojo-y-seleccionado");
    return;
  }
  if (negro.classList == "negro soy-negro-y-seleccionado") {
    quinto.style.backgroundColor = "#000000";
    quinto.classList.remove("estoy-marcado");
    negro.classList.remove("soy-negro-y-seleccionado");

    return;
  }
  if (blanco.classList == "blanco soy-blanco-y-seleccionado") {
    quinto.style.backgroundColor = "#FFFFFF";
    quinto.classList.remove("estoy-marcado");
    blanco.classList.remove("soy-blanco-y-seleccionado");

    return;
  }
  if (azul.classList == "azul soy-azul-y-seleccionado") {
    quinto.style.backgroundColor = "#0000FF";
    quinto.classList.remove("estoy-marcado");
    azul.classList.remove("soy-azul-y-seleccionado");

    return;
  }
  if (verde.classList == "verde soy-verde-y-seleccionado") {
    quinto.style.backgroundColor = "#008000";
    quinto.classList.remove("estoy-marcado");
    verde.classList.remove("soy-verde-y-seleccionado");
    return;
  }
});
