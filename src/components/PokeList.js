import React from "react";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    const { pokemon, click } = this.props;
    return (
      <ul>
        {pokemon.map(item => (
          <li>
            <Pokemon
              id={item.id}
              key={item.id}
              name={item.name}
              types={item.types}
              url={item.url}
              click={click}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default PokeList;
