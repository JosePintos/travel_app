import React, { useEffect, useState } from "react";
import "./Destinations.css";
import AutocompleteDropdown from "./AutocompleteDropdown";
import SearchResults from "./SearchResults";
import axios from "axios";

import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill, BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";

import image1 from "../../Assets/image1.png";

import Aos from "aos";
import "aos/dist/aos.css";

const Destinations = () => {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    axios
      .get("../../../database/locations.json")
      .then((response) => {
        setSuggestions(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
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

        <div className="searchField grid">
          <div
            className="inputField flex"
            data-aos="fade-up"
            style={{ zIndex: "1000" }}
          >
            <MdLocationPin className="icon" />
            <AutocompleteDropdown
              suggestions={suggestions}
              className="autocomplete"
            />
          </div>

          <div
            className="inputField flex"
            data-aos="fade-up"
            style={{ zIndex: "1" }}
          >
            <BsFillCreditCardFill className="icon" />
            <input type="text" placeholder="Budget" />
          </div>

          <div
            className="inputField flex"
            data-aos="fade-up"
            style={{ zIndex: "1" }}
          >
            <BsFillCalendarDateFill className="icon" />
            <input type="date" placeholder="Date" />
          </div>

          <button className="btn flex" data-aos="fade-up">
            <BiSearchAlt className="icon" />
            Search
          </button>
        </div>

        <div className="secMenu">
          <ul className="flex" data-aos="fade-up">
            <li className="active">All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>

        <SearchResults />
      </div>
    </div>
  );
};

export default Destinations;
