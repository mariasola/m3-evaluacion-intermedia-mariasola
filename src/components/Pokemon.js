import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    const { id, url, name, types, click } = this.props;
    return (
      <div onClick={click} id={id}>
        <img className="pokemon_img" src={url} alt={name} />
        <div className="pokemon_name">
          <h3>{name}</h3>
        </div>
        <ul className="pokemon_types">
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
