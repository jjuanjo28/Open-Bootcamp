
function initMap() {
    const posicion = {
        lat: -25.363,
        lng: 131.044
    }
    const segundaPosicion = {
        lat: 41.732500,
        lng:  -49.946889
    }
    const canchaBoca = {
        lat: -34.636421,
        lng: -58.434821
    }
    
const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion
})
const marker = new google.maps.Marker({
    position: posicion,
    map,
    title: "posicion en el mapa"
})
const markerDos = new google.maps.Marker({
    position: segundaPosicion,
    map,
    title: "Titanic"
})
const markerTres = new google.maps.Marker({
    position: canchaBoca,
    map,
    title: "Cancha de Boca"
})
}

