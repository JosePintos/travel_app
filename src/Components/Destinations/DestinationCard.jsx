import "./Destinations.css";
import { useNavigate } from "react-router-dom";
import { TiLocation } from "react-icons/ti";

const DestinationCard = ({ destination }) => {
  const navigate = useNavigate();

  const handleClick = (slug, cityCode) => {
    navigate(`/details/${cityCode}/${slug}`);
  };

  return (
    <div
      className="singleDestination"
      onClick={() => handleClick(destination.slug, destination.cityCode)}
    >
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
