const PokemonList = ({ pokemons }) => {
    return (
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    );
  };
  