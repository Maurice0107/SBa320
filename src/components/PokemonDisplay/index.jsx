// PokemonDisplay.jsx
 // Make sure to import the CSS file

function PokemonDisplay({ pokemonData }) {
  return (
    <div className="pokemon-container">
      <h2 className="pokemon-name">{pokemonData.name}</h2>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      {/* Add more details as needed */}
    </div>
  );
}

export default PokemonDisplay;
