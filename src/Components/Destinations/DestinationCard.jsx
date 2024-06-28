import "./Destinations.css";
import { TiLocation } from "react-icons/ti";

const DestinationCard = ({ destination }) => {
  return (
    <div className="singleDestination">
      <div className="imgDiv">
        <img
          src={destination.img}
          alt="Destination Image"
          key={destination.id}
        />
      </div>

      <div className="descInfo flex">
        <div className="text">
          <span className="name">{destination.name}</span>
          <p className="flex">
            <TiLocation className="icon" />
            {destination.country}
          </p>
        </div>
        <span className="rating">{destination.rating}</span>
      </div>
    </div>
  );
};

export default DestinationCard;
