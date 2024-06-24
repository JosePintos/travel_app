import "./Destinations.css";
import { TiLocation } from "react-icons/ti";
import image1 from "../../Assets/image1.png";

const DestinationCard = () => {
  return (
    <div className="singleDestination">
      <div className="imgDiv">
        <img src={image1} alt="Destination Image" />
      </div>

      <div className="descInfo flex">
        <div className="text">
          <span className="name">Puerto Iguazú</span>
          <p className="flex">
            <TiLocation className="icon" />
            Argentina
          </p>
        </div>
        <span className="rating">4.6</span>
      </div>
    </div>
  );
};

export default DestinationCard;
