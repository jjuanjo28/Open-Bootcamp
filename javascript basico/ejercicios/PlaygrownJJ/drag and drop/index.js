const arrastre = document.querySelectorAll(".arrastre");
const container = document.querySelectorAll(".container");

arrastre.forEach(arrastre => {

  arrastre.addEventListener("dragstart", (event) => {
    arrastre.classList.add("dragging");
    event.dataTransfer.setData("id", arrastre.id);
  });

  arrastre.addEventListener("dragend", () => {
    arrastre.classList.remove("dragging");
  });

});

container.forEach((container) => {
  container.addEventListener("dragover", (event) => {
        event.preventDefault();
  });

  container.addEventListener("drop", (event) => {
    const id_arrastre = event.dataTransfer.getData("id");
    const arrastre = document.getElementById(id_arrastre);
    container.appendChild(arrastre);
  });
});
