import "./Login.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./Form/LoginForm";
import axios from "axios";

import { VidBg } from "../../components/assets";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const navigateTo = (section) => {
    document.preventDefault();
    navigate("/");
    setTimeout(() => {
      const aboutSection = document.getElementById(section);
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    try {
      const response = await axios.put("https://trackingsystemserver.onrender.com/auth/login", {
        username,
        password,
      });
      console.log(response.status);
      console.log(response.data);
      setIsLoading(false);
      localStorage.setItem("islogged", true);
      localStorage.setItem("userData", response.data.id);
      localStorage.setItem("nameOfuser", response.data.nameOfuser);
      localStorage.setItem("userState", response.data.state);
      setUsername("");
      setPassword("");

      if (response.data.state === "Teacher") {
        window.location.href = "/teacher";
        setSuccess(true);
      } else if (response.data.state === "Parent") {
        window.location.href = "/parent";
        setSuccess(true);
      } else if (response.data.state === "Admin") {
        window.location.href = "/Admin/AdminStudents";
        setSuccess(true);
      } else {
        console.log(response.data);
        setErrorMessage("Invalid username or password");
      }
    } catch (error) {
      console.log("error");
      setErrorMessage("the userName or password is not correct");
      setUsername("");
      setPassword("");
      setIsLoading(false);
    }
  };

  // !----- THIS FOR BACGROUND ANIMATION -----!
  // const numberOfColorBoxes = 400;

  // const colorBoxes = Array.from({ length: numberOfColorBoxes }, (_, index) => (
  //   <div
  //     key={index}
  //     className="colorBox hover:bg-alterColor hover:duration-[0s]"
  //   ></div>
  // ));

  return (
    <>
      {/* !----- START MOUSE HOVER ANIMATION* -----!/}
      {/* <div className="bgAnimation z-1" id="bgAnimation">
        <div className="backgroundAmim"></div>
        {colorBoxes}
      </div> */}
      {/* !----- END MOUSE HOVER ANIMATION* -----!*/}

      <div className="test relative min-h-screen w-full overflow-hidden font-cla">
        {/* !----- START VIDEO BACKGROUND -----! */}
        <video autoPlay loop muted playsInline className="back-video ">
          <source src={VidBg} type="video/mp4" />
        </video>
        {/* !----- END VIDEO BACKGROUND -----! */}

        {/* !-----START NAV BAR MENU -----! */}
        <div className="container relative z-40 mx-auto p-4">
          <nav>
            <h1 className=" xl:text-title-xl text-title-lg">
              <span>STUDENT</span> Tracking System
            </h1>
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigateTo("about");
                  }}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigateTo("services");
                  }}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigateTo("contact");
                  }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
        {/* !-----END NAV BAR MENU -----! */}

        {/* !----- START LOGIN FORM -----! */}
        {/* {isLoading && <div className="spinner "> </div>} */}

        <LoginForm
          username={username}
          setUserName={setUsername}
          password={password}
          setPassword={setPassword}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          handleSubmit={handleSubmit}
          isloading={isLoading}
          success={success}
        />
        {/* !----- END LOGIN FORM -----! */}
      </div>
    </>
  );
};

export default Login;
