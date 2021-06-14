import React from "react";

const BestPokemon = (props) => {
    // Embedding JS into JSX
    // const abilities = ["Blaze", "Solar Power"];
    return (<div>
    <p>My favorite Pokemon is Charizard</p>
    <p>Species: Flame Pokemon</p>
    <p>Height: 1.7m (5'07")</p>
    <p>Weight: 90.5kg (199.5lbs)</p>
    <p>Powers:</p>
    {/*Array Map and render list of abilities on Dom,
    pass abilities props from App.js*/}
    <ul>{props.abilities.map((ability, index) => (
      // Use of React key prop
      <li key={index}>{ability}</li>
    ))}</ul>
    </div>);
  };

  export default BestPokemon;