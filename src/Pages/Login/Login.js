import "./Login.css";
import React, { useState } from "react";
import { json, Link } from "react-router-dom";
import axios from "axios";
import LoginP from "../../components/assets/images/Login.png";
import LoginForm from "../../sections/Form/LoginForm";
import { NavItem } from "../../components/index";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.put("http://localhost:8000/auth/login", {
        username,
        password
      });
      // console.log(response);
      setIsLoading(false);

      if (response.data.state === "Teacher") {
        window.location.href = "/dbTeacher";
      } else if (response.data.state === "Parent") {
        window.location.href = "/dbParent";
      } else if (response.data.state === "Admin") {
        localStorage.setItem("userData", response.data.id);
        window.location.href = "/Admin/AdminStudents";
      } else {
        console.log(response.data);
        setErrorMessage("Invalid username or password");
      }
    } catch (error) {
      console.log(error.response.data.message);
      setErrorMessage(error.response.data.message);
      setUsername("");
      setPassword("");
      setIsLoading(false);
    }
  };

  return (
    <div className=" h-screen w-full main-containerLogin">
      <div className="sec-container grid grid-cols-1 sm:grid-cols-2">
        <div className="hidden sm:block relative">
          <img
            src={LoginP}
            alt="Books Imgae"
            className="w-full h-full object-cover"
          />
          <p className=" absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-white text-8xl dark:text-white font-bold text-center">
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
          {isLoading && <div className="spinner"> </div>}
          <LoginForm
            username={username}
            setUserName={setUsername}
            password={password}
            setPassword={setPassword}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            handleSubmit={handleSubmit}
            isloading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
