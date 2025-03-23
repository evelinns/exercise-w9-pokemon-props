/*
Using the data.json you will create a list of pokemons.
We've created the necessary components for you, now it's
up to you to pass the props properly (😅) to these
components. Begin with the Pokemon's names, and continue on
with their types. Don't forget the key! Read more here:
https://reactjs.org/docs/lists-and-keys.html
*/

/*Extra!
Feel free to create more components, such as header/footer,
or why not include some more data from the array? */

import PokemonsData from './data.json';
import { Pokemon } from './components/Pokemon';
import { Type } from './components/Type';

export const App = () => {

  const pokemonObject = PokemonsData.pokemons; 
  console.log(pokemonObject[0].types)

  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <ul>
      {pokemonObject.map((pokemon) => (
        <li key={pokemon.name}>
          <Pokemon name={pokemon.name} />
          <Type type={pokemon.types} />
        </li>
      ))}
      </ul>
    </div>
  );
};


/* 


  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <ul>
        {pokemonObject.map((pokemon) => (
          <li key={pokemon.name}>
            <Pokemon name={pokemon.name} />
            <Type type={pokemon.types} />
          </li>
        ))}
      </ul>
    </div>
  );
};



const people = [
  { name: "Nina", title: "Ms" },
  { name: "Stina", title: "Mrs" },
  { name: "Lina", title: "Misss" }
]

const App = () => {
  return (
    <div>
      (people.map(person => {
        return <People key={person.name} name={person.name} title={person.title} />  
      }))
    </div>
  )
}

*/