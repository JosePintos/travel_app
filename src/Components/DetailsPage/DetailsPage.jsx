import "./DetailsPage.css";
import AttractionCard from "./AttractionCard";

import { AiFillStar } from "react-icons/ai";

import pic1 from "../../Assets/pic1.jpg";
import pic2 from "../../Assets/pic2.jpg";
import pic3 from "../../Assets/pic3.jpg";
import pic4 from "../../Assets/pic4.jpg";
import pic5 from "../../Assets/pic5.jpg";

{
  /* <div className="cardContainer grid">
          <div className="centerCard ">
            <div className="cardPhotos flex">
              <img src={pic1} alt="Destination Pic" className="img" />
              <img src={pic2} alt="Destination Pic" className="img" />
              <img src={pic3} alt="Destination Pic" className="img" />
              <img src={pic4} alt="Destination Pic" className="img" />
              <img src={pic5} alt="Destination Pic" className="img" />
            </div>
            <div className="cardLeftSec">
              <div className="relevantDetails">
                <h3>Peru and Bolivia: Machu Picchu to the Salt Flat</h3>
                <div className="rating flex">
                  4.5
                  <span className="stars flex">
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                  </span>
                  <a href="">Reviews</a>
                </div>
              </div>

              {/* Agregar esto para pantallas mas grandes
              <p>
                <strong>Countries:</strong> Peru, Bolivia
              </p>
              <p>
                <strong>Age:</strong> 12+
              </p>              
              <p>
                <strong>Travel style:</strong> National Geographic Journey
              </p>
              <p>
                <strong>Group size:</strong> Max 16, Avg 10
              </p>
              <p>
                <strong>Route:</strong> Lima → 14 Destinations → La Paz
              </p>
            </div>
            <div className="cardRightSec">
              <div className="rightSecContent"></div>
            </div>
          </div>
        </div> */
}

const DetailsPage = () => {
  return (
    <div className="detailsPage">
      <div className="headerContainer">
        <div className="heroImage">
          <div class="hero-text">
            <p>Things to do in</p>
            <h1>China</h1>
          </div>
        </div>
      </div>

      <div className="contentContainer">
        <article className="overviewWrapper">
          <div className="overview">
            <div className="textSpan">
              <h3>Bucket list: cross than one out</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              iaculis felis eu purus ullamcorper, at bibendum magna venenatis.
              Nam placerat odio non orci pellentesque, quis accumsan mi
              tristique. Nullam eu varius purus. Proin dignissim non nisi quis
              egestas. Donec nec neque ut tellus mattis elementum sed non eros.
              Ut consequat efficitur ante eu elementum. Phasellus magna lacus,
              tristique quis tristique nec, tincidunt nec elit. Quisque id
              aliquet nibh, sed vehicula dui. Cras tristique pretium rhoncus.
              Praesent molestie iaculis neque nec finibus. Mauris bibendum lacus
              in interdum convallis. Praesent id mollis tellus.
            </p>
          </div>
        </article>

        <div className="horizontalLineWrapper">
          <div className="horizontalLine"></div>
        </div>

        <div className="popularAttractionsWrapper">
          <div className="popularAttractions">
            <h3>Popular Attractions</h3>
            <div className="cardsContainer">
              <AttractionCard
                imageUrl={pic1}
                title="Mutianyu Great Wall"
                description="The Mutianyu Great Wall was fully restored in the 1980s as an alternative to the increasingly popular Badaling section of the Great Wall of China. The Mutianyu section is farther away from Beijing (about 90 minutes by car) than more popular sections, but it's also significantly less busy and features some fun, modern amusements, such as a cable car, chairlift, and toboggan. The long, flat segment—the longest fully restored section open to travelers—winds along heavily forested hilltops with 23 ancient watchtowers dotting the landscape."
              />
              <AttractionCard
                imageUrl={pic2}
                title="Mutianyu Great Wall"
                description="The Mutianyu Great Wall was fully restored in the 1980s as an alternative to the increasingly popular Badaling section of the Great Wall of China. The Mutianyu section is farther away from Beijing (about 90 minutes by car) than more popular sections, but it's also significantly less busy and features some fun, modern amusements, such as a cable car, chairlift, and toboggan. The long, flat segment—the longest fully restored section open to travelers—winds along heavily forested hilltops with 23 ancient watchtowers dotting the landscape."
              />
              <AttractionCard
                imageUrl={pic3}
                title="Mutianyu Great Wall"
                description="The Mutianyu Great Wall was fully restored in the 1980s as an alternative to the increasingly popular Badaling section of the Great Wall of China. The Mutianyu section is farther away from Beijing (about 90 minutes by car) than more popular sections, but it's also significantly less busy and features some fun, modern amusements, such as a cable car, chairlift, and toboggan. The long, flat segment—the longest fully restored section open to travelers—winds along heavily forested hilltops with 23 ancient watchtowers dotting the landscape."
              />
              <AttractionCard
                imageUrl={pic4}
                title="Mutianyu Great Wall"
                description="The Mutianyu Great Wall was fully restored in the 1980s as an alternative to the increasingly popular Badaling section of the Great Wall of China. The Mutianyu section is farther away from Beijing (about 90 minutes by car) than more popular sections, but it's also significantly less busy and features some fun, modern amusements, such as a cable car, chairlift, and toboggan. The long, flat segment—the longest fully restored section open to travelers—winds along heavily forested hilltops with 23 ancient watchtowers dotting the landscape."
              />
              <AttractionCard
                imageUrl={pic5}
                title="Mutianyu Great Wall"
                description="The Mutianyu Great Wall was fully restored in the 1980s as an alternative to the increasingly popular Badaling section of the Great Wall of China. The Mutianyu section is farther away from Beijing (about 90 minutes by car) than more popular sections, but it's also significantly less busy and features some fun, modern amusements, such as a cable car, chairlift, and toboggan. The long, flat segment—the longest fully restored section open to travelers—winds along heavily forested hilltops with 23 ancient watchtowers dotting the landscape."
              />
            </div>
          </div>
        </div>

        <div className="horizontalLineWrapper">
          <div className="horizontalLine"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
