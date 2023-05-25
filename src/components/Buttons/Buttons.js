import { NavLink } from "react-router-dom";
import { LogoutOutlined } from "@mui/icons-material";

import React, { useRef } from "react";
import "./LogoutButton.css";

const LogoutButton = ({ name, path, py, px, color }) => {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;

    btnRef.current.style.setProperty("--x", offsetX + "px");
    btnRef.current.style.setProperty("--y", offsetY + "px");
  };

  {
    /* !----- ON CLICK ON THE LOGOUT BTN DELETE HIS DATA FROM THE LOCALSTOAGE -----! */
  }
  const logoutHandler = () => {
    localStorage.removeItem("islogged");
    localStorage.removeItem("userData");
    localStorage.removeItem("nameOfuser");
  };

  return (
    //? !----- THIS BUTTON WILL LOGOUT FROM THE PAGE AND DELETE USER DATA FROM THE LOCALSTORAGE  -----!
    <NavLink
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onClick={logoutHandler}
      className={`btnL overflow-hidden relative inline-flex items-center justify-center gap-2.5 rounded-md bg-gradient-to-tr from-gradientFrom to-gradientTo shadow-md shadow-green-500/40  px-2 py-3 md:px-5 text-center font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-7`}
      to={path}
    >
      <div className="relative z-1 flex items-center">
        <span className=" hidden md:block font-normal mr-2 text-xl ">
          {name}
        </span>
        <LogoutOutlined />
      </div>
    </NavLink>
  );
};

export default LogoutButton;
