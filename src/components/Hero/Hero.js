import React from "react";
import "../../components/Hero/hero.css";
import Carousel from "react-bootstrap/Carousel";

const Hero = () => {
  return (
    <>
      <div className="Heropage">
        <div className="overlay">
          {" "}
          <div className="Hero1">
            <p className="pname">
              Seamless Urban <br></br>Transportation Made Easy
            </p>
            <p>Discover a Smarter, Greener Way to Navigate Your City</p>
          </div>
          <div className="Button">Book a Ride Now</div>
        </div>
      </div>
    </>
  );
};

export default Hero;
