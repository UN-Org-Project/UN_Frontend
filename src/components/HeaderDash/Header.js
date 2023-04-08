import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../components/assets/index";
const Header = (props) => {
  return (
    <header className=" px-4 lg:px-6 py-2.5 flex flex-wrap justify-between  items-center mx-auto max-w-screen-xl w-full">
      <Link to="/" className="flex items-center">
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="E-School Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark: text-blue-500">
          Student Tracking
        </span>
      </Link>

      <div className="flex items-center justify-center h-full">
        {props.children}
        <button
          type="button"
          className={`bg-blue-600 inline-block rounded-md bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-300 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.7),0_4px_18px_0_rgba(59,113,202,0.6)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ml-5`}
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
