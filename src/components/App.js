import React from "react";
import PokeList from "./PokeList";
import pokemon from "../services/APIresponse";
import "../stylesheets/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: pokemon.map(
        item =>
          (item = {
            key: item.id,
            id: item.id,
            name: item.name,
            types: item.types,
            evolution: item.evolution,
            url: item.url
          })
      )
    };
    // this.handleClickPokemon=this.handleClickPokemon.bind(this);
  }
  // handleClickPokemon(event){
  //   const clickId= parseInt(event.currentTarget.id);
  // }
  render() {
    return (
      <div>
        <PokeList pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
