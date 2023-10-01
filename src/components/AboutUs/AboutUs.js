import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { InView, useInView } from "react-intersection-observer";
import ScrollTrigger from "react-scroll-trigger";

import "./AboutUs.scss";

const AboutUs = () => {
  const [counterOn, setCounterOn] = useState(false);
  const { ref, entry, inView } = useInView({
    // triggerOnce: true,
    threshold: 0,
  });
  console.log(counterOn, "view");
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
      throttleScroll="1000"
    >
      <section id="about">
        <div className="wrapper">
          <div className="head">
            <h4>About us</h4>
            <hr />
          </div>
          <div className="container">
            <div className="left-container">
              <h6 className={counterOn && ` ${inView ? "active" : ""}`}>
                <span className="count">
                  {counterOn && (
                    <CountUp start={0} end={2} delay={0} duration={4} />
                  )}
                  +
                </span>
                <span className="text">
                  Years <br />
                  of experience
                </span>
              </h6>
              <h6 className={counterOn && `${inView ? "active2" : ""}`}>
                <span className="text clone">
                  Completed <br />
                  Projects
                </span>
                <span className="count">
                  {counterOn && (
                    <CountUp start={0} end={20} delay={0} duration={2} />
                  )}
                  +
                </span>
              </h6>
            </div>
            <div className="right-container gt-font">
              <span
                className={
                  counterOn && `big-head gt-font-bold ${inView ? "active" : ""}`
                }
              >
                Hello there!
              </span>
              {/* <p className={`text ${inView ? "active" : ""}`}>
              I'm a passionate Software Developer on a mission to transform
              ideas into immersive digital realities. I dive into the world of
              web and app development. I specialize in a range of technologies,
              including HTML, CSS, JavaScript, React JS along with various
              frameworks.
            </p>
            <p className={`text ${inView ? "active" : ""}`}>
              I enjoy blending these tools to create seamless and engaging user
              interfaces. Solving problems is my forte, and I'm dedicated to
              finding solutions that make both users and businesses happy.
              Collaboration is key in my approach, ensuring smooth project
              execution and effective communication. If you're looking for a
              friendly developer to bring your ideas to life, I'm here and ready
              to collaborate!
            </p> */}
              <div ref={ref}>
                {" "}
                <InView
                  as="p"
                  className={counterOn && `text ${inView ? "active" : ""}`}
                >
                  I'm a passionate Software Developer on a mission to transform
                  ideas into immersive digital realities. I dive into the world
                  of web and app development. I specialize in a range of
                  technologies, including HTML, CSS, JavaScript, React JS along
                  with various frameworks.
                </InView>
                <InView
                  as="p"
                  className={counterOn && `text ${inView ? "active2" : ""}`}
                  trackVisibility={true}
                  delay={5000}
                  triggerOnce={true}
                >
                  I enjoy blending these tools to create seamless and engaging
                  user interfaces. Solving problems is my forte, and I'm
                  dedicated to finding solutions that make both users and
                  businesses happy. Collaboration is key in my approach,
                  ensuring smooth project execution and effective communication.
                  If you're looking for a friendly developer to bring your ideas
                  to life, I'm here and ready to collaborate!
                </InView>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default AboutUs;
