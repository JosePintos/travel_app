import React, { useEffect, useState } from "react";
import "./Destinations.css";
import AutocompleteDropdown from "./AutocompleteDropdown";
import SearchResults from "./SearchResults";
import axios from "axios";

import { MdLocationPin } from "react-icons/md";
import { BsWallet2, BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";

import Aos from "aos";
import "aos/dist/aos.css";

const Destinations = () => {
  const [filters, setFilters] = useState({});
  const [tempFilters, setTempFilters] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isFilterButtonActive, setIsFilterButtonActive] = useState(0);
  const filterButtons = ["All", "Mountain", "Beach", "Nature", "Snow", "Park"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [countries, destinations] = await Promise.all([
          axios.get("../../../database/locations.json"),
          axios.get("../../../database/destinations.json"),
        ]);
        setSuggestions(countries.data.data);
        setResults(destinations.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const updateFilters = (newFilters) => {
    setTempFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const applyFilters = () => {
    setFilters(tempFilters);
  };

  const handleClickFilterButton = (index) => {
    setIsFilterButtonActive(index);
    updateFilters({ type: filterButtons[index].toLowerCase() });
  };

  const handleBudgetFilter = (e) => {
    e.preventDefault();
    updateFilters({ budget: e.target.value });
  };

  return (
    <div className="destination section container">
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText" data-aos="fade-up">
            EXPLORE NOW
          </span>
          <h3 data-aos="fade-up">Plan Your Next Adventure</h3>
          <p data-aos="fade-up">
            Fill in the fields below to find the best spot for your next trip.
          </p>
        </div>

        <div className="searchContainer">
          <div className="secFilters">
            <select id="type-filter">
              <option value="">All Types</option>
              <option value="city">City</option>
              <option value="region">Region</option>
              <option value="tourist_spot">Tourist Spot</option>
            </select>
            <select id="price-filter">
              <option value="">All Prices</option>
              <option value="budget">Budget</option>
              <option value="mid-range">Mid-range</option>
              <option value="luxury">Luxury</option>
            </select>
            <select id="duration-filter">
              <option value="">All Durations</option>
              <option value="short">1-3 days</option>
              <option value="medium">4-7 days</option>
              <option value="long">7+ days</option>
            </select>
            <select id="rating-filter">
              <option value="">All Ratings</option>
              <option value="4">4 stars & up</option>
              <option value="3">3 stars & up</option>
              <option value="2">2 stars & up</option>
            </select>
            <select id="season-filter">
              <option value="">All Seasons</option>
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
              <option value="autumn">Autumn</option>
              <option value="winter">Winter</option>
            </select>
          </div>
          <div className="searchField flex">
            <div
              className="inputField flex"
              data-aos="fade-up"
              style={{ zIndex: "1000" }}
            >
              <MdLocationPin className="icon" />
              <AutocompleteDropdown
                suggestions={suggestions}
                className="autocomplete"
                setSelection={updateFilters}
              />
            </div>

            <button
              className="btn flex"
              data-aos="fade-up"
              onClick={applyFilters}
            >
              <BiSearchAlt className="icon" />
              Search
            </button>
          </div>
        </div>

        <div className="secMenu">
          <ul className="flex" data-aos="fade-up">
            {filterButtons.map((item, index) => (
              <li
                key={index}
                className={isFilterButtonActive === index ? "active" : ""}
                onClick={() => handleClickFilterButton(index)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {loading ? (
          <em>Loading...</em>
        ) : (
          <SearchResults results={results} filters={filters} />
        )}
      </div>
    </div>
  );
};

export default Destinations;
