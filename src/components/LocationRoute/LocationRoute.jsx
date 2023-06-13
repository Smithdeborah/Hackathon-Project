import React from "react";
import style from "./Location.module.css";
// import Hero2 from "../Hero2/Hero2";
import { FaLocationArrow } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { MdOutlineMonitor } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoMdBicycle } from "react-icons/io";

const LocationRoute = () => {
  return (
    <>
      <div className={style.location}>
        <img className={style.location1} src="./img/location.png" alt="/" />
        <div className="container prt2">
          <div className="hrb">
            <div className="col-md-6 mt-5">
              <img
                className={style.location2}
                src="./img/road.png"
                alt="/"
              />
            </div>
            <div className="col-md-6 mt-5 lagos">
              <h4 className="lag">The Lagos you know has been reimagined</h4>
              <p className="ride">
                Reduce congestion, pollution, and emissions for a sustainable
                future <br></br>Engaging visuals showcasing a diverse range of
                transportation modes in action.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className={style.partner}>
          <div class="container text-center mt-5">
            <div class="row">
              <div class="col">
                <h4>Our Partners</h4>
                <p class="break-sentence">
                  Duis aute irure dolor in<br></br>
                  reprehenderit <br />
                  in voluptate.
                </p>
              </div>
              <div class="col">
                <img src="./img/part1.png" alt="" />
              </div>
              <div class="col">
                <img src="./img/part2.png" alt="" />
              </div>
              <div class="col">
                <img src="./img/part4.png" alt="" />
              </div>
              <div class="col">
                <img src="./img/part5.png" alt="" />
              </div>
              <div class="col">
                <img src="./img/part3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[5%]">
        {/* overall container */}
        <div className={style.bookride}>
          {/* book a ride container */}
          <div className={style.book}>
            <h3> Book a Ride</h3>
            <p>
              Follow our simple step by step guide to get started: <br></br>
              Sign up for an account to unlock a world of possibilities.
            </p>
          </div>

          {/* Boxes Container */}
          <div className={style.boxes}>
            <div className={style.box}>
              <div className="text-blue-400 text-3xl">
                <MdOutlineMonitor color="#0084FF" size={30} />
              </div>
              <p className="font-medium">Sign Up</p>
              <p className="text-[12px]">
                Nemo enim ipsum voluptatem voluptas aspernatur.
              </p>
            </div>
            <div className={style.box}>
              <div className="text-blue-400 text-3xl">
                <FaRegCreditCard color="#0084FF" size={30} />
              </div>
              <p className="font-medium">Get a card</p>
              <p className="text-[12px]">
                Nemo enim ipsum voluptatem voluptas aspernatur.
              </p>
            </div>
            <div className={style.box}>
              <div className="text-blue-400 text-3xl">
                <BsFillCartFill color="#0084FF" size={30} />
              </div>
              <p className="font-medium">Check routes</p>
              <p className="text-[12px]">
                Nemo enim ipsum voluptatem voluptas aspernatur.
              </p>
            </div>
            <div className={style.box}>
              <div className="text-blue-400 text-3xl">
                <SiHomeassistantcommunitystore color="#0084FF" size={30} />
              </div>
              <p className="font-medium">Choose transport choice</p>
              <p className="text-[12px]">
                Nemo enim ipsum voluptatem voluptas aspernatur.
              </p>
            </div>
            <div className={style.box}>
              <div className="text-blue-400 text-3xl">
                <IoMdBicycle color="#0084FF" size={30} />
              </div>
              <p className="font-medium">Make payment</p>
              <p className="text-[12px]">
                Nemo enim ipsum voluptatem voluptas aspernatur.
              </p>
            </div>
            <div className={style.box}>
              <div className="text-blue-400 text-3xl">
                <FaLocationArrow color="#0084FF" size={30} />
              </div>
              <p className="font-medium">Locate Ride</p>
              <p className="text-[12px]">
                Nemo enim ipsum voluptatem voluptas aspernatur.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <route> */}
      <img className={style.mapp} src="./img/mappy.png" alt="" />
      {/* Testimonal */}
      <div className={style.mapt}>
        <div className={style.testimonaltext}>
          <h4 className={style.text1}> Testimonal </h4>
          <p className={style.text2}>
            Hear from our delighted users sharing their positive experiences
            with Move Easy Short quotes and excerpts highlighting the
            convenience time-saving and environmental benefits they have
            enjoyed.
          </p>
        </div>
        <div className={style.text3}>
          <img className={style.arrow} src="./img/arrow.png" alt="/" />
          <img className={style.arrow2} src="./img/Testimonal.png" alt="/" />
          <img className={style.arrow3} src="./img/Testimonal.png" alt="/" />
        </div>
      </div>
    </>
  );
};

export default LocationRoute;
