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

const FlightBooking = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const searchFlights = async (origin, destination, departureDate) => {
      try {
        const response = await axios.get("../../../database/flights.json");
        //   "https://sky-scanner3.p.rapidapi.com/flights/search-one-way",
        //   {
        //     headers: {
        //       "X-RapidAPI-Key":
        //         "",
        //       "X-RapidAPI-Host": "sky-scanner3.p.rapidapi.com",
        //     },
        //     params: {
        //       fromEntityId: origin,
        //       toEntityId: destination,
        //       departDate: departureDate,
        //       adults: "1",
        //       currency: "USD",
        //       countryCode: "US",
        //       market: "US",
        //     },
        //   }

        setFlights(formatFlightData(response.data.itineraries));
      } catch (error) {
        console.error("Error fetching flight data:", error);
      }
    };
    searchFlights("SFO", "LAX", "2024-09-23");
  }, []);

  return (
    <div className="flightListContainer">
      <div>
        <div className="flightInputs">
          <form className="flightForm" action="">
            <label htmlFor="origin">From:</label>
            <AutocompleteDropdown
              suggestions={flights ? flights : []}
              setSelection={() => console.log("done")}
            />
            {/* <input type="text" id="origin" name="origin" /> */}
            <label for="people">Adults:</label>
            <input type="number" id="adults" defaultValue={1} name="adults" />
            <button type="submit">SEARCH</button>
          </form>
        </div>
      </div>
      <div>
        <div className="flightListHeader">
          <div className="date">
            Dates
            <span className="headerMicro">Start-End</span>
          </div>
          <div className="duration">
            Duration
            <span className="headerMicro">Aprox. Duration</span>
          </div>
          <div className="pricing">
            Price
            <span className="headerMicro">Per Person</span>
          </div>
        </div>
        <div className="flightListMonths">
          <div className="flightMonth">
            <div className="monthHeading">
              <strong>MES</strong>
            </div>
            <ul>
              {flights?.map((flight) => (
                <div>
                  <li className="monthItem">
                    <div className="itemDate">
                      {flight.departDate} - {flight.arrDate}
                    </div>
                    <div className="itemDuration">{flight.duration}</div>
                    <div className="itemPrice">${flight.price}</div>
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
