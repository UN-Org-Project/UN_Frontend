import { NavLink } from "react-router-dom";
import { LogoutOutlined } from "@mui/icons-material";

const LogoutButton = ({ name, path, py, px, color }) => {
  {
    /* !----- ON CLICK ON THE LOGOUT BTN DELETE HIS DATA FROM THE LOCALSTOAGE -----! */
  }
  const logoutHandler = () => {
    localStorage.removeItem("islogged"), localStorage.removeItem("userData");
  };

  return (
    //? !----- THIS BUTTON WILL LOGOUT FROM THE PAGE AND DELETE USER DATA FROM THE LOCALSTORAGE  -----!
    <NavLink
      onClick={logoutHandler}
      className={`inline-flex items-center justify-center gap-2.5 rounded-md  ${
        color === "danger"
          ? "bg-danger"
          : "bg-gradient-to-tr from-gradientFrom to-gradientTo shadow-md shadow-green-500/40 "
      }  px-4 py-4 md:px-5 text-center font-medium text-white hover:bg-opacity-90 lg:px-6 xl:px-7`}
      // to={path}
    >
      <span className=" hidden md:block">{name}</span>
      <LogoutOutlined />
    </NavLink>
  );
};

export default LogoutButton;
