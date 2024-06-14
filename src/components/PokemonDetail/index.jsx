const PokemonDetail = ({ pokemon}) => {
    return (
      <div>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        {/* Add more details as needed */}
      </div>
    );
  };