let parrafo = document.querySelectorAll(".parrafo");
let contenedor = document.querySelectorAll(".contenedor");
let trashBox = document.querySelector(".trash-box");
let restoreButton = document.querySelector(".restore")
let trashArray = []
index = 1



function crearTarea() {
    let dato = document.getElementById("nueva-tarea")
     if(dato.value == ""){
        return Swal.fire('Debe ingresar una tarea')
     }
      
    let nuevaTarea = document.createElement("p");
    nuevaTarea.classList.add("parrafo");
    nuevaTarea.innerText = dato.value;
    nuevaTarea.setAttribute("draggable","true");
    nuevaTarea.id = "parrafo-" + index
    index ++
    nuevaTarea.addEventListener("dragstart",(event)=>{
        nuevaTarea.classList.add("dragged")
        event.dataTransfer.setData("id",nuevaTarea.id)
    })
    
    nuevaTarea.addEventListener("dragend",()=>{
        nuevaTarea.classList.remove("dragged")
    })
    let boton = document.createElement("button")
    boton.classList.add("completa-tarea")
    boton.setAttribute("onclick","completaTarea()")
    boton.innerText = "tarea completa"
    nuevaTarea.appendChild(boton)
    contenedor[0].appendChild(nuevaTarea)
    dato.value = ""
}


parrafo.forEach(parrafo =>{
    
     
    parrafo.addEventListener("dragstart",(event)=>{
        parrafo.classList.add("dragged")
        event.dataTransfer.setData("id",parrafo.id)
    })
    
    parrafo.addEventListener("dragend",()=>{
        parrafo.classList.remove("dragged")
    })
})


contenedor.forEach(contenedor=>{
    contenedor.addEventListener("dragover",(event)=>{
        event.preventDefault()
    })
    contenedor.addEventListener("drop",(event)=>{
        let id_contenedor = event.dataTransfer.getData("id")
        let container = document.getElementById(id_contenedor)
        contenedor.appendChild(container)
    })
})

restoreButton.addEventListener("click",()=>{
    
    if(trashArray.length == 0) trashBox.src = "https://upload.wikimedia.org/wikipedia/commons/0/0d/User-trash.svg"
    if(trashArray.length == 0){
       return Swal.fire('No hay tareas a recuperar')
    }
    let dato = trashArray.shift()
    contenedor[0].appendChild(dato)
})

trashBox.addEventListener("dragover",(event)=>{
    event.preventDefault()
})
trashBox.addEventListener("drop",(event)=>{
    let id_contenedor = event.dataTransfer.getData("id")
    let container = document.getElementById(id_contenedor)
    let nuevocont = container
    trashArray.push(nuevocont)
    container.remove()
    if(trashArray.length > 0){
      trashBox.src = "https://upload.wikimedia.org/wikipedia/commons/b/bd/User-trash-full.svg"
    } 
})

function completaTarea() {
    let elemento = document.activeElement.parentElement
    if(elemento.classList.contains("tarea-completada")){
        elemento.classList.remove("tarea-completada")
        elemento.innerHTML = elemento.innerHTML.slice(0, -23)
        return
    }
    elemento.classList.add("tarea-completada")
    elemento.innerHTML = elemento.innerHTML + " LA TAREA ESTÁ COMPLETA"
}

function clearTrash() {
    if(trashArray.length == 0){
        return Swal.fire('No hay tareas a borrar')
     }
    trashArray = []
    trashBox.src = "https://upload.wikimedia.org/wikipedia/commons/0/0d/User-trash.svg"
}