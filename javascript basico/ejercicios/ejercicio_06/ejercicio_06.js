let listaDeCompras = ["papas","huevos","sal","tomates","zanahorias"]
listaDeCompras.push("Aceite de Girasol");
listaDeCompras.pop()
let listaDePeliculas = [
    {titulo:"El Padrino",
     director: "F.Copolla",
     fecha : 1978  },
     {titulo:"Harry Potter",
     director: "Un director",
     fecha : 2015  },
     {titulo:"El Señor de los Anillos",
     director: "Otro Director",
     fecha : 2012  },
];
let posteriores2010 = listaDePeliculas.filter(e=> e.fecha > 2010)
let listaDeDirectores = listaDePeliculas.map(e=> e.director)
let listaDeTitulos = listaDePeliculas.map(e => e.titulo)
let listaUnida = listaDePeliculas.concat(listaDeDirectores,listaDeTitulos);
let listaUnidaPropagacion = [...listaDeDirectores,...listaDeTitulos];

