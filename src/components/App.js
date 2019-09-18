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
            url: item.url,
            isFav: false
          })
      )
    };
    this.handleClickPokemon = this.handleClickPokemon.bind(this);
  }
  handleClickPokemon(event) {
    const clickId = parseInt(event.currentTarget.id);
    const currentIndex = clickId - 1;
    const { pokemon } = this.state;
    this.setState(
      (pokemon[currentIndex] = {
        key: pokemon[currentIndex].key,
        id: pokemon[currentIndex].id,
        name: pokemon[currentIndex].name,
        types: pokemon[currentIndex].types,
        evolution: pokemon[currentIndex].evolution,
        url: pokemon[currentIndex].url,
        isFav: !pokemon[currentIndex].isFav
      })
    );
  }
  render() {
    return (
      <div>
        <PokeList
          pokemon={this.state.pokemon}
          click={this.handleClickPokemon}
        />
      </div>
    );
  }
}

export default App;
