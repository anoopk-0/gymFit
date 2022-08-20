import React from "react";
import "./Hero.css";
import Header from "../header/Header";

import Hero_image from "../../assets/hero_image.png";
import Hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = {
    type: "spring",
    duration: 3,
  };

  const mobile = window.innerWidth <= 786 ? true : false;
  return (
    <div className="hero">
      <div className="blur blur-h"></div>
      <div className="left-h">
        <Header />

        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "160px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "twin" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>Ideal body </span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your Ideal body and
              live up your life to fullist
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              {" "}
              <NumberCounter end={978} start={800} delay="4" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              {" "}
              <NumberCounter end={40} start={0} delay="4" preFix="+" />
            </span>
            <span>fitness Program</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-btn">
          <button className="btn">Get started</button>
          <button className="btn">learn more</button>
        </div>
      </div>

      {/* right  */}
      <div className="right-h">
        <button className="btn">Join now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "3rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="hear-rate" />
          <span>Heart Rate </span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={Hero_image} alt="hero-image" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={Hero_image_back}
          alt="hero-image_back"
          className="hero-image_back"
        />

        {/* calaories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img alt="calories" src={Calories} />
          <div>
            <span>Calories Burned</span>
            <span> 220 Kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
