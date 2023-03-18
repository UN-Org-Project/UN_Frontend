import { Link } from "react-router-dom";

import "./Header.css";
import { NavItem } from "../../components/index";

import logo from "../../components/assets/images/image-removebg-preview 1.png";

const Header = () => {
  return (
    <nav id="header" className="w-full z-30  py-1 bg-white mb-24 block">
      <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
        <div
          className=" flex flex-wrap items-center justify-end mr-0 md:mr-4"
          id="nav-content"
        >
          <div className="auth flex items-center w-full md:w-full">
            <Link to="/#" className="flex items-center">
              <img
                src={logo}
                className="h-6 mr-3 sm:h-14 "
                alt="Student Tracking System Logo"
              />
              <span className="self-center text-xl mt-1 text-blue-600 font-semibold whitespace-nowrap ">
                Student Tracking System
              </span>
            </Link>
          </div>
        </div>
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
          <svg
            className="fill-current text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul className=" md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
              <NavItem>
                <Link
                  to="/"
                  className="  hover:text-blue-800 font-medium text-lg py-2 px-3 lg:-ml-2 "
                >
                  Home{" "}
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/"
                  className="  hover:text-blue-800 font-medium text-lg py-2 px-3 lg:-ml-2"
                >
                  About{" "}
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/"
                  className="  hover:text-blue-800 font-medium text-lg py-2 px-3 lg:-ml-2"
                >
                  Services{" "}
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/"
                  className="  hover:text-blue-800 font-medium text-lg py-2 px-3 lg:-ml-2"
                >
                  Contact Us
                </Link>
              </NavItem>
            </ul>
          </nav>
        </div>
      </div>
    </nav>

    // <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    //   <div class="container flex flex-wrap items-center justify-between mx-auto">
    //     <Link to="/#" className="flex items-center">
    //       <img
    //         src={logo}
    //         class="h-6 mr-3 sm:h-14 "
    //         alt="Student Tracking System Logo"
    //       />
    //       <span class="self-center text-xl mt-1 text-blue-900 font-semibold whitespace-nowrap dark:text-white">
    //         Student Tracking System
    //       </span>
    //     </Link>

    //     <button
    //       data-collapse-toggle="navbar-default"
    //       type="button"
    //       class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //       aria-controls="navbar-default"
    //       aria-expanded="false"
    //     >
    //       <span class="sr-only">Open main menu</span>
    //       <svg
    //         class="w-6 h-6"
    //         aria-hidden="true"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           fill-rule="evenodd"
    //           d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //           clip-rule="evenodd"
    //         ></path>
    //       </svg>
    //     </button>

    //     <div class="hidden w-full md:block md:w-auto" id="navbar-default">
    //       <ul class="flex flex-col p-4 mt-0  bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //         <li>
    //           <Link
    //             to="/#"
    //             className="block py-2 pl-3 pr-4 text-base text-blue-600 bg-blue-700  md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
    //           >
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             to="/login"
    //             className="block py-2 pl-3 pr-4 text-base text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //           >
    //             Login
    //           </Link>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="block py-2 pl-3 pr-4 text-base text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //           >
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="block py-2 pl-3 pr-4 text-base text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //           >
    //             Services
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             class="block py-2 pl-3 pr-4 text-base text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //           >
    //             Contact us
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    // <div className="navbar navbar-expand-md cybrog-navbar">
    //   <div className="container">
    //     <Link to="/" className="navbar-brand nameofschool">
    //       <img src={logo} alt="" />
    //       E-School
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#mainmenu"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="mainmenu">
    //       <ul className="navbar-nav ms-auto color-ul">
    //         <NavItem>
    //           <Link to="/" className="nav-link">
    //             Home
    //           </Link>
    //         </NavItem>
    //         <NavItem>
    //           <Link to="/login" className="nav-link">
    //             Login
    //           </Link>
    //         </NavItem>
    //         <NavItem>
    //           <a href="/#" className="nav-link">
    //             About
    //           </a>
    //         </NavItem>
    //         <NavItem>
    //           <a href="/#" className="nav-link">
    //             Services
    //           </a>
    //         </NavItem>
    //         <NavItem>
    //           <a href="/#" className="nav-link">
    //             Contact us
    //           </a>
    //         </NavItem>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Header;
