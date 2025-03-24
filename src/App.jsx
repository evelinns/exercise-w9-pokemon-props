
// import PokemonsData from './data.json';
import { Hero } from "./components/Hero";
// import { Pokemon } from './components/Pokemon';
// import { Type } from './components/Type';
import { PokemonCard } from "./components/PokemonCard"

export const App = () => {

  // const pokemonObject = PokemonsData.pokemons; 
  // console.log(pokemonObject[0].types)

  return (
    <div className="App">
      <Hero />
      {/* <h1>Pokemon List</h1> */}
      {/* <ul>
      {pokemonObject.map((pokemon) => (
        <li key={pokemon.name}>
          <Pokemon name={pokemon.name} />
          <Type type={pokemon.types} />
        </li>
      ))}
      </ul> */}
      <PokemonCard />
    </div>
  );
};


/* 
TO DOs
  * Create card component
  * Each card contains image of pokemon, name, type and category
*/