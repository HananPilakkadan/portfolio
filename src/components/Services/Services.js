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
            <hr />
            <h4>Services</h4>
            <h6>Services</h6>
          </div>
          <div className="content-box">
            <ul className="cards">
              {services.map((item) => (
                <Tilt
                  className="card"
                  options={{
                    reverse: false,
                    perspective: 1700,
                    scale: 1.05,
                    speed: 1200,
                    transition: true,
                    axis: null,
                    reset: true,
                    easing: "cubic-bezier(.07,.98,.52,.99)",
                    glare: true,
                    maxGlare: 0.4, // Set the maximum glare opacity
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
