import React, { useState } from "react";

const CaughtPokemon = () => {
    const date = new Date().toLocaleString();
    // use State functionality to update pokemon caught
    const [caught, setCaught] = useState(0);

    function catchPokemon() {
      setCaught(caught + 1);
    }
    return (
    <div>
      {/*Onclick call the function and update caught variable by one */}
    <button onClick={catchPokemon}>Click me!</button>
    <p>Caught {caught} Pokemon on {date}</p>
    </div>
    );
  };

  export default CaughtPokemon;