import React, { useState } from "react";
// import array of all Pokemon
const pokemon = require("pokemon");

const CaughtPokemon = () => {
    const date = new Date().toLocaleString();
    // use State functionality to update pokemon caught
    const [caught, setCaught] = useState([]);

    function catchPokemon() {
      setCaught(caught.concat(pokemon.random()));
    }
    return (
    <div>
      {/*Onclick call the function and update caught variable by one */}
    <button onClick={catchPokemon}>Catch Pokemon!</button>
    <p>Caught {caught.length} Pokemon on {date}</p>
    <ul>{caught.map((pokemon, index) => (
      <li key={index}>{pokemon}</li>
    ))}</ul>
   </div>
    );
  };

  export default CaughtPokemon;