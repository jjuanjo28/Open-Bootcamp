let botonNext = document.getElementById("botonUno");
let botonLast = document.getElementById("botonDos");
let botonPlay = document.getElementById("botonTres");
let botonStop = document.getElementById("botonCuatro");
let principal = document.querySelector(".principal");
let diurno = document.getElementById("diurno");
let nocturno = document.getElementById("nocturno");

let index = 0;
let interval;

let images = [
  "./img/paisaje 01.jpg",
  "./img/paisaje 02.jpg",
  "./img/paisaje 03.jpg",
  "./img/paisaje 04.jpg",
  "./img/paisaje 05.jpg",
  "./img/paisaje 06.jpg",
  "./img/paisaje 07.jpeg",
  "./img/paisaje 08.jpeg",
];

botonNext.addEventListener("click", (e) => {
  index = (index + 1) % images.length;
  principal.src = images[index];
  stop();
});
botonLast.addEventListener("click", (e) => {
  index = (index - 1 + images.length) % images.length;
  principal.src = images[index];
  stop();
});

nocturno.addEventListener("click", (e) => {
  document.getElementById("padre").style.backgroundColor = "black";
  document.getElementById("body").style.backgroundColor = "black";
  let boton = document.querySelectorAll("button");
  boton.forEach((e) => {
    e.style.backgroundColor = "grey";
  });
  let div = document.querySelectorAll("div");
  div.forEach((e) => {
    e.style.background = "black";
    e.style.color = "white";
  });
  let divUno = document.getElementById("hijo-1");
  divUno.style.border = "solid 1px white";

  let divDos = document.getElementById("hijo-2");
  divDos.style.border = "solid 1px white";

  let divTres = document.getElementById("hijo-3");
  divTres.style.border = "solid 1px white";
});

diurno.addEventListener("click", (e) => {
  document.getElementById("body").style.backgroundColor = "#A2A2FC";
  document.getElementById("hijo-menor").style.backgroundColor = "#0000FF";
  document.getElementById("nuevo-hijo").style.backgroundColor = "#0000FF";
  let padre = document.getElementById("padre");
  padre.style.backgroundColor = "#00FFFF";
  let divUno = document.getElementById("hijo-1");
  divUno.style.backgroundColor = "red";
  divUno.style.color = "blue";
  let divDos = document.getElementById("hijo-2");
  divDos.style.backgroundColor = "red";
  divDos.style.color = "blue";
  let divTres = document.getElementById("hijo-3");
  divTres.style.backgroundColor = "red";
  divTres.style.color = "blue";

  let boton = document.querySelectorAll("button");
  boton.forEach((e) => {
    e.style.backgroundColor = "#7fffd4";
  });
});
function next() {
  if (!interval) {
    interval = setInterval(function () {
      index = (index + 1) % images.length;
      principal.src = images[index];
    }, 1200);
  }
}
function stop() {
  clearInterval(interval);
  interval = null;
}

botonPlay.addEventListener("click", (e) => {
  next();
});
botonStop.addEventListener("click", (e) => {
  stop();
});
