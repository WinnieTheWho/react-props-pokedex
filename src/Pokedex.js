import React from "react"
import Pokecard from "./Pokecard"

class Pokedex extends React.Component {
  render() {
    return (
      <div className="pokedex">
        {this.props.list.map(pokemon => (
          <Pokecard
            name={pokemon.name}
            img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            type={pokemon.type}
            base_experience={pokemon.base_experience}
          />
        ))}
      </div>
    );
  }
}

export default Pokedex;
