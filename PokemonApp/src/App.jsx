import { useEffect, useState } from "react";
import { Pokecard } from "./components";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [submittedValue, setSubmittedValue] = useState("");


  function handleInput(e) {
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedValue(inputText);
  }


  return (
    <>
      <h1>Pokedex</h1>
      <p className ="select">Type your favourite pokemon below!</p>
      <form onClick={handleSubmit} className="form">
        <input
          onChange={handleInput}
          value={inputText}
          type="text"
          className="pokedex-input"
        />
      </form>
      <Pokecard
        filteredPokemon={filteredPokemon}
        setFilteredPokemon={setFilteredPokemon}
        inputText={inputText}
        setInputText={setInputText}
      />
    </>
  );
}

export default App;
