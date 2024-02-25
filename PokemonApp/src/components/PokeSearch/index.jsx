import Pokedex from "../Pokedex";
import Pokecard from "../Pokecard";
import React from 'react'

export default function index() {
      return(
        <ul>
        {
          data.map((pokemon, i) => (
            <Pokecard
                pokemon={pokemon}
                key={i}
            />
          ))
        }
      </ul>
    )
}


