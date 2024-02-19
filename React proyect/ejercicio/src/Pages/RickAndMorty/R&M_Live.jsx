import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Select from 'react-select';
import MediaCard from '../../components/pure/Card';
import Pagination from '../../components/pagination';
const RMLive = () => {
    const navigate = useNavigate()
    const [equipo, setEquipo] = useState(null); 
    useEffect(() => {
        obtenerVivos()
        }, []);

     const obtenerVivos = async () => {
        var listaDeVivos = []
       for(let i=0; i<=42;i++){
           const data = await fetch(`https://rickandmortyapi.com/api/character/?page=${i}`);
           const listado = await data.json();
           const nuevosVivos = listado.results.filter((e)=> e.status == "Alive")
           listaDeVivos.push(nuevosVivos)
       }
       listaDeVivos.shift()
       var test = listaDeVivos.flat(Infinity)
       console.log(listaDeVivos)
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
        <h1>Listado de Personajes Vivos</h1>
       
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

export default RMLive;
