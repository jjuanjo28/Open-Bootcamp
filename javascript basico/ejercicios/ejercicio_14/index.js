
let boton = document.getElementById("btn")

boton.addEventListener("click",
 () => {alert("click en el boton")}
)
$("#btn").click(() => {
    console.log("Hola, estoy utilizando jQuery")})

let tabla = {juanjo:{nombre: "juanjo", apellido: "tonut",array:[1,2,3,4]}}
console.table(tabla)