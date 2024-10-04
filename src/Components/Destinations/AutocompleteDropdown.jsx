import { useState, useRef, useEffect } from "react";
import "./Destinations.css";

const AutocompleteDropdown = ({ suggestions, setSelection }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputValue, setInputValue] = useState("");
  console.log(suggestions);
  const activeSuggestionRef = useRef(null);

  const handleChange = (e) => {
    const userInput = e.target.value;
    const unLinked = suggestions?.filter(
      (suggestion) =>
        suggestion?.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setInputValue(userInput);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const handleClick = (e) => {
    setFilteredSuggestions([]);
    setActiveSuggestionIndex(0);
    setInputValue(e.target.innerText);
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

      if (
        filteredSuggestions.length > 0 &&
        activeSuggestionIndex >= 0 &&
        activeSuggestionIndex < filteredSuggestions.length
      ) {
        const selectedSuggestion = filteredSuggestions[activeSuggestionIndex];
        setInputValue(selectedSuggestion);
        setFilteredSuggestions([]);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
        setSelection({
          location: selectedSuggestion,
        });
      }
    }
  };

  useEffect(() => {
    if (activeSuggestionRef.current) {
      activeSuggestionRef.current.scrollIntoView({
        behavior: "instant",
        block: "nearest",
      });
    }
  }, [activeSuggestionIndex]);

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
              key={suggestion}
              onClick={handleClick}
              ref={index === activeSuggestionIndex ? activeSuggestionRef : null}
            >
              {suggestion}
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
        value={inputValue}
        onKeyDown={handleKeyDown}
        placeholder="Location"
      />
      {showSuggestions && inputValue && <SuggestionsListComponent />}
    </>
  );
};

export default AutocompleteDropdown;
