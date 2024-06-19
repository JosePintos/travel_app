import React, { useEffect } from "react";
import "./Destinations.css";

import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill, BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

import image1 from "../../Assets/image1.png";

import Aos from "aos";
import "aos/dist/aos.css";

const Destinations = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="destination section container">
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText" data-aos="fade-up">
            EXPLORE NOW
          </span>
          <h3 data-aos="fade-up">Find Your Dream Destination</h3>
          <p data-aos="fade-up">
            Fill in the fields below to find the best spot for your next tour.
          </p>
        </div>

        <div className="searchField grid">
          <div className="inputField flex" data-aos="fade-up">
            <MdLocationPin className="icon" />
            <input type="text" placeholder="Location" />
          </div>

          <div className="inputField flex" data-aos="fade-up">
            <BsFillCreditCardFill className="icon" />
            <input type="text" placeholder="Budget" />
          </div>

          <div className="inputField flex" data-aos="fade-up">
            <BsFillCalendarDateFill className="icon" />
            <input type="text" placeholder="Date" />
          </div>

          <button className="btn flex" data-aos="fade-up">
            <BiSearchAlt className="icon" />
            Search
          </button>
        </div>

        <div className="secMenu">
          <ul className="flex" data-aos="fade-up">
            <li className="active">All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>

        <div className="destinationContainer grid">
          <div className="singleDestination" data-aos="fade-up">
            <div className="imgDiv" data-aos="fade-up">
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
          <div className="singleDestination" data-aos="fade-up">
            <div className="imgDiv" data-aos="fade-up">
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
          <div className="singleDestination" data-aos="fade-up">
            <div className="imgDiv" data-aos="fade-up">
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
          <div className="singleDestination" data-aos="fade-up">
            <div className="imgDiv" data-aos="fade-up">
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
        </div>
      </div>
    </div>
  );
};

export default Destinations;
