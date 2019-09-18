import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/pokemon.css";

class Pokemon extends React.Component {
  changeStyle() {
    let favClassName = "pokemon ";
    const { isFav } = this.props;
    if (isFav) {
      favClassName += "favStyle";
      return favClassName;
    } else {
      favClassName += "defaultStyle";
      return favClassName;
    }
  }
  render() {
    const { id, url, name, types, click } = this.props;
    return (
      <div onClick={click} id={id} className={this.changeStyle()}>
        <img className="pokemon_img" src={url} alt={name} />
        <div className="pokemon_name">
          <h3>{name}</h3>
        </div>
        <ul className="pokemon_types">
          {types.map((item, index) => (
            <li key={`${name}${index}`} className="pokemon_types_item">
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
