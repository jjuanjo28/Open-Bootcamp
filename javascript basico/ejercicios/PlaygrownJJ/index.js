
var palabra = "";    
function erasePalabras() {
    console.log("antes: ",palabra)
    palabra=""    
    console.log(palabra)
}
function imprimir(palabra){
    console.log(palabra)
    new TypeIt("#myElement", {
        strings: palabra,
      }).go();
}
    function subPalabras(){
    palabrasDelUsuario = document.getElementById("inputPalabras").value;
    palabra = palabrasDelUsuario;
};
                
