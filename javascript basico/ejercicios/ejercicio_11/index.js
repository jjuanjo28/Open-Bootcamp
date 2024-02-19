class Estudiante {
    constructor(nombre){
        this.nombre = nombre,
        this.asignaturas = ["javascript","HTML","CSS"]
    }
    obtenDatos() {
        let objeto = {
            nombre : this.nombre,
            asignaturas : this.asignaturas
        }
        return objeto
     }
}
let nuevoEstudiante = new Estudiante("Juanjo")
console.log(nuevoEstudiante)
nuevoEstudiante.obtenDatos()