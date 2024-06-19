import React, { useState, useEffect } from "react";
import "./Questions.css";
import Accordion from "./Accordion";

import Aos from "aos";
import "aos/dist/aos.css";

const Questions = () => {
  const [activeAccordion, setActiveAccordion] = useState("");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div className="questions section container">
      <div className="secHeading" data-aos="fade-up">
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="secContainer grid">
        <div className="accordion grid" data-aos="fade-up">
          <Accordion
            title="How do I choose the right travel destination for me?"
            description="Consider what you and everyone else coming along enjoys doing. From there, think about how much money and time you have. Finally, compare your final choices based on additional concerns, like the time of year and ease of travelling."
            active={activeAccordion}
            setActive={setActiveAccordion}
          />

          <Accordion
            title="What are the best times to visit specific destinations?"
            description="Consider what you and everyone else coming along enjoys doing. From there, think about how much money and time you have. Finally, compare your final choices based on additional concerns, like the time of year and ease of travelling."
            active={activeAccordion}
            setActive={setActiveAccordion}
          />

          <Accordion
            title="How can I find budget firendly travel options and deals?"
            description="Consider what you and everyone else coming along enjoys doing. From there, think about how much money and time you have. Finally, compare your final choices based on additional concerns, like the time of year and ease of travelling."
            active={activeAccordion}
            setActive={setActiveAccordion}
          />

          <Accordion
            title="What essential items should I pack for my adventure?"
            description="Consider what you and everyone else coming along enjoys doing. From there, think about how much money and time you have. Finally, compare your final choices based on additional concerns, like the time of year and ease of travelling."
            active={activeAccordion}
            setActive={setActiveAccordion}
          />
        </div>

        <div className="form">
          <div className="secHeading" data-aos="fade-up">
            <h3>Do you have any specific question?</h3>
            <p>
              Please fill the form below and out dedicated team will get in
              touch with you as soon as possible.
            </p>
          </div>
          <div className="formContent grid" data-aos="fade-up">
            <input type="email" placeholder="Enter your email address" />
            <textarea placeholder="Enter your question here"></textarea>
            <button className="btn">Submit Question</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
