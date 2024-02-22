function Pokecard({pokemon}){
    return(
        <div className="card">
        <h1>{pokemon.name}</h1>
        <img src={pokemon.image}/>
        <p>Type: {pokemon.type}</p>
        </div>
    )
  }
export default Pokecard