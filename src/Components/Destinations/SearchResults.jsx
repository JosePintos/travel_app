import "./Destinations.css";
import DestinationCard from "./DestinationCard";

const SearchResults = ({ results }) => {
  return (
    <div className="destinationContainer grid" data-aos="fade-up">
      {!results.length ? (
        <em>
          <strong>...No results found.</strong>
        </em>
      ) : (
        results.map((res) => <DestinationCard destination={res} />)
      )}
    </div>
  );
};

export default SearchResults;
