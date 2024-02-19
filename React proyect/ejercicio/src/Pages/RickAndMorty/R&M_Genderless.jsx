import { Button } from '@mui/material';
import React, { useState, useEffect }from 'react';
import MediaCard from '../../components/pure/Card';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import Pagination from '../../components/pagination';
const RMGenderless = () => {
    const navigate = useNavigate()
    const [equipo, setEquipo] = useState(null); 
    useEffect(() => {
        obtenerTodosGenderless()
        }, []);

    const obtenerTodosGenderless = async () => {
         var listaDeGenderless = []
        for(let i=0; i<=42;i++){
            const data = await fetch(`https://rickandmortyapi.com/api/character/?page=${i}`);
            const listado = await data.json();
            const nuevosGenderless = listado.results.filter((e)=> e.gender == 'Genderless')
            listaDeGenderless.push(nuevosGenderless)
        }
        listaDeGenderless.shift()
        var test = listaDeGenderless.flat(Infinity)
        setEquipo(test)
    }
    
  
   
       const buttonStyle =  {
        color: "white",
        borderRadius: 35,
        backgroundColor: "#21b6ae",
        margin: 10,
      }
    const buttonStyleBack =  {
        color: "white",
        borderRadius: 35,
        backgroundColor: "red",
        margin: 10,
      }
    return (
        <div >
        <h1>Listado de Personajes Sin Genero</h1>
       
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

export default RMGenderless;
