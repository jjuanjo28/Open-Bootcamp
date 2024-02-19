import Select from 'react-select';
import React, { useState, useEffect }from 'react';
import MediaCard from '../../components/pure/Card';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Pagination from '../../components/pagination';
const RickAndMorty_All = () => {
const navigate = useNavigate()
const [equipo, setEquipo] = useState(null); 
const [arrayId, setArrayId] = useState([])

    useEffect(() => {
     obtenerAll()
     var array = next()
     array.then((value)=>{
     setArrayId(value)
     

},
)
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
    console.log("Soy Listado: ",listado)
    setEquipo(listado.results)
  }

const next = async () => {
    const previusData = await fetch("https://rickandmortyapi.com/api/character")
    const listado = await previusData.json();
    const numero = await listado.info.pages
    var arrayId = []
    for (let i = 0; i<= numero; i++){
        arrayId.push({label:i,value:i})
    }
    arrayId.shift()
    return arrayId
   }

   const handelChange = ({ value }) => {
    obtenerAll(value)
  }
    return (
        <div >
          <h1>Listado de Personajes</h1>
         <Select
            placeholder="Pagina...." 
            options={arrayId}
            onChange={(e)=> handelChange(e)}
         />
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

export default RickAndMorty_All;
