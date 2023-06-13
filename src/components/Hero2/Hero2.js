import React from "react";
import "../Hero2/Hero2.css";
import "bootstrap/dist/css/bootstrap.css";
import picture from "../../images/Rectangle 19.png";

const Hero2 = () => {
  return (
    <>
      <div className="container prt2">
        <div className="hrb">
          <div className="col-md-6 mt-5 lagos">
            <h4 className="lag">The Lagos you know has been reimagined</h4>
            <p className="ride">
              Reduce congestion, pollution, and emissions for a sustainable
              future <br></br>Engaging visuals showcasing a diverse range of
              transportation modes in action.
            </p>
          </div>
          <div className="col-md-6 mt-5">
            <img src={picture} alt="Picture" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
