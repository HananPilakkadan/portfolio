import React, { useState, useEffect } from "react";
import { assets } from "../../assets";
import { motion } from "framer-motion";

import "./Header.scss";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`navbar ${isScrolled ? "active" : ""}`}>
        <div className="wrapper">
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={assets.Logo} alt="Logo" />
          </motion.h1>
          <ul>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
