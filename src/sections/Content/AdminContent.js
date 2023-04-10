import React from "react";
import { Link } from "react-router-dom";
import "./AdminContent.css";
import logo from "../../components/assets/images/image-removebg-preview 1.png";
const AdminContent = ({ titleTable, children }) => {
  const logoutHandler = () => {
    localStorage.removeItem("islogged"), localStorage.removeItem("userData");
  };
  return (
    <>
      <div className="p-4 sm:ml-80 ">
        {/* <!-- content header section --> */}
        <nav className="bg-color-nav navbar">
          <a href="#" className="navlink  ">
            <span to="/#" className="flex items-center ">
              <img
                src={logo}
                className="h-6 mr-3 sm:h-14 "
                alt="Student Tracking System Logo"
              />
              <span className="self-center text-xl mt-1 text-sky-600 font-semibold whitespace-nowrap text-blue-600 ">
                Student Tracking System
              </span>
            </span>
          </a>
          <Link to="/login" className="navlink right">
            <button className="logout-btn" onClick={logoutHandler}>
              Logout
            </button>
          </Link>
        </nav>
        {/* <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"> */}
        <div className="containerS">
          <div className="title-form">
            <h1>{titleTable}</h1>
          </div>
          {children}
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default AdminContent;
