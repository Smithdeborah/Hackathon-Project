import React from "react";
import "../../components/Hero/hero.css";
import Carousel from "react-bootstrap/Carousel";
import picture1 from "../../images/image here-3.png";
import picture2 from "../../images/image here-2.png";
import picture3 from "../../images/image here-1.png";

const Hero = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 hero-bg"
            src={picture1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 hero-bg"
            src={picture2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 hero-bg"
            src={picture3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Hero;
