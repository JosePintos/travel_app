import "./DetailsPage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useContentful from "../../Hooks/useContentful";
import AttractionCard from "./AttractionCard";
import FlightBooking from "./FlightBooking";

const DetailsPage = () => {
  const { getDestinationDetails } = useContentful();
  const [destinationDetails, setDestinationDetails] = useState({});

  const { slug, cityCode } = useParams();
  const destinationName = slug.slice(0, slug.length - 4).replace(/-/g, " ");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await getDestinationDetails(destinationName);
        setDestinationDetails(details);
      } catch (error) {
        console.log(`Error fetching destination details: ${error}`);
      }
    };
    fetchDetails();
  }, []);

  return (
    <div className="detailsPage">
      <div className="headerContainer">
        <div
          className="heroImage"
          style={{
            backgroundImage: destinationDetails?.heroImage
              ? `url(${destinationDetails?.heroImage})`
              : "none", // Set a default value if the image is not available
          }}
        >
          <div class="hero-text">
            <p>Things to do in</p>
            <h1>{destinationDetails?.destinationName}</h1>
          </div>
        </div>
      </div>

      <div className="contentContainer">
        <section className="overviewWrapper">
          <div className="overview">
            <div className="textSpan">
              <h3>Bucket list: cross than one out</h3>
            </div>
            <p>{destinationDetails?.description}</p>
          </div>
        </section>
        <div className="horizontalLineWrapper">
          <div className="horizontalLine"></div>
        </div>
        <div className="popularAttractionsWrapper">
          <div className="popularAttractions">
            <h3>Popular Attractions</h3>
            <div className="cardsContainer">
              {destinationDetails?.attractions?.map((attraction, index) => (
                <AttractionCard
                  key={index}
                  title={attraction?.attractionTitle}
                  description={attraction?.attractionText}
                  imageUrl={attraction?.attractionImage}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="horizontalLineWrapper">
          <div className="horizontalLine"></div>
        </div>
        <section className="departures">
          <div className="departuresContainer">
            <h2 className="de">Departures For This Month</h2>
            <FlightBooking destCode={cityCode} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetailsPage;
