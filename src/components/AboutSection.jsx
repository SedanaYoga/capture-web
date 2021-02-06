import React from "react";
// Import Image
import home1 from "../img/home1.png";
// Import Styled
import styled from "styled-components";

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

const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
