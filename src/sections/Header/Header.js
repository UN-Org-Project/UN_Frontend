import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../components/assets/images/image-removebg-preview 1.png";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-6 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/#" className="-m-1.5 p-1.5">
            <img
              src={logo}
              className="h-8 w-auto"
              alt="Student Tracking System Logo"
            />
            <span className=" sr-only">Student Tracking System</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-blue-500"
          >
            Home
          </Link>
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-blue-500"
          >
            About
          </Link>
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-blue-500"
          >
            Services
          </Link>
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-blue-500"
          >
            Contact Us
          </Link>
        </div>
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        <div className="fixed inset-0 z-10"></div>
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/#" className="-m-1.5 p-1.5">
              <img
                src={logo}
                className="h-8 w-auto"
                alt="Student Tracking System Logo"
              />
              <span className=" sr-only">Student Tracking System</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-500 hover:bg-gray-50"
                >
                  Features
                </Link>
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-500 hover:bg-gray-50"
                >
                  Features
                </Link>
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-500 hover:bg-gray-50"
                >
                  Marketplace
                </Link>
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-500 hover:bg-gray-50"
                >
                  Company
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </header>
  );

  // <nav
  //   id="header"
  //   className="h-24 flex flex-row justify-between items-center"
  // >
  //   <Link to="/#" className="flex items-center pl-7 lg:ml-10">
  //     <img
  //       src={logo}
  //       className="h-6 mr-3 sm:h-14 "
  //       alt="Student Tracking System Logo"
  //     />
  //     <span className="self-center text-xl mt-1 text-blue-600 font-semibold whitespace-nowrap ">
  //       Student Tracking System
  //     </span>
  //   </Link>

  //   <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
  //     <svg
  //       className="fill-current text-blue-600"
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="20"
  //       height="20"
  //       viewBox="0 0 20 20"
  //     >
  //       <title>menu</title>
  //       <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
  //     </svg>
  //   </label>
  //   <input className="hidden" type="checkbox" id="menu-toggle" />

  //   <div
  //     className="flex justify-around w-2/5 mr-12 sm:invisible lg:visible "
  //     id="menu"
  //   >
  //     <nav>
  //       <ul className=" md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
  //         <NavItem>
  //           <Link
  //             to="/"
  //             className="  hover:text-blue-800 font-medium text-lg py-2 px-3 lg:-ml-2 "
  //           >
  //             Home{" "}
  //           </Link>
  //         </NavItem>
  //         <NavItem>
  //           <a
  //             href="#about"
  //             className="  hover:text-blue-800 font-medium text-lg py-2 px-3 lg:-ml-2"
  //           >
  //             About{" "}
  //           </a>
  //         </NavItem>
  //         <NavItem>
  //           <a
  //             href="#services"
  //             className="  hover:text-blue-800 font-medium text-lg py-2 px-3 lg:-ml-2"
  //           >
  //             Services{" "}
  //           </a>
  //         </NavItem>
  //         <NavItem>
  //           <a
  //             href="mailto:someone@example.com"
  //             className=" hover:text-blue-800 font-medium text-lg py-2 px-3 lg:-ml-2"
  //           >
  //             {" "}
  //             Contact Us
  //           </a>
  //         </NavItem>
  //       </ul>
  //     </nav>
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
};

export default Header;
