import React from "react";

const Logo = (props) => {
    // Embedding JS into JSX
    console.log(props);
    return <header>
      <h1>Welcome to {props.appName} Pokedex</h1>
      {/* Event Handler in React */}
      <img onClick={props.handleClick}src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
        alt="pokemon"/>
        </header>;

        // function logWhenClicked() {
        //   console.log("successfully clicked");
        // }

  };

  export default Logo;
