import { useState } from "react";

function Form({ pokemonSearch }) {
  const [formData, setFormData] = useState({
    searchTerm: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    pokemonSearch(formData.searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Search for a Pokémon:</label>
        <input
          type="text"
          name="searchTerm"
          id="searchTerm"
          value={formData.searchTerm}
          onChange={handleChange}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default Form;
