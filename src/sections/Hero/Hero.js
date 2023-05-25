import { FaGraduationCap } from "react-icons/fa";
import "./Hero.css";
import { Link } from "react-router-dom";
import { VidBg } from "../../components/assets";
import close_icon from "../../components/assets/images/close_icon.svg";

import Bounce from "react-reveal/Bounce";

import React, { useState, useEffect, useRef } from "react";

function useOutsideAlerter(ref, setOpenNav) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenNav(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const Hero = () => {
  const [openNav, setOpenNav] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setOpenNav);
  return (
    <>
      <div className="hero font-sans lg:mb-20 mb-10">
        {/* the video in the background */}
        <video autoPlay loop muted playsInline className="back-video ">
          <source src={VidBg} type="video/mp4" />
        </video>
        {/* ! Nav bar of the page contains the logo and links */}
        <nav className=" w-full absolute top-0 left-0 py-5 px-[8%] flex justify-between items-center">
          {/* Logo of the page  */}
          <FaGraduationCap
            style={{ width: "80px", height: "52px", color: "#1e88e5" }}
          />

          {/* Links to some topics in the page */}
          {/* Start Mobile Nav */}
          <Link
            onClick={() => setOpenNav(true)}
            className="sm:absolute sm:right-14 hamburger lg:invisible"
          >
            <svg
              width="52"
              height="32"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="1"
                d="M0.124103 1.33333C0.124103 0.596954 0.721057 0 1.45744 0H18.6667C19.403 0 20 0.596954 20 1.33333C20 2.06971 19.403 2.66667 18.6667 2.66667H1.45744C0.721056 2.66667 0.124103 2.06971 0.124103 1.33333ZM0 8C0 7.26362 0.596954 6.66667 1.33333 6.66667H18.6667C19.403 6.66667 20 7.26362 20 8C20 8.73638 19.403 9.33333 18.6667 9.33333H1.33333C0.596955 9.33333 0 8.73638 0 8ZM0 14.6667C0 13.9303 0.596953 13.3333 1.33333 13.3333H18.6667C19.403 13.3333 20 13.9303 20 14.6667C20 15.403 19.403 16 18.6667 16H1.33333C0.596953 16 0 15.403 0 14.6667Z"
                fill="#1e88e5"
              />
            </svg>
          </Link>

          {openNav && (
            <div
              ref={wrapperRef}
              className="absolute top-0 w-full h-48 bg-white"
            >
              <div
                onClick={() => setOpenNav(false)}
                className="absolute right-12 top-9"
              >
                <img height="30" width="30" src={close_icon} alt="" />
              </div>
              <div className="flex flex-col items-center justify-around h-full pt-5">
                <a
                  onClick={() => setOpenNav(false)}
                  href="#about"
                  className="text-lg font-semibold text-blue-800 transition-all hover:text-orange-500"
                >
                  About
                </a>
                <a
                  onClick={() => setOpenNav(false)}
                  href="#services"
                  className="text-lg font-semibold text-blue-800 transition-all hover:text-orange-500"
                >
                  Services
                </a>
                <a
                  onClick={() => setOpenNav(false)}
                  href="#contact"
                  className="text-lg font-semibold text-blue-800 transition-all hover:text-orange-500"
                >
                  Contact Us
                </a>
                <a
                  onClick={() => setOpenNav(false)}
                  href="login"
                  className="text-lg font-semibold text-blue-800 transition-all hover:text-orange-500"
                >
                  Login
                </a>
              </div>
            </div>
          )}
          {/* !----- End Mobile Nav -----! */}

          {/* !----- Start Disktop Nav-----!  */}
          <ul>
            <li>
              <a href="#about"> About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="login">Login</a>
            </li>
          </ul>
          {/* !----- Start Disktop Nav-----!  */}
        </nav>
        {/* ! End Nav bar of the page contains the logo and links */}

        {/* Start Content of the hero section that contain a Login button and headline and video in background  */}
        <div className=" text-center">
          <Bounce left>
            <h1 className=" text-title-xxl text-alterColor font-semibold duration-[0.5s] hover:text-gradientFrom">
              Student Tracking System
            </h1>
          </Bounce>
          <a
            href="#contact"
            className=" transition-colors duration-1000  inline-block text-white font-size-24 border-2 border-solid border-white px-[70px] py-[14px] rounded-[50px] mt-5 bg-gradient-to-tr from-mainColor to-alterColor hover:bg-gradient-to-tl hover:from-gradientFrom hover:to-gradientTo "
          >
            Contact Us
          </a>
        </div>
        {/* End Content of the hero section that contain a Login button and headline and video in background  */}
      </div>
    </>
  );
};

export default Hero;
