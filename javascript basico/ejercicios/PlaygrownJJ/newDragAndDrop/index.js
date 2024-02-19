let parrafo = document.querySelectorAll(".parrafo")
let contenedor = document.querySelectorAll(".contenedor")
let trashBox = document.querySelector(".trash")
let newParrafo = document.querySelector(".createParrafo")
let index = 5

newParrafo.addEventListener("dragstart",(event)=>{
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.classList.add("parrafo")
    nuevoParrafo.classList.add("dragged")
    nuevoParrafo.id = "parrafo-"+index

    nuevoParrafo.setAttribute("draggable","true")
        nuevoParrafo.innerHTML = "nuevo parrafo"
        contenedor[0].appendChild(nuevoParrafo)
        event.dataTransfer.setData("id", nuevoParrafo.id)
        index ++
      console.log(nuevoParrafo)
    })
    newParrafo.addEventListener("dragend",()=>{
        newParrafo.classList.remove("dragged")
    })

parrafo.forEach(parrafo =>{
    parrafo.addEventListener("dragstart",(event)=>{
        parrafo.classList.add("dragged")
        event.dataTransfer.setData("id", parrafo.id)
        
    })
    parrafo.addEventListener("dragend",()=>{
        parrafo.classList.remove("dragged")
    })
    


})
contenedor.forEach(contenedor =>{
    contenedor.addEventListener("dragover",(event)=>{
        event.preventDefault()
    })
    contenedor.addEventListener("drop",(event)=>{
     const id_contenedor = event.dataTransfer.getData("id");
     const container = document.getElementById(id_contenedor);
     contenedor.appendChild(container)
    })
})
trashBox.addEventListener("dragover",(event)=>{
     event.preventDefault()
})
trashBox.addEventListener("drop",(event)=>{
    const id_contenedor = event.dataTransfer.getData("id")
    console.log(id_contenedor)
    const container = document.getElementById(id_contenedor)
    container.remove()
    event.preventDefault()
    
})