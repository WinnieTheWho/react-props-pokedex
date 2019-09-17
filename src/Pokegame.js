import React from "react";
import Pokedex from "./Pokedex";

class Pokegame extends React.Component {
  static defaultProps = {
    list: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
    ]
  };

  render() {
    let list = this.props.list;
    let firstHand = [], i;

    while (firstHand.length < 4) {
      i = Math.floor(Math.random() * list.length);
      firstHand.push(list[i])
      list.splice(i, 1)
    }

    let secondHand = list;
    console.log("FIRSTHAND/SECONDHAND:", firstHand, secondHand)
    return (
      <div className="firstHand">
        <Pokedex list={firstHand} />
        <Pokedex list={secondHand} />
      </div>
    )
  }
}

export default Pokegame;