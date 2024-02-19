import { Button } from '@mui/material';
import React,{ useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const RickAndMortyPage = () => {
const buttonStyle =  {
    color: "white",
    borderRadius: 35,
    backgroundColor: "#21b6ae",
    margin: 10,
  }

 const navigate = useNavigate()   
const [equipo, setEquipo] = useState(null);
  useEffect(() => {
    obtenerDatos();
    
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("https://rickandmortyapi.com/api/character/?page=2");
    const listado = await data.json();
    console.log(listado)
    setEquipo(listado.results);
  };

  
    return (
        <div>
            <h1>Rick And Morty</h1>
            <Button onClick={()=> navigate("/rickAndMorty/character")} style={buttonStyle}>Personajes</Button>
            <Button onClick={()=> navigate("/rickAndMorty/location")} style={buttonStyle}>Ubicaciones</Button>
            <Button onClick={()=> navigate("/rickAndMorty/episode")} style={buttonStyle}>Episodios</Button>
         </div>
    );
}

export default RickAndMortyPage;
