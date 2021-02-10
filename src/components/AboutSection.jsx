import React from "react";
// Import Image
import home1 from "../img/home1.png";
// Import style
import { About, Description, Hide, Image } from "../styles";
// Import framer motion
import { motion } from "framer-motion";
// Import animation
import { titleAnim, fade, photoAnim } from "../animations";
// Import Components
import Wave from "./Wave";

function AboutSection() {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>come true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
          voluptate temporibus tenetur in quae perspiciatis harum laborum velit
          expedita deserunt?
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="home1" />
      </Image>
      <Wave />
    </About>
  );
}

export default AboutSection;
