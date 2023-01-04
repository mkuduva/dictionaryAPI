import React from "react";
import { React, useState } from "react";
import Axios from "axios";
import "./App.css";
import { FaSearch } from "react-icons/fa";


function App() {

  // initializing state for App with search data, search word, and filter status
  const [data, setData] = useState("");
  const [searchWord, setSearch] = useState("");
  const [filter, setFilter] = useState("Filter Results...");

  // grabs the meaning of the searched word from dictionary API
  function getMeaning() {
    Axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
    ).then((response) => {
      setData(response.data[0]);
    });
  }

  // gets all definitions of the current search word
  // if filters are on, calls getFilteredSearch() method
  function getDefinitions() {
    if (filter !== "Filter Results...") return getFilteredSearch();
    const defs = [];
    defs[0] = (<div>
          <h2>
            {data.word}{" "}
          </h2>
          <h5>{data.phonetic}</h5>
        </div>
    );
    for (let i = 0; i < data.meanings.length; i++) {
      defs[i + 1] = (<div className = "definition">
        <h4>Parts of speech:</h4>

        <p>{data.meanings[i].partOfSpeech}</p>

        <h4>Definition:</h4>

        <p>{data.meanings[i].definitions[0].definition}</p>
      </div>);
    }
    if (defs.length === 1) return (<p>No Results Found</p>);
    return (
        <div>
          <p>Showing {defs.length - 1} Result(s)</p>
          {defs}
        </div>
    );
  }

  // gets all definitions that match the filter's state
  function getFilteredSearch() {
    const defs = [];
    defs[0] = (<div>
          <h2>
            {data.word}{" "}
          </h2>
          <h5>{data.phonetic}</h5>
        </div>
    );
    let index = 1;
    for (let i = 0; i < data.meanings.length; i++) {
      if (data.meanings[i].partOfSpeech === filter) {
        defs[index] = (<div className = "definition">
          <h4>Parts of speech:</h4>

          <p>{data.meanings[i].partOfSpeech}</p>

          <h4>Definition:</h4>

          <p>{data.meanings[i].definitions[0].definition}</p>
        </div>);
        index++;
      }
    }
    if (defs.length === 1) return (<p>No Results Found</p>);
    return (
        <div>
          <p>Showing {defs.length - 1} Result(s)</p>
          {defs}
        </div>
    );
  }

  // returns what will be rendered. Each className represents a different component of the program
  return (
      <div className="App">
        <h1>Dictionary</h1>
        <div className="searchBox">

          <input
              type="text"
              placeholder="Search..."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
          />
          <button
              onClick={() => {
                getMeaning();
              }}
          > <FaSearch size="20px"/>
          </button>
        </div>
        <div className = "Filter">
          <select
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
              }}
          >
            <option value="Filter Results...">Filter Results...</option>
            <option value="noun">noun</option>
            <option value="pronoun">pronoun</option>
            <option value="adjective">adjective</option>
            <option value="verb">verb</option>
            <option value="adverb">adverb</option>
            <option value="conjunction">conjunction</option>
            <option value="interjection">interjection</option>
            <option value="preposition">preposition</option>
          </select>
        </div>
        {data && (<div className="showResults">
              {getDefinitions()}
            </div>
        )}
      </div>
  );
}

export default App;
