import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const RMCharacter = () => {
  const navigate = useNavigate();
  const buttonStyle = {
    color: "white",
    borderRadius: 35,
    backgroundColor: "#21b6ae",
    margin: 10,
  };
  const buttonStyleBack = {
    color: "white",
    borderRadius: 35,
    backgroundColor: "red",
    margin: 10,
  };
  return (
    <div>
      <h1>Personajes</h1>
      <div>
        <Button
          style={buttonStyle}
          onClick={() => navigate("/rickAndMorty/character/allCharacters")}
        >
          Todos Personajes
        </Button>
        <Button
          style={buttonStyle}
          onClick={() => navigate("/rickAndMorty/character/newAllCharacters")}
        >
          New All Characters
        </Button>
      </div>
      <Button
        style={buttonStyle}
        onClick={() => navigate("/rickAndMorty/character/mujeres")}
      >
        Mujeres
      </Button>
      <Button
        style={buttonStyle}
        onClick={() => navigate("/rickAndMorty/character/hombres")}
      >
        Hombres
      </Button>
      <Button
          style={buttonStyle}
          onClick={() => navigate("/rickAndMorty/character/genderless")}
        >
          Sin Genero
        </Button>
      <div>
        <Button
          style={buttonStyle}
          onClick={() => navigate("/rickAndMorty/character/live")}
        >
          Personajes Vivos
        </Button>

        <Button
          style={buttonStyle}
          onClick={() => navigate("/rickAndMorty/character/dead")}
        >
          Personajes Muertos
        </Button>
        <Button
          style={buttonStyle}
          onClick={() => navigate("/rickAndMorty/character/unknown")}
        >
          Estado de vida Desconocido
        </Button>
        
      </div>
      <div>
        <Button
          style={buttonStyleBack}
          onClick={() => navigate("/rickAndMorty/")}
        >
          Home Rick & Morty
        </Button>
      </div>
    </div>
  );
};

export default RMCharacter;
