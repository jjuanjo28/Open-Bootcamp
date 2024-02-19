import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Select from 'react-select';
import MediaCard from '../../components/pure/Card';
import Pagination from '../../components/pagination';
const RMUnknown = () => {
    const navigate = useNavigate()
    const [equipo, setEquipo] = useState(null); 
    useEffect(() => {
        obtenerTodosDesconocidos()
        }, []);

    const obtenerTodosDesconocidos = async () => {
        var listaDeUnknown = []
       for(let i=0; i<=42;i++){
           const data = await fetch(`https://rickandmortyapi.com/api/character/?page=${i}`);
           const listado = await data.json();
           const nuevosUnknown = listado.results.filter((e)=> e.status == "unknown")
           listaDeUnknown.push(nuevosUnknown)
       }
       listaDeUnknown.shift()
       var test = listaDeUnknown.flat(Infinity)
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
        <h1>Listado de Personajes Desconocidos</h1>
       
       <Button style={buttonStyleBack} onClick={()=>navigate("/rickAndMorty")}>Back</Button>
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
export default RMUnknown;
