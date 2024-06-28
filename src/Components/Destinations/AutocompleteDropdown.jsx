import { useState, useEffect } from "react";
import "./Destinations.css";
import axios from "axios";

const AutocompleteDropdown = ({ suggestions, setSelection }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const userInput = e.target.value;
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.capital.toLowerCase().indexOf(userInput.toLowerCase()) >
          -1 ||
        suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setInput(userInput);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const handleClick = (e) => {
    setFilteredSuggestions([]);
    setActiveSuggestionIndex(0);
    setInput(e.target.innerText);
    setShowSuggestions(false);
    setSelection({ location: e.target.innerText });
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (activeSuggestionIndex < filteredSuggestions.length - 1) {
        setActiveSuggestionIndex(activeSuggestionIndex + 1);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (activeSuggestionIndex > 0) {
        setActiveSuggestionIndex(activeSuggestionIndex - 1);
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      setInput(filteredSuggestions[activeSuggestionIndex].name);
      setFilteredSuggestions([]);
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
      setSelection({
        location: filteredSuggestions[activeSuggestionIndex].name,
      });
    }
  };

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul className="suggestions">
        {filteredSuggestions.map((suggestion, index) => {
          let className;
          if (index === activeSuggestionIndex) {
            className = "suggestion-active";
          }
          return (
            <li
              className={className}
              key={suggestion.name}
              onClick={handleClick}
            >
              {suggestion.name}
            </li>
          );
        })}
      </ul>
    ) : (
      <div className="no-suggestions">
        <em>No suggestions...</em>
      </div>
    );
  };

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        value={input}
        onKeyDown={handleKeyDown}
        placeholder="Location"
      />
      {showSuggestions && input && <SuggestionsListComponent />}
    </>
  );
};

export default AutocompleteDropdown;
