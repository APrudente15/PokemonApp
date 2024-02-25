import Pokemon from "../Pokedex";
import { useEffect, useState } from "react";

function Pokecard({filteredPokemon, setFilteredPokemon, inputText, setInputText}) {

  function filterPokemon() {
    if (inputText.trim() !== "") {
      const filtered = Pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(inputText.toLowerCase()));
      setFilteredPokemon(filtered);
    } else {
      setFilteredPokemon(Pokemon);
    }
  }

  useEffect(() => {
    filterPokemon();
  }, [inputText]);


  return (
    <div>
      {/* Display the filtered Pokemon */}
      {filteredPokemon.map((pokemon) => (
        <div key={pokemon.id} className="card">
          <p className="name">{pokemon.name}</p>
          <img src={pokemon.image} alt={pokemon.name} />
          <p className="type">Type: {pokemon.type}</p>
        </div>
      ))}
    </div>
  );
}

export default Pokecard;

// import Pokemon from "../Pokedex";
// import { useEffect, useState } from "react";

// function Pokecard({filteredPokemon, setFilteredPokemon, inputText, setInputText}) {


//   // const filterPokemon = Pokemon.filter((item) =>{
//   //   item.name.includes(filteredPokemon.name)
//   // });

//   // function filterPokemon(){
//   //   if (inputText === Pokemon.name) {
//   //     setFilteredPokemon(Pokemon.filter(Pokemon.name.toLowerCase().includes(inputText.toLowerCase())))
//   //   } else {
//   //     setFilteredPokemon(Pokemon)
//   //   }
//   // }

//   function filterPokemon() {
//     if (inputText.trim() !== "" ) {
//       const filtered = Pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(inputText.toLowerCase()));
//       setFilteredPokemon(filtered);
//     } else {
//       setFilteredPokemon(Pokemon);
//     }
//   }

//   useEffect(() => {
//     filterPokemon();
//   }, [inputText]);

//   return (
//     <div>
//       <div>{filterPokemon}</div>
//       {Pokemon.map((Pokemon) => (
//         <div key = {Pokemon.id}className="card">
//           <p className="name">{Pokemon.name}</p>
//           <img src={Pokemon.image} alt = {Pokemon.name} />
//           <p className="type">Type:{Pokemon.type}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default Pokecard;
