import React from 'react'
import Hero from '../Hero/Hero';
import './ContactUs.css'

const Contacts = () => {
  return (
    <div>
      <Hero />
      {/* ======Section One====== */}
      <div className="contactContainer">
        <div className="containerOne">
          {" "}
          <img className="contactimg1" src="./img/emergency.png" alt="/" />
          <div className="contactText">
            <div className="contactTextOne">
              Place a call to our customer support service lines.
            </div>
            <div className="callButton">Call</div>
          </div>
        </div>
        <div className="containerOne">
          <div className="contactText">
            <div className="contactTextOne">
              Chat with our online live customer support representative.
            </div>
            <div className="callButton">Start chat</div>
          </div>
          <img className="contactimg1" src="./img/mobile.png" alt="/" />
        </div>
        <div className="containerOne">
          {" "}
          <img className="contactimg1" src="./img/laptop.png" alt="/" />
          <div className="contactText">
            <div className="contactTextOne">
              Send us your enquiries via Email
            </div>
            <div className="callButton">Send Mail</div>
          </div>
        </div>
      </div>

      {/* =======Self Service Portal======== */}
      <div className="contactContainerTwo">
        <div className="textTwo">Self Service Portal</div>
        <div className="columns">
          <div className="header">
            <div className="headingText">Account</div>
            <div>Reset Password</div>
            <div>Update Account Info</div>
          </div>
          <div className="header">
            <div className="headingText">Manage Bookings</div>
            <div>Cancel ticket</div>
            <div>Change ticket</div>
            <div>Ticket activation</div>
          </div>
          <div className="header">
            <div className="headingText">TroubleShooting</div>
            <div>Payment Support</div>
          </div>
        </div>
      </div>

      {/* ==========Submit Feedback========== */}
      <div className="feedMap">
        <p className="mapHeading">Submit your feedback</p>
        <div className="mapping">
          <img className="theMap" src="./img/mapping.png" alt="/" />
          <div className="mapForm">
            <input className="inputs" type="text" placeholder="Fullname" />
            <input className="inputs" type="text" placeholder="Phone number" />
            <input className="inputs" type="text" placeholder="Email" />
            <textarea>Feed back</textarea>
            <div className="button">Submit</div>
          </div>
        </div>
      </div>

      {/* =======Self Service Portal Two======== */}
      <div className="contactContainerTwo">
        <div className="textTwo">Self Service Portal</div>
        <div className="columns">
          <div className="header">
            <div className="headingText">Account</div>
            <div>Reset Password</div>
            <div>Update Account Info</div>
          </div>
          <div className="header">
            <div className="headingText">Manage Bookings</div>
            <div>Cancel ticket</div>
            <div>Change ticket</div>
            <div>Ticket activation</div>
          </div>
          <div className="header">
            <div className="headingText">TroubleShooting</div>
            <div>Payment Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts
