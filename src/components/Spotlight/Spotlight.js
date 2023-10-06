import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Assets } from "../../assets";

import "./Spotlight.scss";
import { SplitText } from "./SplitText";

const Spotlight = () => {
  let iam = "I'm";
  let text = "Hanan";
  let designation = "Software  Developer";
  const span = iam.split("");
  const words = text.split("");
  const spanDesignation = designation.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  const containerTwo = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.02 * i },
    }),
  };
  const containerJumb = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };
  const childJumb = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 60,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 60,
      },
    },
  };

  return (
    <main>
      <div className="wrapper">
        <div className="text-container">
          <motion.div
            style={{ overflow: "hidden", display: "flex" }}
            variants={container}
            initial="hidden"
            animate="visible"
            className="small"
          >
            {span.map((word, index) => (
              <motion.span
                variants={child}
                style={{ marginRight: "5px" }}
                key={index}
                className="small"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            style={{ overflow: "hidden", display: "flex" }}
            variants={containerTwo}
            initial="hidden"
            animate="visible"
            className="span"
          >
            {words.map((word, index) => (
              <motion.span
                variants={child}
                style={{ marginRight: "5px" }}
                key={index}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          <hr />
          <motion.div
            style={{
              overflow: "hidden",
              display: "flex",
              fontSize: "12px",
              letterSpacing: "0",
            }}
            variants={containerJumb}
            initial="hidden"
            animate="visible"
            className="span"
          >
            {spanDesignation.map((word, index) => (
              <motion.span
                className="designation"
                variants={childJumb}
                style={{ marginRight: "2px" }}
                key={index}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          {/* <span className="designation">Software Developer</span> */}
        </div>
        <div className="image-container">
          <img src={Assets.Spotlight_Image} alt="Spotlight" />
        </div>
      </div>
    </main>
  );
};

export default Spotlight;
