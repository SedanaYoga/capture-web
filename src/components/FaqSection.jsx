import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { motion } from "framer-motion";
import { AnimateSharedLayout } from "framer-motion";

function FaqSection() {
  return (
    <Faq>
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Bagaimana saya memulai?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              natus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              provident!
            </p>
          </div>
        </Toggle>
        <Toggle title="Jadwal sehari-hari?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              provident!
            </p>
          </div>
        </Toggle>
        <Toggle title="Metode pembayaran yang berbeda">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              provident!
            </p>
          </div>
        </Toggle>
        <Toggle title="Produk apa yang anda tawarkan?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              provident!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: normal;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%auto;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
