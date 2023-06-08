import React from "react";
import logo from "../../images/image 8.png";
import "../../components/Navbar/nav.css";
import { FaUser } from "react-icons/fa";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  return (
    <>
      {/* <header>
        <nav className="navb">
          <div className="logobna">
            <img src={logo} alt={logo} />
          </div>
          <div className="menu-ay">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Blog</a>
            <a href="/">Work</a>
          </div>
          <div className="icon">
            <FaUser />
          </div>
        </nav>
      </header> */}
      <div className="container">
        <nav className="navbar navbar-expand-lg ">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              //   width="30"
              //   height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a className="nav-link" href="#">
              <i className="bi bi-person-fill"></i>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
