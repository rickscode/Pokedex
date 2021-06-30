import React, { useState, useEffect } from "react";

function PokemonMoves() {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        console.log("Fetching Pokemon Data");

        fetch("https://pokeapi.co/api/v2/pokemon/1/")
        .then((res) => res.json())
        .then((data) => {
            console.log(data.abilities[0].ability.name);
            setPokemonData(data);
        });
    }, []);

    if (pokemonData) {
        return <div>{pokemonData.abilities[0].ability.name}</div>;
      } else {
        return null;
      }
}

export default PokemonMoves;