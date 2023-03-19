import "./Login.css";
// import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LoginP from "../../components/assets/images/Login.png";
import LoginForm from "../../sections/Form/LoginForm";
import { NavItem } from "../../components/index";

const Login = () => {
  return (
    <div className=" h-screen w-full main-containerLogin">
      <div className="sec-container grid grid-cols-1 sm:grid-cols-2">
        <div className="hidden sm:block relative">
          <img
            src={LoginP}
            alt="Books Imgae"
            className="w-full h-full object-cover"
          />
          <p className=" absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2  text-8xl dark:text-white font-bold text-center">
            Welcome to ESchool
          </p>
        </div>

        <div className=" flex flex-col ">
          <nav className="hidden sm:block self-end">
            <ul className="flex text-white text-lg justify-between">
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/">About</Link>
              </NavItem>
              <NavItem>
                <Link to="/">Services</Link>
              </NavItem>
              <NavItem>
                <Link to="/">Contact Us</Link>
              </NavItem>
            </ul>
          </nav>

          {/* The Form that the user will input his name and password then send it to the back-end for the verfication */}
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
