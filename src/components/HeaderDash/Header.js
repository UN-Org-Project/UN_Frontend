import React from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";

import LogoutButton from "../Buttons/Buttons";
const Header = (props) => {
  return (
    <>
      <header className=" bg-clip-border bg-gradient-to-br from-blue-600 to-blue-400 block w-full  max-w-full my-4 text-white shadow-blue-500/40 shadow-lg rounded-xl px-0 py-1 ">
        <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
          {/* !----- THIS FOR THE LOGO AND THE BUTTON THAT DISPLAYS  THE SIDBAR WHEN THE SCREEN < 780PX -----! */}
          <div className="flex items-center gap-2 sm:gap-4 ">
            {/* !----- START HAMBURGER TOGGLE BTN -----! */}
            {/* !----- THIS BUTTON WILL DISPLAY WHEN THE SCREEN < 780PX  -----! */}
            <button
              aria-controls="sidebar"
              aria-expanded={props.sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                props.setSidebarOpen(!props.sidebarOpen);
              }}
              className=" block rounded-sm border border-stroke bg-gradient-to-tr from-gradientFrom to-gradientTo p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden">
              <span className="relative block h-5.5 w-5.5 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  strokeWidth="3"
                  className="h-6 w-6 text-blue-gray-500">
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"></path>
                </svg>
              </span>
            </button>
            {/* <!-- END HAMBURGER TOGGLE BTN --> */}

            <Link className="block flex-shrink-0 lg:block " to="/">
              {/* <img src={Logo} alt="Logo" width="42" height="32" /> */}
              <FaGraduationCap
                style={{ width: "52px", height: "52px", color: "#00e10b" }}
              />
            </Link>
          </div>

          {/* !----- THIS IS THE NAME OF THE WEBSITE -----! */}
          <div className="hidden md:block sm:hidden lg:block">
            <h1 className="block antialiased text-white tracking-normal leading-relaxed font-semibold text-xl font-sans">
              Student Tracking{" "}
              <span className="  text-gradientTo font-sans">System</span>
            </h1>
          </div>

          {/* !----- START LOGOUT BUTTON -----! */}
          <div className="flex items-center gap-3 2xsm:gap-7">
            <LogoutButton
              name="Log Out"
              path="/login"
              py="10px"
              px="10px"
              color="green"
            />
          </div>
          {/* !----- END LOGOUT BUTTON -----! */}
        </div>
      </header>
    </>
  );
};

export default Header;
