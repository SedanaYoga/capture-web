import React from "react";
// Import Image
import home1 from "../img/home1.png";
// Import Styled
import styled from "styled-components";
import { About, Description, Hide, Image } from "../styles";

function AboutSection() {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We want to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span>
            </h2>
          </Hide>
          <Hide>
            <h2>come true.</h2>
          </Hide>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
            voluptate temporibus tenetur in quae perspiciatis harum laborum
            velit expedita deserunt?
          </p>
          <button>Contact Us</button>
        </div>
      </Description>
      <Image>
        <img src={home1} alt="home1" />
      </Image>
    </About>
  );
}

export default AboutSection;
