import { Button } from '@mui/material';
import React, { useState, useEffect }from 'react';
import MediaCard from '../../components/pure/Card';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../components/pagination';

const RickAndMortyMujeres = () => {
  const navigate = useNavigate()
    const [equipo, setEquipo] = useState(null);
   
    const buttonStyle =  {
      color: "white",
      borderRadius: 35,
      backgroundColor: "red",
      margin: 10,
    }

    useEffect(() => {
     obtenerMujeres()
   }, []);

  
  const obtenerMujeres = async () => {
    var listaDeMujeres = []
   for(let i=0; i<=42;i++){
       const data = await fetch(`https://rickandmortyapi.com/api/character/?page=${i}`);
       const listado = await data.json();
       const nuevosMujeres = listado.results.filter((e)=> e.gender == "Female")
       listaDeMujeres.push(nuevosMujeres)
   }
   listaDeMujeres.shift()
   var test = listaDeMujeres.flat(Infinity)
   console.log(test)
   setEquipo(test)
}
    return (
      <div>
       <Button style={buttonStyle} onClick={()=>navigate("/rickAndMorty")}>Back</Button>
     <div style={{display:"grid", gridTemplateColumns:"200px 200px 200px 200px", margin:"30px"}}>
      
      {equipo ? equipo.map((e) => 
        
        <MediaCard 
        personaje={e}      
        ></MediaCard>
     
        
                       
        ) : null}</div>
        <Pagination/>
        </div>

     
        
          
            
              
    );
}

export default RickAndMortyMujeres;
