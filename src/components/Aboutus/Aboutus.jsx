import React from "react";
import Hero from "../Hero/Hero";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <div className="aboutContainer">
      <Hero />
      {/* =====section one==== */}
      <div className="sectionOne">
        <p className="aboutHead">About Us</p>
        <img className="imageOne" src="./img/aboutOne.png" alt="/" />
      </div>

      {/* ======section two====== */}
      <div className="sectionTwo">
        <p className="aboutHead">About MoveEasy</p>
        <p className="abouttext">
          Move Easy was born out of the need to address the numerous
          transportation challengesfaced by the residents of Lagos. With a
          rapidly growing population and increasing traffic congestion, we
          recognized the importance of developing a reliable and sustainable
          urban transportation system that caters to the needs of every
          Lagosian.{" "}
        </p>
        <div className="aboutimages">
          <div className="sub-section">
            <p className="sectionHead">Convinient</p>
            <img className="shipImg" src="./img/ship.png" alt="/" />
            <p className="sectionttext">
              Our aim is to make your daily commute smoother and more
              convenient.
            </p>
          </div>
          <div className="sub-section">
            <p className="sectionHead">Reliable</p>
            <img className="shipImg" src="./img/train.png" alt="/" />
            <p className="sectionttext">
              Our aim is to make your daily commute smoother and more
              convenient.
            </p>
          </div>
          <div className="sub-section">
            <p className="sectionHead">Prompt</p>
            <img className="shipImg" src="./img/busstation.png" alt="/" />
            <p className="sectionttext">
              Our aim is to make your daily commute smoother and more
              convenient.
            </p>
          </div>
        </div>
      </div>

      {/* =====section three===== */}
      <div className="sectionTwo">
        <p className="aboutHead">What We Do </p>
        <p className="abouttext">
          Move Easy was born out of the need to address the numerous
          transportation challengesfaced by the residents of Lagos. With a
          rapidly growing population and increasing traffic congestion, we
          recognized the importance of developing a reliable and sustainable
          urban transportation system that caters to the needs of every
          Lagosian.{" "}
        </p>
        <div className="aboutimages2">
          <div className="sub-section">
            <img className="shipImg" src="./img/setOne.png" alt="/" />
            <p className="sectionttext">
              Book all your travel tickets in one place.
            </p>
          </div>
          <div className="sub-section">
            <img className="shipImg" src="./img/setTwo.png" alt="/" />
            <p className="sectionttext">
              Explore options of transportation modes.
            </p>
          </div>
          <div className="sub-section">
            <img className="shipImg" src="./img/setThree.png" alt="/" />
            <p className="sectionttext">Well maintained Vehicles</p>
          </div>
          <div className="sub-section">
            <img className="shipImg" src="./img/setFour.png" alt="/" />
            <p className="sectionttext">24/7 Support</p>
          </div>
          <div className="sub-section">
            <img className="shipImg" src="./img/setFive.png" alt="/" />
            <p className="sectionttext">Real time tracking and scheduling</p>
          </div>
          <div className="sub-section">
            <img className="shipImg" src="./img/setSix.png" alt="/" />
            <p className="sectionttext">Shared rides and partnership</p>
          </div>
        </div>
      </div>

      {/* =====section four======= */}

      <div className="section_five">
        <img className=".img4" src="./img/vision.png" alt="Profile" />

        <div className=".sideText">
          <h4 className=".imgHeading">Our Mission</h4>
          <p className=".imgText">
            Development of Transport Infrastructure and Integrated Multi-modal
            Transportation Administration with the aim of achieving safety of
            lives and properties, Free flow of traffic and sectoral support for
            investment growth across Lagos State.
          </p>
        </div>
      </div>

      <div className="mission2">
        <div className=".missiontext">
          <h4 className=".mtext">Our Mission</h4>
          <p className=".mtext2">
            Development of Transport Infrastructure and Integrated Multi-modal
            Transportation Administration with the aim of achieving safety of
            lives and properties, Free flow of traffic and sectoral support for
            investment growth across Lagos State.
          </p>
        </div>
        <img className=".img4" src="./img/vision.png" alt="profile2" />
      </div>

      {/* =======Section Five========== */}
      <div className="sectionFive">
        <div className="sectionHead">Affiliates & sponsors</div>
        <img className="sponsorImg" src="./img/sponsor.png" alt="/" />
      </div>

      <div className="lastText">
        <p className="lastHead">Vision Statement</p>
        <p>
          "To transform urban mobility in Lagos State, by revolutionizing the
          way people move, connect,and thrive to bring about a positive change
          in the transportation landscape of the city, enhancing the quality
          lives of its residents and visitors.."
        </p>
      </div>

      <div className="lastText">
        <p className="lastHead">Mission Statement</p>
        <p>
          "Our mission is to provide a reliable and convenient urban
          transportation platform that connects people, fosters economic growth,
          and promotes sustainable mobility in Lagos State."
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
