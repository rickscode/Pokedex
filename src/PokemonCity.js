// Controlled component pattern

import React, { useState } from "react";

const PokemonCity = () => {
  const [city, setCity] = useState("");

function updateCity(event) {
    console.log(event.target.value);
    setCity(event.target.value);
}

  return (
    <div>
        <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={updateCity}
        />
        <p>Welcome to the city of {city}</p>
    </div>
  );
};

export default PokemonCity;