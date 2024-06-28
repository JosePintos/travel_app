import "./Destinations.css";
import DestinationCard from "./DestinationCard";
import { useState } from "react";

const filterResults = (data, filters) => {
  //aqui deberia agregar despues los otros filtros dentro del obj filters
  //por ahora solo filtra por location
  return data.filter(
    (x) =>
      x.country == filters.location &&
      (x.type == filters.type || filters.type == "all") &&
      x.budget == filters.budget
  );
};

const SearchResults = ({ results, filters }) => {
  const filteredData = filterResults(results, filters);

  if (!Object.keys(filters).length) {
    return <div></div>;
  }

  return (
    <div className="destinationContainer grid" data-aos="fade-up">
      {!filteredData.length ? (
        <em>
          <strong>...No results found.</strong>
        </em>
      ) : (
        filteredData.map((res) => <DestinationCard destination={res} />)
      )}
    </div>
  );
};

export default SearchResults;
