// App.jsx
import { useState, useEffect } from "react";
import Form from "./components/Form";
import PokemonDisplay from "./components/PokemonDisplay";

import "./App.css";

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("ditto"); // Default search term
  const api = "https://pokeapi.co/api/v2/pokemon";

  const getPokemon = async (pokemonName) => {
    try {
      const response = await fetch(`${api}/${pokemonName.toLowerCase()}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemon(searchTerm);
  }, [searchTerm]);

  const handleSearch = (pokemonName) => {
    setSearchTerm(pokemonName);
  };

  return (
    <>
      <h1>Pokemon Catch Em All</h1>
      <Form pokemonSearch={handleSearch} />
      {pokemonData && <PokemonDisplay pokemonData={pokemonData} />}
    </>
  );
}

export default App;
