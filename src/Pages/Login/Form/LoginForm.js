import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

const LoginForm = (props) => {
  // states: to manage the POST
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");

  // This Function Will work when the form submited
  const handleSubmitt = async (e) => {
    e.preventDefault();

    if (username.trim() === "") {
      setIsValid(false);
      return;
    }
    if (password.trim() === "") {
      return;
    }

    setIsValid(true);
    //Send the username and the password to "http://localhost:8000/auth/login" end point
    try {
      const response = await axios.put("http://localhost:8000/auth/login", {
        username,
        password,
      });
      console.log(response.status);

      console.log(response.data);
      //Check if the response is OK
      if (response.status === 200) {
        console.log(response.data.state);
        // Assign the type of the dashboard state ("Admin , Parent , Teacher")
        const dashboardType = response.data.state;
        // according to the "dashboardType" navigate the user to his own dashboard
        switch (dashboardType) {
          case "Admin":
            console.log("Admin Dashboard id :" + response.data.id);

            // ! its important to Use the "router" and "Cookies" library instade of BOM
            window.localStorage.setItem("token", response.data.id);
            window.location.href = "./admin";
            break;
          case "Parent":
            console.log("Parent Dashboard id :" + response.data.id);

            // ! its important to Use the "router" and "Cookies" library instade of BOM
            window.localStorage.setItem("token", response.data.id);
            window.location.href = "./parent";
            break;
          case "Teacher":
            console.log("Teacher Dashboard id :" + response.data.id);

            // ! its important to Use the "router" and "Cookies" library instade of BOM
            window.localStorage.setItem("token", response.data.id);
            window.location.href = "./teacher";
            break;
          default:
            // Handle unrecognized dashboard type
            console.log("Not Valied");
            setError(error.response.data.message);
        }
      } else if (response.status === 404) {
        console.log("Error 404");
        setIsLoading(true);
      }
    } catch (error) {
      //! Handle any error may occared
      setError(error.response.data.message);
      setIsLoading(true);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <>
      {isLoading && <div className="spinner" />}

      <form
        onSubmit={handleSubmitt}
        className="flex flex-col max-w-[400] w-full mx-auto  p-8 px-8 rounded-lg justify-center flex-1"
      >
        <h2 className=" text-4xl dark:text-white font-bold text-center">
          SIGN IN
        </h2>
        <div className="flex flex-col text-white py-2">
          <label>User Name:</label>
          <input
            className="rounded-lg  mt-2 p-3 focus:border-blue-500 focus:bg-teal-400 focus:outline-none"
            type="text"
            placeholder="Enter Your ID"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>

        <div className="flex flex-col text-white py-2">
          <label>Password: </label>
          <input
            className="rounded-lg mt-2 p-3 focus:border-blue-500 focus:bg-teal-400 focus:outline-none"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <div className="text-white py-2 ">
          <a href="./Login.js" className="hover:text-teal-200 transition">
            Forgot Password ?
          </a>
          <p className=" text-red-400">{error}</p>
        </div>

        <button
          type="submit"
          className=" mt-2 w-full py-3 bg-teal-400 shadow-lg shadow-teal-500/50 hover:shadow-teal-600/40 text-white font-semibold rounded-lg transition-shadow"
        >
          Sign in
        </button>
      </form>
    </>
  );
};

export default LoginForm;
