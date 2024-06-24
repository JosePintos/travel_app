import React from "react";
import "./Footer.css";

import { BiLogoMediumOld } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <BiLogoMediumOld className="icon" />
            <span>OU-Trips</span>
          </div>

          <div className="socials flex">
            <FaFacebookF className="icon" />
            <FaXTwitter className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Helpful Links</span>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel & Condition</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Contact Details</span>
          <span className="phone">+123 456 789</span>
          <span className="email">email@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
