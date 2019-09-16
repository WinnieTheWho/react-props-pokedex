import React from "react";

class Pokecard extends React.Component {
  render() {
    const { name, type, base_experience, img } = this.props;

    return (
      <div className="card">
        <h3>{name}</h3>
        <img src={img} alt="pokemon"></img>
        <p>Type: {type}</p>
        <p>Experience: {base_experience}</p>
      </div>
    );
  }
}

export default Pokecard;
