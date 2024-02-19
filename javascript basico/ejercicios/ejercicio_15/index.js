let nombre = "Juan"
let apellido = "Tonut"

let objeto = {
    nombre: nombre,
    apellido: apellido 
}
//console.table(objeto)
sessionStorage.setItem("persona",JSON.stringify(objeto))
localStorage.setItem("persona", JSON.stringify(objeto))
 let fecha = new Date()
 let fechaMilis = fecha.getTime() + 120000
 let fechaCaducidad = new Date(fechaMilis).toString()
 let juanjoCookie = JSON.stringify(objeto)
 document.cookie = "juanjoCookie="+juanjoCookie+";expires="+fechaCaducidad
  