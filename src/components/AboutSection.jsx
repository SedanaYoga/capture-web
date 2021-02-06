import React from "react";
import home1 from "../img/home1.png";

function AboutSection() {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We want to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span>
            </h2>
          </div>
          <div className="hide">
            <h2>come true.</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            reprehenderit molestias quod dolor explicabo non doloremque debitis
            amet provident numquam!
          </p>
          <button>Contact Us</button>
        </div>
      </div>
      <div className="image">
        <img src={home1} alt="home1" />
      </div>
    </div>
  );
}

export default AboutSection;
