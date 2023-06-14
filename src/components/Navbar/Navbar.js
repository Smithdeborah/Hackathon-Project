import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/image 8.png";
import "../../components/Navbar/nav.css";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to='/Home'>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link
              to="/Home"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/FAQs"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              to="/route"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Route
            </Link>
          </li>
          <li>
            <Link
              to="/booking"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Booking
            </Link>
          </li>
          <li>
            <Link
              to="/contacts"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Contact us
            </Link>
          </li>
          <li>
            <Link
              to="/Aboutus"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              About us
            </Link>
          </li>
        </ul>
        <div className="sign-up">
          <FaUser />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
