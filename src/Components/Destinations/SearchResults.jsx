import "./Destinations.css";
import DestinationCard from "./DestinationCard";

const SearchResults = ({ budget, dateRange, location }) => {
  return (
    <div className="destinationContainer grid" data-aos="fade-up">
      <DestinationCard />
    </div>
  );
};

export default SearchResults;
