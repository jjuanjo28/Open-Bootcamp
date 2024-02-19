let datosPersonales = {
    nombre:"Juanjo",
    apellido:"Tonut",
    edad: 48,
    altura: 1.69,
    eresDesarrollador: true
};
let edad = datosPersonales.edad;
let lista = [datosPersonales]
let amigoUno = {... datosPersonales}
amigoUno.nombre = "Edgardo";
amigoUno.apellido = "Tejero";
amigoUno.edad = 45;
amigoUno.altura = 1.75;
amigoUno.eresDesarrollador = false;
let amigoDos = {...datosPersonales};
amigoDos.nombre ="Norberto";
amigoDos.apellido ="Scotti";
amigoDos.edad = 47
amigoDos.altura = 1.72;
amigoDos.eresDesarrollador = false;
lista.push(amigoUno,amigoDos)
lista.sort((a, b) => a.edad - b.edad)
lista.reverse()
