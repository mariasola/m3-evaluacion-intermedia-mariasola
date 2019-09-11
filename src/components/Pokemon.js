import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    const { id, url, name, types, click } = this.props;
    return (
      <div onClick={click} id={id}>
        <img className="pokePic" src={url} alt={name} />
        <div className="pokemonName">
          <h3>{name}</h3>
        </div>
        <ul className="pokeTypes">
          {types.map((item, index) => (
            <li key={`${name}${index}`} className="type">
              {types[index]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Pokemon;

Pokemon.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired
};
