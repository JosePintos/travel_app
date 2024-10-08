import "./FlightBooking.css";
import React, { useState, useEffect } from "react";
import AutocompleteDropdown from "../Destinations/AutocompleteDropdown";
import axios from "axios";

const formatFlightData = (itineraries) => {
  const options = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };
  const sanitizedData = itineraries.map((it) => {
    const formatter = new Intl.DateTimeFormat("en-GB", options);
    const arrival = formatter.format(new Date(it.legs[0].arrival));
    const departure = formatter.format(new Date(it.legs[0].departure));

    const flightObject = {
      id: it.id,
      price: it.price.raw,
      destID: it.legs[0].destination.id,
      arrDate: arrival,
      departDate: departure,
      duration: it.legs[0].durationInMinutes,
    };
    return flightObject;
  });
  return sanitizedData;
};

const FlightBooking = ({ destCode }) => {
  const [flights, setFlights] = useState([]);
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState([]);
  const [originSelection, setOriginSelection] = useState("");
  const [adultsToFly, setAdultsToFly] = useState(1);

  const currDate = new Date();
  const month = currDate.toLocaleString("default", { month: "long" });

  const searchFlights = async (e) => {
    e.preventDefault();
    if (!originSelection) {
      return;
    }
    const city = originSelection?.location.split(",");

    try {
      const response = await axios.get(
        "http://localhost:3000/flights/search_flights",
        {
          params: {
            adults: adultsToFly,
            destination: destCode,
            origin: city[0],
          },
        }
      );
      setFlights(response.data);
    } catch (error) {
      console.error("Error fetching flight data:", error);
    }
  };

  const handleInputChange = async (query) => {
    if (query.length > 2) {
      try {
        // const res = await axios.get(
        //   `http://localhost:3000/citycountry?q=${query}`
        // );
        // setAutocompleteSuggestions(res.data);
        setAutocompleteSuggestions([
          "Buenos Aires, Buenos Aires, Argentina",
          "Buenos Aires, Argentina",
        ]);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    }
  };

  return (
    <div className="flightListContainer">
      <div>
        <div className="flightInputs">
          <form className="flightForm" action="">
            <label htmlFor="origin">From:</label>
            <AutocompleteDropdown
              suggestions={autocompleteSuggestions}
              setSelection={setOriginSelection}
              handleInputChange={handleInputChange}
              placeholder={"Enter City"}
            />
            {/* <input type="text" id="origin" name="origin" /> */}
            <label for="people">Adults:</label>
            <input
              type="number"
              id="adults"
              value={adultsToFly}
              name="adults"
            />
            <button type="submit" onClick={searchFlights}>
              SEARCH
            </button>
          </form>
        </div>
      </div>
      <div>
        <div className="flightListHeader">
          <div className="date">
            Date
            <span className="headerMicro">Departure</span>
          </div>
          <div className="airport">
            Airport
            <span className="headerMicro">Start-End</span>
          </div>
          <div className="pricing">
            Price
            <span className="headerMicro">Per Person</span>
          </div>
        </div>
        <div className="flightListMonths">
          <div className="flightMonth">
            <div className="monthHeading">
              <strong>{month}</strong>
            </div>
            <ul>
              {flights?.map((flight) => (
                <div>
                  <li className="monthItem">
                    <div className="itemDate">{flight.depDate}</div>
                    <div className="itemAirport">
                      {flight.fromAirport} - {flight.toAirport}
                    </div>
                    <div className="itemPrice">{flight.price}</div>
                    <div className="itemButton">
                      <button>Book now!</button>
                    </div>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightBooking;
