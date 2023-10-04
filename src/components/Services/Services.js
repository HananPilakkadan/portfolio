import React from "react";
import { Tilt } from "react-tilt";
import { services } from "../../utility/content";

import "./Services.scss";

const Services = () => {
  return (
    <>
      <section id="services">
        <div className="wrapper">
          <div className="head">
            <h4>Services</h4>
            <hr />
          </div>
          <div className="content-box">
            <ul className="cards">
              {services.map((item) => (
                <Tilt
                  className="card"
                  options={{
                    reverse: false, // reverse the tilt direction
                    max: 35, // max tilt rotation (degrees)
                    perspective: 1600, // Transform perspective, the lower the more extreme the tilt gets.
                    scale: 1.03, // 2 = 200%, 1.5 = 150%, etc..
                    speed: 1000, // Speed of the enter/exit transition
                    transition: ".3s ease", // Set a transition on enter/exit.
                    axis: null, // What axis should be disabled. Can be X or Y.
                    reset: true, // If the tilt effect has to be reset on exit.
                    easing: "cubic-bezier(.03,.98,.52,.99)",
                  }}
                >
                  <h4 className="gt-font-bold-x title">
                    {item.icon1}
                    <br />
                    {item.icon2}
                  </h4>
                  <span className="gt-font-bold">
                    {item.f_title}
                    <br /> {item.l_title}
                  </span>
                  <div className="bg"></div>
                </Tilt>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
