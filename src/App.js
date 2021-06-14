import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App(){
  const abilities = ["Blaze", "Solar Power"];

  return <div>
    {/*Component composition,
    Passing props*/}
    <Logo appName="Daisy's"/>
    <BestPokemon abilities={abilities} />
    {/*No props*/}
    <CaughtPokemon />
      </div>;
}

export default App;
