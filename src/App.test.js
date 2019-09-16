import React from 'react';
import { shallow, mount } from "enzyme"
import App from './App';
import toJson from "enzyme-to-json";
import Pokecard from './Pokecard';

//smoke test shallow 
it('renders without crashing', () => {
  shallow (<App />);
});

//smoke test mount 
it('renders without crashing', () => {
  mount (<App />);
});

//snapshot test 
it("matches snapshot", function() {
  let wrapper = shallow(   <Pokecard
    name="Pikachu"
    img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    type="electric"
    base_experience="112"
  />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

//snapshot test 
it("matches snapshot", function() {
  let wrapper = shallow(   <Pokecard
    name="Charmander"
    img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    type="fire"
    base_experience="62"
  />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
