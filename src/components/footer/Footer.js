import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import style from "./footer.module.css";
import { ImLocation2 } from "react-icons/im";
import { IoMdMail } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im";

const Footer = () => {
  return (
    <div className="container-fluid">
      {/* ======Newsletters====== */}
      <div className={style.news}>
        <div className={style.newsOne}>
          <p className={style.textOne}>Newsletters Sign Up</p>
          <p className={style.textTwo}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea.
          </p>
        </div>
        <div className={style.newsForm}>
          <p className={style.name}>Name</p>
          <input type="text" placeholder="Your name" />
          <p className={style.name}>Email</p>
          <input type="text" placeholder="Your email" />
          <div className={style.button}>Subscribe</div>
        </div>
      </div>

      {/* <!-- Footer Start --> */}

      <div className={style.footer}>
        <div className={style.company}>
          <div className={style.companyhead}>Company</div>
          <div className={style.companyText}>About us </div>
          <div className={style.companyText}>Contact us</div>
          <div className={style.companyText}>Privacy Policy</div>
          <div className={style.companyText}>Terms & Condition</div>
          <div className={style.companyText}>Support Center</div>
        </div>
        <div className={style.company}>
          <div className={style.companyhead}>Transport</div>
          <div className={style.companyText}>Bus </div>
          <div className={style.companyText}>Ferry</div>
          <div className={style.companyText}>Scooters</div>
          <div className={style.companyText}>Bikes</div>
          <div className={style.companyText}>Planes</div>
        </div>
        <div className={style.contact}>
          <div className={style.companyhead}>Contact us</div>
          <div className={style.companyText}>
            <ImLocation2 />
            11a, Innkeeper Crescent
          </div>
          <div className={style.companyText}>
            <IoMdMail />info@gmail.com</div>
          <div className={style.companyText}>
            <BsTelephone />08099889988</div>
        </div>
        <div className={style.company}>
          <div className={style.companyhead}>Social Media</div>
          <div className={style.companyText}>
            <GrFacebookOption />Facebook</div>
          <div className={style.companyText}>
            <IoLogoTwitter />Twitter</div>
          <div className={style.companyText}>
            <RiInstagramFill />Instagram</div>
          <div className={style.companyText}>
            <ImLinkedin2 />LinkedIn</div>
        </div>
      </div>
    </div>

    // end of footer
  );
};

export default Footer;
