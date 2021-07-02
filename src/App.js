import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
// import PokemonMoves from "./PokemonMoves";
import PokemonMovesSelector from "./PokemonMovesSelector";

function App(){
  const abilities = ["Blaze", "Solar Power"];

  return <div>
    {/*Component composition,
    Passing props / Passing function as props*/}
    <Logo appName="Daisy's" handleClick={logWhenClicked}/>
    <BestPokemon abilities={abilities} />
    {/*No props*/}
    <CaughtPokemon />
    {/* <PokemonMoves /> */}
    <PokemonMovesSelector />
      </div>;

function logWhenClicked() {
  console.log("successfully clicked");
}
}

export default App;
