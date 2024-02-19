function devuelveTrue () {
    return true
}
function asincrona() {
    setTimeout(()=>console.log("hola soy una promesa"),5000) 
 }
 
function* generadoraPares (){
    let id = 0;
    while(true){
        id++
        if(id % 2 == 0){
            return id
        }
        id ++
        yield id
    }

}
let pares = generadoraPares()

console.log(pares.next().value)
console.log(pares.next().value)
console.log(pares.next().value)
console.log(pares.next().value)
console.log(pares.next().value)