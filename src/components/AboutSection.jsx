import React from "react";
// Import Image
import home1 from "../img/home1.png";
// Import style
import { About, Description, Hide, Image } from "../styles";
// Import framer motion
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2>We want to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>come true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
          voluptate temporibus tenetur in quae perspiciatis harum laborum velit
          expedita deserunt?
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="home1" />
      </Image>
    </About>
  );
}

export default AboutSection;
