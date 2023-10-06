import React from "react";
import { Tilt } from "react-tilt";
import { services } from "../../utility/content";
import { Assets } from "../../assets";

import "./Services.scss";

const Services = () => {
  return (
    <>
      <section id="services">
        <div className="wrapper">
          <div className="head">
            <hr />
            <h4>Services</h4>
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
                    maxGlare: 0.4,
                  }}
                >
                  <div className="gt-font-bold-x icon">
                    <img src={item.icon} alt="" className="no" />
                  </div>
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
