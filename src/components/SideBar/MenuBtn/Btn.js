import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Btn = ({ path, children, name }) => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <li>
      <NavLink
        to={path}
        className={` font-sans text-center align-middle  flex items-center gap-4 w-full px-4 py-3 rounded-lg font-bold text-xl text-white center capitalize hover:shadow-lg  hover:bg-mainColor  transition-all duration-300 disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none active:opacity-[0.85]  dark:hover:bg-meta-4 ${
          (pathname === "/" || pathname.includes(path)) &&
          " bg-gradient-to-tr from-gradientFrom to-gradientTo shadow-md shadow-green-500/40   dark:bg-meta-4"
        }`}
      >
        {children}

        <p className="block antialiased text-white leading-relaxed capitalize font-medium text-xl font-sans">
          {name}
        </p>
      </NavLink>
    </li>
    // <NavLink
    //   onClick={props.onClick}
    //   to={props.path}
    //   className={`flex ${
    //     props.active ? `bg-teal-500` : ``
    //   } items-center text-sm font-medium text-white py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out`}
    // >
    //   <img src={props.icon} className=" w-6 h-6 fill-current " />
    //   <span className="ml-4">{props.btnName}</span>
    // </NavLink>
  );
};

export default Btn;
