import React, { useState } from "react";
// import array of all Pokemon
// const pokemon = require("pokemon");
//pokemon.random()

const CaughtPokemon = () => {
    const date = new Date().toLocaleString();
    // use State functionality to update pokemon caught
    const [caught, setCaught] = useState([]);

    let [pokemonNameInput, setPokemonNameInput] = useState("");

    function catchPokemon() {
      setCaught(caught.concat(pokemonNameInput));
      // clear DOM input box
      setPokemonNameInput("");
    }

    function handleInputChange(event) {
      setPokemonNameInput(event.target.value);
    }

    return (
    <div>
      {/*Onclick call the function and update caught variable by one */}
    <input
    type="text"
    value={pokemonNameInput}
    onChange={handleInputChange} />
    <button onClick={catchPokemon}>Catch Pokemon!</button>
    <p>Caught {caught.length} Pokemon on {date}</p>
    <ul>{caught.map((pokemon, index) => (
      <li key={index}>{pokemon}</li>
    ))}</ul>
   </div>
    );
  };

  export default CaughtPokemon;