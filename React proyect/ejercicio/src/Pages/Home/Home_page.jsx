import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";



const HomePage = ({ padreAHijo, hijoAPadre }) => {
  const navigate = useNavigate();
  const goTo = () => {
    navigate("/task");
  };
  
  const datosPadre = !padreAHijo;
  return (
    <div>
      <h1>Soy Home</h1>
      <h2>el estado es: {padreAHijo ? "On-Line" : "Off-Line"} </h2>
      <Button
        style={{
          color: "white",
          borderRadius: 35,
          backgroundColor: "#21b6ae",
          margin: 10,
        }}
        onClick={goTo}
      >
        TO TASK
      </Button>
      <Button
        style={{
          borderRadius: 35,
          backgroundColor: "#21b6ae",
          margin: 10,
          color: "white",
        }}
        onClick={() => hijoAPadre(datosPadre)}
      >
        change state
      </Button>
     
      <Button
        style={{
          borderRadius: 35,
          backgroundColor: "#21b6ae",
          margin: 10,
          color: "white",
        }}
        onClick={() => navigate("/rickAndMorty")}
      >
        Rick And Morty
      </Button>
      
    </div>
  );
};

export default HomePage;
