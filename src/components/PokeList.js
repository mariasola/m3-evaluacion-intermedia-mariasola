import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/pokeList.css";

class PokeList extends React.Component {
  render() {
    const { pokemon, click } = this.props;
    return (
      <ul className="pokemon_list">
        {pokemon.map(item => (
          <li>
            <Pokemon
              id={item.id}
              key={item.id}
              name={item.name}
              types={item.types}
              url={item.url}
              isFav={item.isFav}
              click={click}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default PokeList;
