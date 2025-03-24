import PokemonsData from '../data.json';
import { Pokemon } from "./Pokemon";
import { Type } from "./Type";

export const PokemonCard = () => {
  const pokemonObject = PokemonsData.pokemons; 
  console.log(pokemonObject[0].image)

  return (<div className="pokemon-cards">
    {pokemonObject.map((pokemon) => (
      <>
        <div key={pokemon.name}>
          <img src={pokemon.image} alt="" />
          <Pokemon name={pokemon.name} />
          <Type type={pokemon.types} />
        </div>
      </>
    ))}
  </div>);
};
