import { Button } from '@mui/material';
import React, { useState, useEffect }from 'react';
import MediaCard from '../../components/pure/Card';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import Pagination from '../../components/pagination';
const RickAndMortyHombres = () => {
    const navigate = useNavigate()
const [equipo, setEquipo] = useState(null); 

    useEffect(() => {
     obtenerHombres()

}, []);

const buttonStyle =  {
    color: "white",
    borderRadius: 35,
    backgroundColor: "red",
    margin: 10,
  }
 
const obtenerAll = async (value) => {
    const data = await fetch(`https://rickandmortyapi.com/api/character/?page=${value}`);
    const listado = await data.json();
    const listaHombres = await listado.results.filter((e)=> e.gender == "Male")
    setEquipo(listaHombres)
}
const obtenerHombres = async () => {
  var listaDeHombres = []
 for(let i=0; i<=42;i++){
     const data = await fetch(`https://rickandmortyapi.com/api/character/?page=${i}`);
     const listado = await data.json();
     const nuevosHombres = listado.results.filter((e)=> e.gender == "Male")
     listaDeHombres.push(nuevosHombres)
 }
 listaDeHombres.shift()
 var test = listaDeHombres.flat(Infinity)
 console.log(test)
 setEquipo(test)
}


  
    return (
        <div >
          <h1>Listado de Personajes Hombres</h1>
        
         <Button style={buttonStyle} onClick={()=>navigate("/rickAndMorty")}>Back</Button>
         <div style={{display:"grid", gridTemplateColumns:"200px 200px 200px 200px", margin:"30px"}}>
            
          {equipo ? equipo.map((e) => 
            <MediaCard             
            personaje={e}      
            >
            </MediaCard>
            ) : null}
         </div>
         <Pagination/>
            </div>
              
    );
}

export default RickAndMortyHombres;
