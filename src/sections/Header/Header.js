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
                <a
                  href="#about"
                  className="  hover:text-blue-800 font-medium text-lg py-2 px-3 lg:-ml-2"
                >
                  About{" "}
                </a>
              </NavItem>
              <NavItem>
                <a
                  href="#services"
                  className="  hover:text-blue-800 font-medium text-lg py-2 px-3 lg:-ml-2"
                >
                  Services{" "}
                </a>
              </NavItem>
              <NavItem>
                <a
                  href="mailto:someone@example.com"
                  className=" hover:text-blue-800 font-medium text-lg py-2 px-3 lg:-ml-2"
                >
                  {" "}
                  Contact Us
                </a>
              </NavItem>
            </ul>
          </nav>
        </div>
      </div>
    </nav>

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
