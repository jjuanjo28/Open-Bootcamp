import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Pagination from "../../components/pagination";
import Select from "react-select";
import MediaCard from "../../components/pure/Card";

const NewAllCharacters = () => {
  const navigate = useNavigate();
  const [equipo, setEquipo] = useState(null);
  const [equipoPerPage, setEquipoPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    obtenerTodosLosPersonajes();
  }, []);

  const obtenerTodosLosPersonajes = async () => {
    var listaDePersonajes = [];
    for (let i = 0; i <= 42; i++) {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${i}`
      );
      const listado = await data.json();
      const nuevosPersonajes = listado.results.filter((e) => e);
      listaDePersonajes.push(nuevosPersonajes);
    }
    listaDePersonajes.shift();
    let test = listaDePersonajes.flat(Infinity);
    setEquipo(test);
  };

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
      <h1>Listado de Personajes</h1>

      <Button style={buttonStyle} onClick={() => navigate("/rickAndMorty")}>
        Back
      </Button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "200px 200px 200px 200px",
          margin: "30px",
        }}
      >
        {equipo
          ? equipo.map((e) => <MediaCard personaje={e}></MediaCard>)
          : null}
      </div>
      <Pagination />
    </div>
  );
};

export default NewAllCharacters;
