import React from "react";
import { Link } from "react-router-dom";
// import "./AdminContent.css";
import logo from "../../components/assets/images/image-removebg-preview 1.png";
const AdminContent = ({ titleTable, children }) => {
  const logoutHandler = () => {
    localStorage.removeItem("islogged"), localStorage.removeItem("userData");
  };
  return (
    <>
      <div className=" sm:ml-80  ">
        {/* <!-- content header section --> */}
        <nav className="bg-blue-100 navbar border-l-2  border-solid border-white">
          <a href="#" className="navlink  ">
            <span to="/#" className="flex items-center ">
              <img
                src={logo}
                className="h-6 mr-3 sm:h-14 "
                alt="Student Tracking System Logo"
              />
              <span className="  self-center text-xl mt-1 text-sky-600 whitespace-nowrap text-white font-medium">
                Student Tracking System
              </span>
            </span>
          </a>
          <Link to="/login" className="navlink right">
            <button 
              type="button" 
              class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={logoutHandler}
              >
              Logout
            </button>
          </Link>
        </nav>
        {/* <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"> */}
        
              <div className="   text-white text-2xl my-5 ">
                <h1>{titleTable}</h1>
              </div>
            {children}
        {/* </div> */}
      </div>
    </>
  );
};

export default AdminContent;
