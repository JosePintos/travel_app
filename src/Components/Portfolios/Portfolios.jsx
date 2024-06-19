import React, { useEffect } from "react";
import "./Portfolios.css";

import icon1 from "../../Assets/icon1.png";
import icon2 from "../../Assets/icon2.png";
import icon3 from "../../Assets/icon3.png";
import image from "../../Assets/gridImage.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Portfolios = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="portfolio section container">
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3 data-aos="fade-up">Why Choose Us?</h3>
            <p data-aos="fade-up">
              We have extensive knowledge and experience in the travel industry.
            </p>
          </div>

          <div className="grid">
            <div className="singlePortfolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icon1} alt="Icon image" />
              </div>

              <div className="infor" data-aos="fade-up">
                <h4 data-aos="fade-up">Comprehensive Search</h4>
                <p data-aos="fade-up">
                  Find the best deals on flights and hotels all in one place.
                </p>
              </div>
            </div>

            <div className="singlePortfolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icon2} alt="Icon image" />
              </div>

              <div className="infor">
                <h4>Seamless Booking</h4>
                <p>
                  Our intuitive booking system ensures a hassle-free experience.
                </p>
              </div>
            </div>

            <div className="singlePortfolio flex" data-aos="fade-up">
              <div className="iconDiv">
                <img src={icon3} alt="Icon image" />
              </div>

              <div className="infor">
                <h4>Personalized Service</h4>
                <p>
                  Tailor your trip with recommendations based on your
                  preferences.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rightContent" data-aos="fade-down">
          <img src={image} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default Portfolios;
